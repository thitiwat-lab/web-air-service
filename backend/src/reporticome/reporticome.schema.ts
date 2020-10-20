import { string } from 'joi';
import * as mongoose from 'mongoose'

export const CollectionName = 'reportincome'

export const ReporticomeSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    tel:String,
    NinethousandBTU:String,
    TwelvethousandBTU:String,
    repair:String,
    pricerepair:String,
    promotion:String,
    sum:String,
    status:String,
    create_data:Date,
    update_date:Date
})