import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Certificate from "../models/certificate.model.js";


const createCertificate = asyncHandler(async (req, res) => {
    try {
        const { certificateName, issueDate, imageUrl, certificateLink, issueBy } = req.body;

        if (!certificateName || !issueDate || !imageUrl || !issueBy || !certificateLink) {
            return res.status(400).json(new ApiError(400, "Please fill all the fields"));
        }

        // Optional: validate certificate link format
        // if (certificateLink && !certificateLink.startsWith("http")) {
        //     return res.status(400).json(new ApiError(400, "Please provide a valid certificate link"));
        // }

        // ✅ Check if a certificate with the same link already exists
        // const alreadyExists = await Certificate.findOne({ certificateLink });


        // if (alreadyExists) {
        //     return res.status(400).json(new ApiError(400, "Certificate with this link already exists"));
        // }

        // Create new certificate
        const certificate = await Certificate.create({
            certificateName,
            issueDate,
            certificateLink,
            issueBy,
            imageUrl,

        });
        // console.log(certificate, "certificate created successfully");


        return res.status(200).json(
            new ApiResponse(200, certificate, "Certificate created successfully")
        );
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Internal server error", error));
    }
});




const getAllCertificate = asyncHandler(async (req, res) => {

    try {
        const certificate = await Certificate.find();
        return res.status(200)
            .json(
                new ApiResponse(200, certificate, "certificate retrieved successfully")
            )





    } catch (error) {
        return res.status(500)
            .json(
                new ApiError(500, "Internal server error", error)
            )

    }
})

const deleteCertificate = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const certificate = await Certificate.findByIdAndDelete(id);
        if (!certificate) {
            return res
                .status(404)
                .json(
                    new ApiError(404, "certificate not found")
                )
        }
        return res.status(200)
            .json(
                new ApiResponse(200, certificate, "certificate deleted successfully")
            )

    } catch (error) {
        return res.status(500)
            .json(
                new ApiError(500, "Internal server error", error)
            )
    }
})
const updateCertificate = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        // Destructure only the fields that come from the request body
        const { certificateName, issueDate, imageUrl, certificateLink, issueBy } = req.body;

        // Create an empty object to hold the updated fields
        const updatedData = {};

        // Add only the fields that are provided in the request body
        if (certificateName) updatedData.certificateName = certificateName;
        if (issueDate) updatedData.issueDate = issueDate;
        if (imageUrl) updatedData.imageUrl = imageUrl;
        if (certificateLink) updatedData.certificateLink = certificateLink;
        if (issueBy) updatedData.issueBy = issueBy;

        // Update the certificate with only the fields that were provided
        const updatedCertificate = await Certificate.findByIdAndUpdate(
            id,
            updatedData,
            { new: true, runValidators: true }
        );

        if (!updatedCertificate) {
            return res.status(404).json(new ApiError(404, "Certificate not found"));
        }

        // console.log(updatedCertificate, "updatedCertificate");

        return res.status(200).json(
            new ApiResponse(200, updatedCertificate, "Certificate updated successfully")
        );

    } catch (error) {
        console.error("Update error:", error);
        return res.status(500).json(
            new ApiError(500, "Internal server error", error.message)
        );
    }
});


export {
    createCertificate,
    getAllCertificate,
    deleteCertificate,
    updateCertificate,
}