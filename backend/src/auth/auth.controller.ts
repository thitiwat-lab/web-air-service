import { string } from 'joi';
import { Controller, Post, Body, HttpException, HttpStatus, UsePipes, Get, Param, Query } from '@nestjs/common';

// internal
import * as AutsMessage from '../messages/auth.message'
import {AuthService} from './auth.service'
import {LoginUserDto} from './authdto/login.DTO'
import KEY from '../../config/key'
import {RegisterDto} from './authdto/register.dto'
import {UserService} from '../user/user.service'
import {AuthLoginValidate, AuthRegisterValidate } from './auth.validate';
import {ValidationPipe} from '../pipes/validation.pipe'

@Controller('auth')
export class AuthController {
    constructor(
        private readonly AuthService:AuthService,
        private readonly userservice:UserService
        ){}
        @Get()
        async Getid(@Query() query:string):Promise<any>{
            try{
                const  result = await this.userservice.getid(query)
                return {
                  code:KEY.KEY_OK,
                  message:'',
                  result,
                }
            }catch(error){
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
      }
        }
    @Post('login')
    @UsePipes(new ValidationPipe(AuthLoginValidate))
    async login(@Body() loginDTO: LoginUserDto):Promise<any>{
        try{
         const token = await this.AuthService.validateUserByPassword(loginDTO.email, loginDTO.password)
         return{
            code:KEY.KEY_OK,
            message:'',
            token,
        }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
      }
    @Post('register')
    @UsePipes(new ValidationPipe(AuthRegisterValidate))
    async register(@Body() body : RegisterDto):Promise<any>{
        try{
            const checkemail = await this.userservice.findEmail(body.email)
            const checktel = await this.userservice.findtel(body.tel)
            if(checkemail){
                return{
                    code:KEY.KEY_MAIL_DUPP,
                    message:AutsMessage.AUTH_MAIL_EXISTS
                }
            }
            if(checktel){
                return{
                    code:KEY.KEY_PHONE_NUMBER_DUPP,
                    message:'Phone Number Duplicate'
                }
            }
            body.password = this.userservice.passwordHash(body.password)
            await this.userservice.register(body)
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        } 
    }
}
