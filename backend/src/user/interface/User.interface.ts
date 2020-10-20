import { Document } from 'mongoose';

export interface UserInterface extends Document {
  readonly _id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly email:String;
  readonly password: string;
  readonly address: string;
  readonly tel: string;
  readonly status:string;
  readonly hashReset: {
    hash: string
    expired: Date
    resetTime: Date
  }
  readonly createuser_date: Date,
  readonly updateuser_date: Date
}
export interface UserRO {
  user: UserInterface;
}
export interface listUsers extends Document {
  readonly _id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly email:String;
  readonly address: string;
  readonly tel: string;
  readonly status:string;
  readonly createuser_date: Date,
  readonly updateuser_date: Date
}