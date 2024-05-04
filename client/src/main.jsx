import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Login from "./components/Login/Login";
import RecipeList from "./components/RecipeList/RecipeList.jsx";
import SignUp from "./components/Signup/Signup";
import Home from "./components/HomePage/HomePage";
import MyRecipes from "./components/MySavedRecipes/MySavedRecipes.jsx";
import Auth from './utils/auth.js'

import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/recipe-list",
        element: Auth.loggedIn() ?<RecipeList /> : <Login />,
      },
      {
        path: "/my-recipes",
        element: Auth.loggedIn() ? <MyRecipes /> :<Login/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
