// Es un modelo de data- Es decir una Clase

import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        requited: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", taskSchema);
