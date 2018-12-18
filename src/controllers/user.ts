import { Request, Response } from "express";
import { Auth } from "./auth";

export class User {
  /**
   * 
   * @param req 
   * @param res 
   */
  public createUser(req: Request, res: Response) : Response {
    console.log('invoked create user.....');
    if (!req.body.username) {
      throw new Error('no username submitted');
    }
    const username = req.body.username;
    const token = new Auth().createToken(username);
    return res.json({
      username,
      token,
      id: 'sampleid....',
    });
  }

  /**
   * 
   * @param req 
   * @param res 
   */
  public getUser(req: Request, res: Response) : Response {
    const username = req.params.username;
    return res.json({username})
  }
}