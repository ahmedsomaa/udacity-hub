import { Router, Request, Response } from 'express';
import sessionLeadsRoutes from './leads';
import sessionsRoutes from './sessions';
import studentsRoutes from './students';

const routes = Router();

routes.use('/students', studentsRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/leads', sessionLeadsRoutes);

routes.get('/', (_req: Request, res: Response): void => {
  res.status(200).send(
    `
    <h1>Udacity Hub API</h1>
    <h2>Version 1.0.0</h2>
  `
  );
});

export default routes;
