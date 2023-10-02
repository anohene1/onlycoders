import mongoose from "mongoose";

export interface User extends mongoose.Document {
  email: string;
  password: string;
}

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema<User>({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
