import { Controller, Get, Query, Param, Post, Body, HttpException, HttpStatus, Put, Delete, UsePipes } from '@nestjs/common';

// internal
import {PromotionService} from './promotion.service'
import {PromotionCreateDto} from './dto/createpromotion.dto'
import {PromotionUpdateDto} from './dto/updatepromotion.dto'
import KEY from '../../config/key'
import {CreatePromotionValidate, UpdatePromotionValidate} from './promotion.validate'
import {ValidationPipe} from '../pipes/validation.pipe'
import {searchpromotion} from './dto/search.dto'


@Controller('promotion')
export class PromotionController {
    constructor (private readonly promotionService:PromotionService){}

    @Get()
    async GetAllPromotion(@Query() query:searchpromotion):Promise<any>{
        try{
            const where : any = {}
            if(query.promotion_name){
                where.promotion_name = query.promotion_name
            }
            const results = await this.promotionService.findAll(where)
            return{
                code:KEY.KEY_OK,
                message:'',
                results,
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Get(':id')
    async GetOnePromotion(@Param('id') id:string):Promise<any>{
        const results = await this.promotionService.findOnce(id)
        return {
            code:KEY.KEY_OK,
            message:'',
            results,
        }
    }
    @Post()
    @UsePipes(new ValidationPipe(CreatePromotionValidate))
    async CreatePromotion(@Body() body:PromotionCreateDto):Promise<any>{
        try{
            const checkPromotion_name = await this.promotionService.findname(body.promotion_name)
            if(checkPromotion_name){
                return {
                    code:KEY.KEY_PROMOTION_NAME_DUPP,
                    message:'',
                }
            }
            await this.promotionService.createpromotion(body)
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Put(':id')
    @UsePipes(new ValidationPipe(UpdatePromotionValidate))
    async UpdatePromotion(@Param('id') id:string, @Body() body:PromotionUpdateDto):Promise<any>{
        try{
            await this.promotionService.updatepromotion(id, body)
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        } 
    }
    @Delete(':id')
    async DeletePromotion(@Param('id') id:string):Promise<any>{
        try{
            await this.promotionService.delpromotion(id)
            return{
                code:KEY.KEY_OK,
                message:''
            }

        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
          } 
    }
}

