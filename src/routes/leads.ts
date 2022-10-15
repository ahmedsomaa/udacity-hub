import { Router } from 'express';
import { createSessionLead } from '../handlers/leads';

const sessionLeadsRoutes = Router();

sessionLeadsRoutes.route('/').post(createSessionLead);

export default sessionLeadsRoutes;
