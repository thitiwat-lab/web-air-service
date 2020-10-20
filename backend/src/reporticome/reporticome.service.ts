import { string } from 'joi';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import {Model} from 'mongoose'
import * as moment from 'moment'

// internal
import {IncomeInterface} from './interface/income.interface'
import {CreateIncome} from './dto/createincome.dto'
import {UpdateIncome} from './dto/updateincome.dto'
import {UpdateStatus} from './dto/updatestatus'
import {CollectionName as reportincome} from './reporticome.schema'


@Injectable()
export class ReporticomeService {
    constructor(@InjectModel(reportincome) private readonly inmcoeModel: Model<IncomeInterface>){}

    async findAll(where) :Promise<IncomeInterface[]>{
        return await this.inmcoeModel.find(where,{__v : 0 }).sort({create_data: -1 }).exec()
    }
    async fineOnce(id: string): Promise<IncomeInterface>{
        return await this.inmcoeModel.findOne({_id:id}).exec()
    }
    async createincome(body:CreateIncome): Promise<IncomeInterface>{
        const now = moment().utc().format()
        const model = await new this.inmcoeModel({
            ...body,
            create_data:now,
            update_date:now,
            status:'อยู่ระหว่างดำเนินการ',
            sum:'0',
            NinethousandBTU:"0",
            pricerepair:'0',
            TwelvethousandBTU:"0"
        })
        return model.save()
    }
    async updaeincome(id:string, body:UpdateIncome):Promise<IncomeInterface>{
        const now = moment().utc().format()
        return await this.inmcoeModel.updateOne({_id:id}, {
            ...body,
            update_date:now
        }).exec()
    }
    async deleteincome(id: string){
        return await this.inmcoeModel.deleteOne({_id:id}).exec()
    }

    // update status
    async updatestatus(id:string, body:UpdateStatus):Promise<IncomeInterface>{
        return await this.inmcoeModel.updateOne({_id:id}, body).exec()
    }
}
