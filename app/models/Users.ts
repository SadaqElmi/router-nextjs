import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema: Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model<User>("User", userSchema);

export default User;
