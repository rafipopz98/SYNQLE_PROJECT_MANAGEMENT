import mongoose, { Schema, model } from "mongoose";

const teamSchema = new Schema(
  {
    teamName: { type: String, required: true },
    productOwnerUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    projectManagerUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  },
  { timestamps: true }
);


const Team = model("Team", teamSchema);

export default Team;
