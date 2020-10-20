import { Request } from 'express';
import { Controller, Get, Param, Post, Body, HttpException, HttpStatus, Put, Delete, Query, UsePipes, Req } from '@nestjs/common';

// internal
import {MemberService} from './member.service'
import {MemberCreateDto} from './dto/createmember.dto'
import {MemberUpdateDto} from './dto/updatemember.dto'
import KEY from '../../config/key'
import {SearchMember} from './dto/searchmember'
import {ValidationPipe} from '../pipes/validation.pipe'
import {CreateMemberValidate, UpdateMemberValidate} from './member.validate'

@Controller('member')
export class MemberController {
    constructor(private readonly memberservice:MemberService){}
    // Get Member All
    @Get()
    async GetAllMember(@Query() query:SearchMember):Promise<any>{
        try{
            const where : any = {}
            if (query.firstname) {
              where.firstname = query.firstname 
            }
            if(query.tel){
                where.tel = query.tel
            }
            const results =  await this.memberservice.findAll(where)
                return{
                    code:KEY.KEY_OK,
                    message:'',
                    results
                }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    //   searchOne
    @Get('searchone')
    async getquery(@Query() search : string ):Promise<any>{
      try{
        const  result = await this.memberservice.searchOne(search)
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
    async GetOneMember(@Param('id') id:string):Promise<any>{
      const results = await this.memberservice.findOnce(id)
        return {
            code:KEY.KEY_OK,
            message:'',
            results
        }
    }
    @Post()
    @UsePipes(new ValidationPipe(CreateMemberValidate))
    async CreateMember(@Req() req:Request, @Body() body:MemberCreateDto):Promise<any>{
        try{
            const checktel = await this.memberservice.findtel(body.tel)
            if(checktel){
                return{
                    code:KEY.KEY_PHONE_NUMBER_DUPP,
                    message:'Phone Number Duplicate'
                }
            }
            await this.memberservice.createmember(body)
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            console.log(error)
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Put(':id')
    @UsePipes(new ValidationPipe(UpdateMemberValidate))
    async UpdateMember(@Param('id') id:string, @Body() body:MemberUpdateDto):Promise<any>{
        try{
            // const checktel = await this.memberservice.findtel(body.tel)
            // if(checktel){
            //     return{
            //         code:KEY.KEY_PHONE_NUMBER_DUPP,
            //         message:'Phone Number Duplicate'
            //     }
            // }
            await this.memberservice.updatemember(id, body)
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
          } 
        }
    @Delete(':id')
    async DeleteMember(@Param('id') id:string):Promise<any>{
        try{
            await this.memberservice.deleted(id)
            return{
                code:KEY.KEY_OK,
                message:''
            }

        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
          } 
    }
    // Update Maps
//     @Put('map/:id')
//     @UsePipes(new ValidationPipe(MapUpdateValidate))
//     async updateMap(@Param('id') id:string, @Body() body:UpdateMapDto):Promise<any>{
//         try{
//             await this.memberservice.updatemap(id,body);
//                 return{
//                 code:KEY.KEY_OK,
//                 message:''
//             }
//         }catch(error) {
//         throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
//         }
//     }
}

