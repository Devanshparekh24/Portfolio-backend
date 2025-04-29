import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Project from "../models/project.model.js";

const createProject = asyncHandler(async (req, res) => {
    try {
        const { name, description, startDate, endDate, project_Link } = req.body;
        const photo = req.file?.path




        if (!photo) {
            return res.status(400).json(new ApiError(400, "Please upload a photo"))



        }


        if (!name || !description || !startDate || !endDate) {
            return res.status(400).json(new ApiError(400, "Please fill all the fields"))
        }
        // Check if the project already exists

        const project = await Project.create({
            name,
            description,
            startDate,
            endDate,
            photo,
            project_Link,
            technologies: req.body.technologies.split(",").map((tech) => tech.trim()),
        });



        return res.status(200)
            .json(
                new ApiResponse(200, project, "Project created successfully")
            )
    } catch (error) {
        return res.status(500)
            .json(
                new ApiError(500, "Internal server error", error)
            )
    }
});

const getAllProjects = asyncHandler(async (req, res) => {

    try {
        const projects = await Project.find();
        return res.status(200)
            .json(
                new ApiResponse(200, projects, "Projects retrieved successfully")
            )


    } catch (error) {
        return res.status(500)
            .json(
                new ApiError(500, "Internal server error", error)
            )

    }
})

const getProjectById = asyncHandler(async (req, res) => {

    try {
        const { id } = req.params;
        const project = await Project.findById(id);

        if (!project) {
            return res
                .status(404)
                .json(
                    new ApiError(404, "Project not found")

                )
        }

        return res.status(200)
            .json(
                new ApiResponse(200, project, "Project retrieved successfully")
            )

    } catch (error) {
        return res.status(500)
            .json(
                new ApiError(500, "Internal server error", error)
            )

    }


})

const updateProject = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, startDate, endDate, project_Link, technologies } = req.body;

        const updatedData = {
            name,
            description,
            startDate,
            endDate,
            project_Link,
            technologies,

        };

        // If photo is uploaded, get its Cloudinary URL
        if (req.file && req.file.path) {
            updatedData.photo = req.file.path; // This is the Cloudinary URL
        }

        const updatedProject = await Project.findByIdAndUpdate(
            id,
            updatedData,
            { new: true, runValidators: true }
        );

        if (!updatedProject) {
            return res.status(404).json(new ApiError(404, "Project not found"));
        }

        return res.status(200).json(
            new ApiResponse(200, updatedProject, "Project updated successfully")
        );

        // console.log(updatedProject, "updatedProject");


    } catch (error) {
        return res.status(500).json(
            new ApiError(500, "Internal server error", error.message)
        );
    }
});



const deleteProject = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findByIdAndDelete(id);
        // console.log(project, "project")
        if (!project) {
            return res
                .status(404)
                .json(
                    new ApiError(404, "Project not found")
                )
        }
        return res.status(200)
            .json(
                new ApiResponse(200, project, "Project deleted successfully")
            )

    } catch (error) {
        return res.status(500)
            .json(
                new ApiError(500, "Internal server error", error)
            )
    }
})


export {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject

}