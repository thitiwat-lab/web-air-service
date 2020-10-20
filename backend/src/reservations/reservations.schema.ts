import * as mongoose from 'mongoose';

export const CollectionName = 'reservations'
export const ReservationsSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  address: String,
  amount: Number,
  tel:String,
  status:String,
  lat:String,
  lng:String,
  reservations_date:Date,
  create_date:Date
  // get_date:Date
});
