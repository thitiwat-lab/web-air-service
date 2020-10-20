import {Document} from 'mongoose'

export interface MapsMemberInterface extends Document{
    readonly _id:string
    readonly member_id:string
    readonly firstname:string
    readonly lastname:string
    readonly address:string
    readonly tel:string
    readonly lat:string
    readonly lng:string
    readonly create_date:string,
    readonly update_date:string
}