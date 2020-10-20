import { airconditioningSchema } from './../airconditioning.schema';
import { Document } from 'mongoose';

export interface AirconditioningInterface extends Document {
  readonly _id: string;
  readonly name_air: string;
  readonly btu: string;
  readonly price: number;
  readonly createBy:Date,
  readonly createAt:string,
  readonly updateBy:Date,
  readonly updateAt:string,
}
