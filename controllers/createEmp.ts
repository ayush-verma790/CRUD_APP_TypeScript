import { Request, Response } from 'express';
import Employee, { EmployeeDocument } from '../models/Employee';

export const createEmployeeData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, dept,isActive } = req.body;
    const response: EmployeeDocument = await Employee.create({ name, dept ,isActive});

    return res.status(200).json({
      success: true,
      data: response,
      message: 'Entry created successfully',
    });
  } catch (err: any) {
    console.error(err);

    return res.status(500).json({
      success: false,
      data: 'error',
      message: err.message,
    });
  }
};
