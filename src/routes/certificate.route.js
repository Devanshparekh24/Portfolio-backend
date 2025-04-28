import { Router } from 'express';
import {
    createCertificate,
    getAllCertificate,
    deleteCertificate,
    updateCertificate,
  
} from '../controller/certificate.controller.js';
import upload from "../middleware/multer.middleware.js"



const router = Router();

// router.post('/create',upload.single("photo"), createProject);
router.get('/getAllCertificate', getAllCertificate);
router.post('/create',createCertificate)
router.delete('/:id', deleteCertificate);
router.put('/:id', updateCertificate);

// router.get('/:id', getProjectById);
// router.put('/:id', updateProject);
// router.put('/:id', upload.single("photo"), updateProject);

export default router;
