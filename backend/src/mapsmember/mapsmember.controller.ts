import { Controller, Get, Param, HttpException, HttpStatus, Post, Body, Put, Delete, Req, UsePipes, Query } from '@nestjs/common';
import { Request } from 'express'

// internal
import {MapsmemberService} from './mapsmember.service'
import KEY from '../../config/key'
import {CreateMaps} from './dto/createmaps.dto'
import {UpdateMaps} from './dto/updatemaps.dto'
import {ValidationPipe} from '../pipes/validation.pipe'
import {CreateMapsValidate, UpdateMapsValidate} from './mapsmember.validate'

@Controller('mapsmember')
export class MapsmemberController {
    constructor(private readonly MapsmemberService:MapsmemberService){}
    @Get('searchonce')
    async getquery(@Query() search : string ):Promise<any>{
      try{
        const  results = await this.MapsmemberService.searchOne(search)
        return {
          code:KEY.KEY_OK,
          message:'',
          results,
        }
      }catch(error){
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
      }
    }
    @Get()
    async GetAllMaps():Promise<any>{
        try{
            const results = await this.MapsmemberService.findAll()
            return{
                code:KEY.KEY_OK,
                memsage:'',
                results
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Get(':id')
    async GetOneMaps(@Param('id') id:string):Promise<any>{
        const results = await this.MapsmemberService.findonce(id)
        return{
            code:KEY.KEY_OK,
            memsage:'',
            results
        }
    }
    @Post()
    @UsePipes(new ValidationPipe(CreateMapsValidate))
    async Createmaps(@Body() body:CreateMaps){
        try{
            await this.MapsmemberService.createmaps(body)
            return{
                code: KEY.KEY_OK,
                memsage:''
            }
        }catch(error){
            console.log(error)
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Put(':id')
    @UsePipes(new ValidationPipe(UpdateMapsValidate))
    async Updatemaps(@Param('id') id:string, @Body() body:UpdateMaps):Promise<any>{
        try{
            await this.MapsmemberService.updatemaps(id, body)
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
          } 
    }
    @Delete(':id')
    async deleted(@Param('id') id:string):Promise<any>{
        await this.MapsmemberService.deletemaps(id)
        return{
            code:KEY.KEY_OK,
            memsage:''
        }
    }
}
