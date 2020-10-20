import * as mongoose from 'mongoose';
import { date } from 'joi';

export const CollectionName='airconditioning'
 const airconditioningSchema = new mongoose.Schema({
  name_air: String,
  btu: Number,
  price: Number,
  createAt:Date,
  updateAt:Date,
});
export {airconditioningSchema}