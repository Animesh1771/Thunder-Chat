import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  profileImage: { type: String, default: "" },
  chats: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "chat" }],
    default: [],
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
