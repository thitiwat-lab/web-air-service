import { Document } from 'mongoose';

export interface ReservationsInterface extends Document {
  readonly _id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly address: string;
  readonly tel: string;
  readonly amount: number;
  readonly status: string;
  readonly lat:string
  readonly lng:string
  readonly reservations_date: Date;
  readonly create_date:Date
  // readonly get_date:Date
}
