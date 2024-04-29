const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

// Use routes
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Apply Apollo GraphQL middleware to Express
server.applyMiddleware({ app });

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.use('/api/auth', authRoutes);
  app.use('/api/recipes', recipeRoutes);

  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const startApolloServer = async () => {
  await db.connectDb(); // Connect to the database
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`GraphQL Playground available at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startApolloServer();

module.exports = { app, server };