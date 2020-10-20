import { Injectable, Inject } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import * as moment from 'moment'


// internal
import {NewsInterface} from './interface/news.interface'
import{NewsCreateDto} from './newsdto/createnews.dto'
import {NewsUpdateDto} from './newsdto/updatenews.dto'
import {CreateDto} from './newsdto/create'
@Injectable()
export class NewsService {
    constructor(@InjectModel('news') private readonly NewsModel:Model <NewsInterface>){}

    async findAll():Promise<NewsInterface[]>{
        return await this.NewsModel.find().exec()
    }
    async findOne(id:string ):Promise<any>{
        return await this.NewsModel.findOne({_id:id}).exec()
    }
    async createnews(body:NewsCreateDto):Promise<any>{
        const now = moment().utc().format()
        const modal = await new this.NewsModel({
            ...body,
            news_date:now,
            newsupdate_date:now
        })
        return modal.save()
    }
    async createData(data:CreateDto):Promise<any>{
        return await new this.NewsModel(data).save()
    }
    async updatenews(id:string, body:NewsUpdateDto):Promise<any>{
        const now = moment().utc().format()
        return await this.NewsModel.updateOne({_id:id},{
            ...body,
            newsupdate_date:now
        }).exec()
    }
    async deletenews(id:string):Promise<any>{
        return await this.NewsModel.deleteOne({_id:id}).exec()
    }
}
