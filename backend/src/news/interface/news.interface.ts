import {Document} from 'mongoose'

export interface NewsInterface extends Document{
    readonly _id:string
    readonly  newstitle:string
    readonly subscription:string
    readonly name:string
    readonly newsupdate_date:Date
}