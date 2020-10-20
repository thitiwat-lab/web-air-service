import * as mongoose from 'mongoose'

export const CollectionName = "banners"
export const BannerSchema = new mongoose.Schema({
    name:String,
    bannercreate_date:String,
    bannerupdate_date:String
    // originalname:String,
})