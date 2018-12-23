import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction} from "express";
import { ParsedJWT} from "../types";
// import * as bcrypt from "bcrypt";
import { env } from "../env";

export class Auth {
  /**
   * @description creates and signs jwt token
   * 
   * @param req 
   * @param _res
   * 
   * @returns string 
   */
  public createToken(username: string) : string {
    return jwt.sign({
      username,
    }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRATION,
    });
  }

  /**
   * @description decodes, and verifies JWT token is valid for user
   * submitting the token
   * 
   * @param req Request type, express
   * @param _res response type, express, unused
   * @param next next function, express, continue to next handler
   * 
   * @returns next|error
   */
  public isValid(req: Request, _res?: Response, next?: NextFunction) {
    console.log(req.params);
    if (!req.headers.authorization) {
      throw new jwt.JsonWebTokenError('no authorization information in header')
    }
    const token = req.headers.authorization.split(' ')[1];

    try {
      let decoded = jwt.verify(token, env.JWT_SECRET) as ParsedJWT;
      if (decoded.username !== req.params.username) {
        throw new jwt.JsonWebTokenError('invalid token');
      }
      if (next) {return next()}
      
      return true; 
    } catch (err) {
      throw new jwt.JsonWebTokenError(err);
    }
  }
}