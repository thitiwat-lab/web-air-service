import { string } from 'joi';
import { Injectable,UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken';

// internal
import {UserService} from '../user/user.service'
import {JwtPayload} from './interfaces/JWT.interface'
import {CollectionName} from './auth.schema'
import {TokensInterface} from './interfaces/token.interface'
import {SECRET} from './cofig'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService:UserService, 
        ){}
    async validateUserByPassword(login: string , password: string) {
        const users = await this.usersService.findOneByEmail(login);
        return new Promise<any>((resolve) => {
                if(users){
                    if(this.comparePassword(password, users.password)){
                        resolve(this.createJwtPayload(users))
                    }
                    else {
                        throw new UnauthorizedException({message:'INVALID'});
                    }
                } 
        });
    }
     comparePassword(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash)
      }
    async validateUserByJwt(payload: JwtPayload){ 
        const user = await this.usersService.findOneByEmail(payload.email);
        if(user){
            return this.createJwtPayload(user);
        } else {
            throw new UnauthorizedException();
        }
    }
    // findToken(token: string): Promise<TokensInterface> {
    //     return this.tokenModel.findOne({ token }).exec()
    //   }
    createJwtPayload(user){
        const data: any = {
            email: user.email,
            user_id:user._id
        };
    const Jwt = jwt.sign(data, SECRET,{expiresIn: 1500});
        return {
            expiresIn: 120,
            token: Jwt ,
            status:user.status,
            userrights:user.userrights,
            tel:user.tel
        }

    }
    passwordHash(password: string): string {
        return bcrypt.hashSync(password, 8)
      }
     
}

