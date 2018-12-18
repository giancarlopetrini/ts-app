import {Request, Response} from 'express';

export class Status {
  public get (req: Request, res: Response) {
    res.status(200).json({
      status: "OK",
    });
  }
} 