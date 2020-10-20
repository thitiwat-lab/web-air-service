import * as mongoose from 'mongoose'

export const CollectionName = "promotion"
export const PromotionShema = new mongoose.Schema({
     promotion_name: String,
     description: String,
     discount: String,
     start_date:Date,
     end_date:Date,
})