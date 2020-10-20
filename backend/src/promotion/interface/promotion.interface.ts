import { Document } from 'mongoose';

export interface PromotionInterface extends Document {
    readonly _id:String
    readonly promotion_name: String
    readonly description: String
    readonly discount: String
    readonly start_date:Date
    readonly end_date:Date
}