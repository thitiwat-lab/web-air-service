import { Document } from 'mongoose';

export interface IncomeInterface extends Document{
    readonly firstname:string
    readonly lastname:string
    readonly tel:string
    readonly NinethousandBTU:string
    readonly TwelvethousandBTU:string
    readonly repair:string
    readonly pricerepair:string
    readonly promotion:string
    readonly sum:string
    readonly status:string
    readonly create_data:Date
    readonly update_date:Date
}