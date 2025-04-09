import { Router } from 'express';
import {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
} from '../controller/project.controller.js';
import upload from "../middleware/multer.middleware.js"



const router = Router();

router.post('/create',upload.single("photo"), createProject);
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
// router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.put('/:id', upload.single("photo"), updateProject);

export default router;
