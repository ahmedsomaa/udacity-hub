import SessionModel from '../models/session';
import { Request, Response, NextFunction } from 'express';
import { Session, SessionStudent } from '../models';

const sessionModel = new SessionModel();

const createSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const created = await sessionModel.create(req.body as Session);
    res.status(200).json(created);
  } catch (error) {
    next(error);
  }
};

const addStudentToSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const added = await sessionModel.addStudent(+req.params.sessionId, +req.body.studentId);
    res.status(200).json(added);
  } catch (error) {
    next(error);
  }
};

export { createSession, addStudentToSession };
