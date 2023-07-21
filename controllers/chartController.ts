// controllers/chartController.ts

import { Request, Response } from 'express';
import ChartData from '../models/ChartData';

export const getData = async (_req: Request, res: Response) => {
  try {
    const data = await ChartData.find().sort({ x: 1 });
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
