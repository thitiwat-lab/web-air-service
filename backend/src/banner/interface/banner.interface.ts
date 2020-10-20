import {Document} from 'mongoose'

export interface BannerInterface extends Document{
        readonly _id:string
        readonly name:string
        readonly bannercreate_date:string,
        readonly bannerupdate_date:string
}