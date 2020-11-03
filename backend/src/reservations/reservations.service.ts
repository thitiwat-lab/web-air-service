import { string } from 'joi';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment'

// internal
import { ReservationsInterface } from './interface/reservations.interface';
import { CreateReservationsDTO } from './reservationsdto/createreservations';
import { UpdateReservationsDTO } from './reservationsdto/updatereservations';
import {UpdateMaps} from './reservationsdto/updatemaps'

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel('reservations')
    private readonly reservationsmodel: Model<ReservationsInterface>,
  ) {}
  async findAll(where:string): Promise<ReservationsInterface[]> {
    return await this.reservationsmodel.find(where,{__v : 0 }).sort({create_date: -1 }).exec();
  }
  async findonce(id: string): Promise<ReservationsInterface> {
    return await this.reservationsmodel.findOne({ _id: id });
  }
  async searchOne (date):Promise<any>{
    return await this.reservationsmodel.find(date).exec()
  }
  async createreservation(body: CreateReservationsDTO): Promise<any> {
    const now = moment().utc().format()
    const model = await new this.reservationsmodel({
      ...body,
      lat:'',
      lng:'',
      create_date:now,
      status:'อยู่ระหว่างดำเนินการ',
    })
    return model.save();
  }
  async updatedreservation(
    id: string,
    body: UpdateReservationsDTO,
  ): Promise<any> {
    return await this.reservationsmodel.updateOne({ _id: id },body)
  }
  async updatestatus(id:string, body:UpdateMaps):Promise<any>{
    return await this.reservationsmodel.updateOne({_id:id}, body).exec()
  }
  async deletedreservation(id: string): Promise<any> {
    return await this.reservationsmodel.deleteOne({ _id: id }).exec();
  }
}
