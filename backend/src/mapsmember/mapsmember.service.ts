import { string } from 'joi';
import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import * as moment from 'moment'

// internal
import {Collectionmaps} from './mapsmember.schema'
import {MapsMemberInterface} from './interface/mapsmember.interface'
import {CreateMaps} from './dto/createmaps.dto'
import {UpdateMaps} from './dto/updatemaps.dto'

@Injectable()
export class MapsmemberService {
    constructor(@InjectModel(Collectionmaps) private readonly MapsModel:Model<MapsMemberInterface>){}

    async findAll():Promise<MapsMemberInterface[]>{
        return await this.MapsModel.find({__v : 0 }).sort({create_date: -1}).exec()
    }
    async searchOne(searchOne:string):Promise<any>{
        return await this.MapsModel.find(searchOne).exec()
    }
    async findonce(id:string):Promise<any>{
        return await this.MapsModel.findOne({_id:id}).exec()
    }
    async createmaps(body:CreateMaps){
        const now = moment().utc().format()
        const modal = await new this.MapsModel({
            ...body, 
            create_date:now
        })
        return modal.save()
    }
    async updatemaps(id:string, body:UpdateMaps):Promise<any>{
        const now = moment().utc().format()
        return await this.MapsModel.updateOne({_id:id},{ ...body,
        update_date:now
        }).exec()
    }
    async deletemaps(id:string):Promise<any>{
        return await this.MapsModel.deleteOne({_id:id}).exec()
    }
}
