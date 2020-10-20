import * as mongoose from 'mongoose'

export const Collectionmaps = "mapsmember"
export const Mapsmember = new mongoose.Schema({
    // member_id:{
    //     type:String,
    //     required:true
    // },
    firstname: {
        type: String,
        required: true
      },
      lastname: {
        type:String,
        required: true
      },
      address: {
        type:String,
        required: true
      },
      tel: {
        type:String,
        required: true
      },
    lat:{
        type:String,
        required:true
    },
    lng:{
        type:String,
        required:true
    },
    create_date:Date,
    update_date:Date
})