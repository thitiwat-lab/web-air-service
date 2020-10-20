import { string } from 'joi';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment'

// internal
import {MemberInterface} from './interface/member.interface'
import {MemberCreateDto} from './dto/createmember.dto'
import {MemberUpdateDto} from './dto/updatemember.dto'
import {Collectionmaps} from '../mapsmember/mapsmember.schema'
import {MapsMemberInterface} from '../mapsmember/interface/mapsmember.interface'
@Injectable()
export class MemberService {
    constructor(
        @InjectModel('member') private readonly memberModel:Model<MemberInterface>
    ) {}

        async findAll(where):Promise<MemberInterface[]> {
            return await this.memberModel.find(where, {__v : 0 }).sort({createmember_date: -1 }).exec()
        }
        // search member One
        async searchOne(searchOne):Promise<MemberInterface[]>{
            return await this.memberModel.find(searchOne,{__v : 0 }).exec()
        }
        async findOnce(id:string):Promise<MemberInterface>{
            return await this.memberModel.findOne({_id:id})
        }
        // Create Member
        async createmember(body:MemberCreateDto):Promise<MemberInterface>{
            const now = moment().utc().format()
            const model = await new this.memberModel({
                ...body,
                lat:'',
                lng:'',   
                createmember_date: now,
                updatemember_date: now
            })
            return model.save()
        }
        // Update Member
        async updatemember(id:string, body:MemberUpdateDto):Promise<MemberInterface>{
            const now = moment().utc().format()
            return await this.memberModel.updateOne(
                {_id:id},{
                    ...body,
                    updatemember_date: now
                }
            ).exec()
        }
        // Delete Member
        async deleted(id:string) {
            return await this.memberModel.deleteOne({_id:id}).exec()
        }
        // Check TelNumber
        async findtel(tel:string):Promise<MemberInterface>{
            return this.memberModel.findOne({tel}).exec() 
        }
}
