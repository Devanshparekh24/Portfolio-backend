import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Project name is required"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Project description is required"],

        },
        startDate: {
            type: Date,
            required: [true, "Project start date is required"],
        },
        endDate: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ["not started", "in progress", "completed"],
            default: "not started",
        }, project_Link: {
            type: String,
            // required: true,
        },
        photo: {
            type: String,
            required: true,
        },
    }
    , { timestamps: true }
);
const Project = mongoose.model("Project", projectSchema);

export default Project;