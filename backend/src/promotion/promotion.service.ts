import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import * as moment from 'moment'

// internal
import {PromotionInterface} from './interface/promotion.interface'
import {PromotionCreateDto} from './dto/createpromotion.dto'
import {PromotionUpdateDto} from './dto/updatepromotion.dto'

@Injectable()
export class PromotionService {
    constructor (@InjectModel('promotion') private readonly promotionModel:Model<PromotionInterface>) {}

    async findAll (where):Promise<PromotionInterface[]>{
        return await this.promotionModel.find(where).sort({start_date: -1 }).exec()
    }

    async findOnce(id:string):Promise<PromotionInterface>{
        return await this.promotionModel.findOne({_id:id}).exec()
    }
    async createpromotion(body:PromotionCreateDto):Promise<PromotionInterface>{
        const model = await new this.promotionModel(body)
        return model.save()
    }
    async updatepromotion(id:string, body:PromotionUpdateDto):Promise<PromotionInterface>{
        const now = moment().utc().format()
        return await this.promotionModel.updateOne({_id:id}, {...body, update_date:now})
    }
    async delpromotion(id:string){
        return await this.promotionModel.deleteOne({_id:id}).exec()
    }
    // check name promotion
    async findname(name:string):Promise<PromotionInterface>{
        return await this.promotionModel.findOne({name}).exec()
    }
}
