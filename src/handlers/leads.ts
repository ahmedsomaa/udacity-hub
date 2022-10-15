import SessionLeadModel from '../models/lead';
import { Request, Response, NextFunction } from 'express';
import { SessionLead } from '../models';

const sessionLeadModel = new SessionLeadModel();

const createSessionLead = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log(req.body);
    const created = await sessionLeadModel.create(req.body as SessionLead);
    res.status(200).json(created);
  } catch (error) {
    next(error);
  }
};

export { createSessionLead };
