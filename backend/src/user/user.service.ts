import { Injectable, Body } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import * as bcrypt from 'bcrypt'
import * as moment from 'moment'

// internal
import {CollectionName} from './user.schema'
import {UserInterface, listUsers} from './interface/User.interface'
import {UserCreateDto} from './userDTO/create.dto'
import { UpdateUserDto } from './userDTO/update.dto';
import {RegisterDto} from '../auth/authdto/register.dto'
import {ResetPass} from './userDTO/resetpass'
import {UpdateProfile} from './userDTO/updateprofile'

@Injectable()
export class UserService {
    constructor(@InjectModel(CollectionName) private readonly UserModel:Model<UserInterface>){}
    async findAll(where): Promise<UserInterface[]> {
        return await this.UserModel.find(where,{ password : 0 ,  __v : 0 }).sort({reservations_date: -1 }).exec()
      }
      async getid(id:string):Promise<any>{
        return await this.UserModel.find(id ,{ password : 0 ,  __v : 0 }).exec()
    }
      async searchOne(searchOne):Promise<UserInterface[]>{
        return await this.UserModel.find(searchOne,{ password : 0 ,  __v : 0 }).exec()
      }
      async findOnce(id: string): Promise<UserInterface> {
        return await this.UserModel.findOne({ _id: id },{password : 0 , __v: 0 }).exec();
      }
      // create users
      async created(body: UserCreateDto):Promise<any>{
        const now = moment().utc().format()
          const model = await new this.UserModel({
           ...body,
           status:'ใช้งาน',
           createuser_date:now,
           updateuser_date:now
        })
        return model.save()
      }
      async findOneByEmail(email: string): Promise<any> {
      return await this.UserModel.findOne({email})
      }
      passwordHash(password: string): string {
        return bcrypt.hashSync(password, 8)
      }
      // checkemail
      async findEmail(email: string): Promise<UserInterface> {
        return this.UserModel.findOne({email}).exec()
      }
      //checktel
      async findtel(tel:string):Promise<UserInterface>{
        return this.UserModel.findOne({tel}).exec()
      }
      // update
      async updated(id: string, body: UpdateUserDto): Promise<any> {
        const now = moment().utc().format()
        return await this.UserModel.updateOne(
          { _id: id }, {
            ...body,
            updateuser_date:now
          }).exec();
      }
      // delete
      async deleted(id: string) {
        return await this.UserModel.deleteOne({ _id: id }).exec();
      }
      // register
      async register(body:RegisterDto):Promise<any>{
        const now = moment()
        .utc()
        .format()
        const model = await new this.UserModel({
          ...body,
          status:'ใช้งาน',
          userrights:'admin',
          createuser_date:now,
          updateuser_date:now
        })
        return model.save()
      }
      async findById(id: string): Promise<UserInterface>{
        return await this.UserModel.findOne(id).exec();
    }
    // async updatemap(id:string, body:UpdateMapDto):Promise<any>{
    //   return await this.UserModel.updateOne({_id:id},body).exec();
    // }

    async reset(id:string, body:ResetPass):Promise<any>{
      // const ps = await this.passwordHash(body.newpassword)
      return await this.UserModel.updateOne({_id: id}, body).exec();
    }
    // async comparePassword(password: string, hash: string):Promise<boolean> {
    //   const math = await bcrypt.compareSync(password, hash)
    //     console.log(math)
    //     return math.exce()
    // }
  
    async updateProfile (id:string, body:UpdateProfile):Promise<any>{
      return await this.UserModel.updateOne({_id:id}, body).exec()
    }
  }
