import { Controller, Get, Param, Post, Body, HttpException, HttpStatus, Put, Delete, UsePipes, Query } from '@nestjs/common';

// internal
import {CreateIncome} from './dto/createincome.dto'
import {UpdateIncome} from './dto/updateincome.dto'
import KEY from '../../config/key'
import {ReporticomeService} from'./reporticome.service'
import {CreateIncomeValidate, UpdateIncomeValidate, UpdateStatuss} from './reportincome.validate'
import {ValidationPipe} from '../pipes/validation.pipe'
import {UpdateStatus} from './dto/updatestatus'
import {SearchIncome} from './dto/search'


@Controller('reportincome')
export class ReporticomeController {
    constructor(private readonly IncomeService:ReporticomeService){}

    // get all income
    @Get()
    async GetAllIncome(@Query() query:SearchIncome):Promise<any>{
        try{
            const where : any ={}
            if(query.firstname){
                where.firstname = query.firstname
            }
            const results = await this.IncomeService.findAll(where)
            return{
                code:KEY.KEY_OK,
                message:'',
                results
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Get(':id')
    async GetOneIncome(@Param('id') id:string):Promise<any>{
        const results = await this.IncomeService.fineOnce(id)
        return{
            code:KEY.KEY_OK,
            message:'',
            results
        }
    }
    @Post()
    // @UsePipes(new ValidationPipe(CreateIncomeValidate))
    async CreateIncomes(@Body() body:CreateIncome):Promise<any>{
        try{
            await this.IncomeService.createincome(body)
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Put(':id')
    @UsePipes(new ValidationPipe(UpdateIncomeValidate))
    async UpdateIncomes(@Param('id') id:string, @Body() body:UpdateIncome):Promise<any>{
        try{
            await this.IncomeService.updaeincome(id, body)
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    } 

    // update status
    @Put('updatestatus/:id')
    @UsePipes(new ValidationPipe(UpdateStatuss))
    async UpdateSutusIncome(@Param('id') id:string, @Body() body:UpdateStatus):Promise<any>{
        try{
            await this.IncomeService.updatestatus(id, body)
            return {
                code: KEY.KEY_OK,
                message: ''
            }

        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Delete(':id')
    async DelIncomes(@Param('id') id:string):Promise<any>{
        try{
            await this.IncomeService.deleteincome(id)
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
