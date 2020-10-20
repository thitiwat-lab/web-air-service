import { Controller, Get, Post, Body, HttpException, HttpStatus, Req, Delete, Put, Param, UsePipes, Query } from '@nestjs/common';
import { Request } from 'express'

// internal
import KEY from '../../config/key'
import{UserService}from './user.service'
import {UserCreateDto} from './userDTO/create.dto'
import {UpdateUserDto} from './userDTO/update.dto'
import {ValidationPipe} from '../pipes/validation.pipe'
import {UsercreateValidate, UserUpdateValidate, UserUpdateProfile, Resetps} from './user.validate'
import {ResponseInterface} from '../interfaces/response.interface'
import {SearchUsers} from './userDTO/search.dto'
// import{UpdateMapDto}from '../member/dto/updatemap.dto'
import {ResetPass} from './userDTO/resetpass'
import {UpdateProfile} from './userDTO/updateprofile'

@Controller('user')
export class UserController {
    constructor(private readonly userservice:UserService){}

    @Get()
    async getAll(@Query() query : SearchUsers, @Req() req: Request):Promise<ResponseInterface>{
      try{
        const where : any = {}
        if (query.email) {
          where.email = query.email 
        }
        const results = await this.userservice.findAll(where)
        return {
          code:KEY.KEY_OK,
          message:'',
          results,
        }
      } catch (error){
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
      } 
    }
     //   searchOne
     @Get('searchone')
     async getquery(@Query() search : string ):Promise<any>{
       try{
         const  result = await this.userservice.searchOne(search)
         return {
           code:KEY.KEY_OK,
           message:'',
           result,
         }
       }catch(error){
         throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
       }
     }
    @Get(':id')
    async getone(@Param('id') id:string):Promise<any>{
      try{
        const result = await this.userservice.findOnce(id)
        return{
          code:KEY.KEY_OK,
          message:'',
          result,
        }
      }catch(error) {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Post()
    @UsePipes(new ValidationPipe(UsercreateValidate))
    async create(@Body() body:UserCreateDto):Promise<any>{
      try{
        const checkemail = await this.userservice.findEmail(body.email)
        const checktel = await this.userservice.findtel(body.tel)
        if(checkemail){
            return {
                code: KEY.KEY_MAIL_DUPP,
                message: 'E-Mail Duplicate',
              }
        }
        if(checktel){
          return{
            code:KEY.KEY_PHONE_NUMBER_DUPP,
            message:'Phone Number Duplicate'
          }
        }
        body.password = this.userservice.passwordHash(body.password)
        await this.userservice.created(body)
        return {
          code:KEY.KEY_OK,
          message:''
        }
      }catch(error) {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Put(':id')
    @UsePipes(new ValidationPipe(UserUpdateValidate))
  async update(
    @Param('id') id: string,
    @Body() body: UpdateUserDto,
  ): Promise<any> {
    try{
      await this.userservice.updated(id, body);
      return{
        code:KEY.KEY_OK,
        message:''
      }
    }catch(error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
      }
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    try{
      await this.userservice.deleted(id);
      return{
       code:KEY.KEY_OK,
       message:''
      }
    }catch(error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
      }
  }
  @Put('updateprofile/:id')
  @UsePipes(new ValidationPipe(UserUpdateProfile))
  async UpdateProfileStaff(@Param('id') id:string, @Body() body:UpdateProfile){
    try{      
      await this.userservice.updateProfile(id, body)
      return{
        code: KEY.KEY_OK,
        message: '',
      }
    }catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  
  @Put('resetpass/:id')
  @UsePipes(new ValidationPipe(Resetps))
  async ResetPassword( @Param('id') id:string , @Body() body:ResetPass):Promise<any>{
    try{
      body.password = this.userservice.passwordHash(body.password)
      await this.userservice.reset(id, body)
        return{
          code:KEY.KEY_OK,
          message:''
        }
    }catch (error) {
      console.log(error)
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}

