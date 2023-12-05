import express, { Router } from 'express';
import { createEmployeeData } from '../controllers/createEmp';

const router: Router = express.Router();

router.post("/create", createEmployeeData);


export default router;
