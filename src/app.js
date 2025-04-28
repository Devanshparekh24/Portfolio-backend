import express from 'express';
import cors from 'cors';





const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// routs import 
import projectRouter from './routes/project.route.js';
import certificateRouter from './routes/certificate.route.js';


//rouer Declaration
app.use('/api/v1/project', projectRouter);
app.use('/api/v1/certificate',certificateRouter); ;


export default app;