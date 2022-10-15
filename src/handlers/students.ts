import StudentModel from '../models/student';
import { Request, Response, NextFunction } from 'express';
import { Student } from '../models';

const studentModel = new StudentModel();

const createStudent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const created = await studentModel.create(req.body as Student);
    res.status(200).json(created);
  } catch (error) {
    next(error);
  }
};

export { createStudent };
