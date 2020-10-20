import { string } from 'joi';
import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import * as moment from 'moment'

// internal
import {CollectionName  as CollectionBanner} from './banner.schema'
import {BannerInterface} from './interface/banner.interface'
import {BannerCreateDto} from './dto/createbanner.dto'
import {BannerUpdateDto} from './dto/updatebanner.dto'

@Injectable()
export class BannerService {
    constructor(@InjectModel(CollectionBanner) private readonly BannerModel:Model<BannerInterface>){}
        async findAll():Promise<BannerInterface[]>{
            return await this.BannerModel.find().exec()
        }
        async findOne(id:string):Promise<any>{
            return await this.BannerModel.findOne({_id:id}).exec()
        }
        async createbanner(body:BannerCreateDto):Promise<any>{
            const now = moment().utc().format()
            const modal = await new this.BannerModel( {
                ...body,
                bannercreate_date:now,
                bannerupdate_date:now
            },)
            return modal.save()
        }
        async updatebanner(id:string, body:BannerUpdateDto):Promise<any>{
            const now = moment().utc().format()
            return await this.BannerModel.updateOne({_id:id},{
                ...body,
                bannerupdate_date:now
            }).exec()
        }
        async deletebanner(id:string):Promise<any>{
            return await this.BannerModel.deleteOne({_id:id}).exec()
        }
}
