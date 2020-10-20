import * as mongoose from 'mongoose'
import * as Mapsmember from '../mapsmember/mapsmember.schema'

export const CollectionName = "member"
export const MemberSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    address: String,
    tel:String,
    lat:String,
    lng:String,
    createmember_date: Date,
    updatemember_date: Date
    
})