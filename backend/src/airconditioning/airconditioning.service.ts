import { airconditioningSchema } from './airconditioning.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as moment  from 'moment'

// internal
import { AirconditioningInterface } from './interface/airconditioning.interface';
import { CreateAirconditioningDto } from './airconditioningdto/createairconditioning.dto';
import { UpdateAirconditioningDto } from './airconditioningdto/updateairconditioning.dto';
import { CollectionName } from './airconditioning.schema'

@Injectable()
export class AirconditioningService {
    constructor(@InjectModel(CollectionName) private readonly airModel:Model<AirconditioningInterface>){}

    async findAll(where):Promise<AirconditioningInterface[]>{
        return await this.airModel.find(where,{__v : 0 }).exec()
    }
    async findOne(id:string):Promise<any>{
        return await this.airModel.findOne({_id:id}).exec()
    }
    async createair(body:CreateAirconditioningDto, ):Promise<any>{
        const now = moment().utc().format()
        const data = await new this.airModel({
            ...body,
            createAt: now,
            updateAt: now 
        })
        return data.save()
    }
    async updateair(id:string, body:UpdateAirconditioningDto):Promise<any>{
        const now = moment().utc().format()
        return await this.airModel.updateOne({_id:id},{...body, updateAt: now })  
    }
    async deleteair(id:string):Promise<any>{
        return await this.airModel.deleteOne({_id:id})
    }
}
