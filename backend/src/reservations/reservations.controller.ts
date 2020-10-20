import {
  Controller,
  Get,
  Param,
  Put,
  Post,
  Body,
  Delete,
  HttpException,
  HttpStatus,
  UsePipes,
  Query
} from '@nestjs/common';
import * as moment from 'moment'

// internal
import { ReservationsService } from './reservations.service';
import { CreateReservationsDTO } from './reservationsdto/createreservations';
import { UpdateReservationsDTO } from './reservationsdto/updatereservations';
import KEY from '../../config/key'
import {ValidationPipe} from '../pipes/validation.pipe'
import {ReservationValidate, UpdateReservation, Updatemaps} from './reservations.validate'
import {SearchReservation} from './reservationsdto/searchdto'
import {UpdateMaps} from './reservationsdto/updatemaps'

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservation: ReservationsService) {}

  @Get()
  async getreservation(@Query() query : SearchReservation): Promise<any> {
    try{
      const where : any = {}
      if(query.firstname){
        where.firstname = query.firstname
      }
      if(query.reservations_date){
        where.reservations_date = query.reservations_date
      }
      const results = await this.reservation.findAll(where);
      return {
        code:KEY.KEY_OK,
        message:'',
        results,
      }
    }catch (error){
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
      } 
  }
  @Get('searchone')
  async getquery(@Query() search : string ):Promise<any>{
    try{
      const  result = await this.reservation.searchOne(search)
      return {
        code:KEY.KEY_OK,
        message:'',
        result,
      }
    }catch(error){
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  @Get(':id')
  async reservationfindone(@Param('id') id: string): Promise<any> {
    const results = await this.reservation.findonce(id);
    return {
      code:KEY.KEY_OK,
      message:'',
      results,
    }
  }
  @Post()
  @UsePipes( new ValidationPipe(ReservationValidate))
  async createReservation(@Body() body: CreateReservationsDTO): Promise<any> {
    try{
      await this.reservation.createreservation(body);
      return{
        code:KEY.KEY_OK,
        message:'',
      }
    }catch (error){
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
      } 
  }
  @Put(':id')
  @UsePipes(new ValidationPipe(UpdateReservation))
  async updateReservation(
    @Param('id') id: string,
    @Body() body: UpdateReservationsDTO,
  ): Promise<any> {
    try{
      await this.reservation.updatedreservation(id, body);
      return{
        code:KEY.KEY_OK,
        message:'',
      }
    }catch(error){
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    } 
  }
  @Put('maps/:id')
  @UsePipes( new ValidationPipe(Updatemaps))
  async UpdateStatus(@Param('id') id:string, @Body() body:UpdateMaps):Promise<any>{
    try{
      await this.reservation.updatestatus(id, body)
      return{
        code:KEY.KEY_OK,
        message:'',
      }
    }catch(error){
      console.log(error)
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    } 
  }

  @Delete(':id')
  async deleteReservation(@Param('id') id: string): Promise<any> {
    try{
      await this.reservation.deletedreservation(id);
      return{
        code:KEY.KEY_OK,
        message:'',
      }
    }catch(error){
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    } 
  }
}
