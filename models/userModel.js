import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  uid: String,
  displayName: String,
  email: String,
});

let User;

try {
  // Try to retrieve the model if it's already defined
  User = mongoose.model("User");
} catch {
  // If the model doesn't exist, define it
  User = mongoose.model("User", userSchema);
}

export default User;
