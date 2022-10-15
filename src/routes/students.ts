import { Router } from 'express';
import { createStudent } from '../handlers/students';

const studentsRoutes = Router();

studentsRoutes.route('/').post(createStudent);

export default studentsRoutes;
