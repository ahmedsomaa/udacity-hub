import { Router } from 'express';
import { addStudentToSession, createSession } from '../handlers/sessions';

const sessionsRoutes = Router();

sessionsRoutes.route('/').post(createSession);
sessionsRoutes.route('/:sessionId/students').post(addStudentToSession);

export default sessionsRoutes;
