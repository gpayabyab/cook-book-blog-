import mongoose from 'mongoose';

const forgotPasswordSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  resetToken: {
    type: String,
    required: true
  },
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: '1h' } // Automatically remove documents after 1 hour
  }
});

const ForgotPassword = mongoose.model('ForgotPassword', forgotPasswordSchema);

export default ForgotPassword;