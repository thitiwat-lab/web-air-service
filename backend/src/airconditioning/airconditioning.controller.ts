import { Controller, Get, Param, Post, Body, Put, Delete, Req, HttpException, HttpStatus, UsePipes, Query } from '@nestjs/common';
import { Request } from 'express'


import {AirconditioningService} from './airconditioning.service'
import { CreateAirconditioningDto } from './airconditioningdto/createairconditioning.dto';
import { UpdateAirconditioningDto } from './airconditioningdto/updateairconditioning.dto';
import {ResponseInterface} from '../interfaces/response.interface'
import KEY from '../../config/key'
import {ValidationPipe} from '../pipes/validation.pipe'
import {CreateAir,UpdateAir} from './aircoditioning.varidate'
import {searchair} from './airconditioningdto/searchair'

@Controller('airconditioning')
export class AirconditioningController {
    constructor(private readonly airservice:AirconditioningService){}

    @Get()
    async typeairAll(@Query() query:searchair):Promise<ResponseInterface>{
        try{
            const where : any = {}
            if(query.name_air){
                where.name_air = query.name_air
            }
            const result = await this.airservice.findAll(where)
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
    async typeairOne(@Param('id') id:string):Promise<any>{
        return await this.airservice.findOne(id)
    }
    @Post()
    @UsePipes(new ValidationPipe(CreateAir))
    async createtypeair(@Body() body:CreateAirconditioningDto, @Req() req:Request):Promise<ResponseInterface>{
        try{
            const data = req['users']
            await this.airservice.createair(body)
            return{
                code: KEY.KEY_OK,
                message: '',
            }
        }catch(error){
            console.log(error)
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
        // return await this.airservice.createair(body)
    }
    @Put(':id')
    @UsePipes(new ValidationPipe(UpdateAir))
    async updatetypeair(@Param('id') id:string, @Body() body:UpdateAirconditioningDto):Promise<any>{
        try{
            await this.airservice.updateair(id,body)
            return {
                code: KEY.KEY_OK,
                 message: '',
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Delete(':id')
    async deletetypeair(@Param('id') id:string){
        try{
            await this.airservice.deleteair(id)
            return {
                code: KEY.KEY_OK,
                message: '',
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}

