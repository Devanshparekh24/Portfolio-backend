import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
    {
        certificateName: { //aws,cloud
            type: String,
            required: [true, "certificate name is required"],
            trim: true,
        },
        imageUrl: {
            type: String,
            required: [true, "imageUrl name is required"],
            trim: true,
        },
        issueBy: {
            type: String,
            required: [true, "issueBy name is required"],
            set: (value) => value.charAt(0).toUpperCase() + value.slice(1), // Capitalize the first letter

        },
      
        issueDate: {
            type: Date,
            // required: [true, "certificate  date is required"],
        },

        certificateLink: {
            type: String,
            unique: true,
            trim: true,
            sparse: true,
            // required: true,
        },
        photo: {
            type: String,
            // required: true,
        },

    }
    , { timestamps: true }
);
const Certificate = mongoose.model("Certificate", certificateSchema);

export default Certificate;