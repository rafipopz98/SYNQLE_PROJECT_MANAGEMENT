import mongoose, { model, Schema } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String },
  priority: { type: String },
  tags: { type: String },
  startDate: { type: Date },
  dueDate: { type: Date },
  points: { type: Number, default: 0 },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assignedUserIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  taskAssignments: [
    { type: mongoose.Schema.Types.ObjectId, ref: "TaskAssignment" },
  ],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Task = model("Task", taskSchema);

export default Task;
