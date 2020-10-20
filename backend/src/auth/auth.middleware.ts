import { Injectable, NestMiddleware} from '@nestjs/common';
import { Request, Response } from 'express';

// internal
import {UserService} from '../user/user.service'
import * as jwt from 'jsonwebtoken';
import { SECRET } from './cofig';
import KEY from '../../config/key'
import { AUTH_TOKEN_EXPIRE } from '../messages/auth.message'

import {AuthService} from './auth.service'

@Injectable()
export class Middleware implements NestMiddleware {
    constructor(
        private readonly UserService:UserService,
        ){}
 async use(req: Request, res: Response, next: Function) {
    const authHeaders = req.headers.authorization;
    if (authHeaders && (authHeaders as string).split(' ')[1]) {
      const token = (authHeaders as string).split(' ')[1];
      const decoded: any = jwt.verify(token, SECRET, function(err, decoded) {});
      const user = await this.UserService.findById(decoded);
      if (!user) {
          return res.status(401).json({
            code:KEY.KEY_TOKEN,
            message:AUTH_TOKEN_EXPIRE
          })
      }
      req['user'] = user;
      next();
    } else {
        res.status(401).json({
            code: KEY.KEY_TOKEN,
            message: AUTH_TOKEN_EXPIRE ,
      })
    }
  }
}
