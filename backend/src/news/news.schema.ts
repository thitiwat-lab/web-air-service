import * as mongoose from 'mongoose'

export const NewsSchema = new mongoose.Schema({
    // newstitle:String,
    detail:String,
    name:String,
    news_date:Date,
    newsupdate_date:Date
})