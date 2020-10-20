import { Document } from 'mongoose';

export interface MemberInterface extends Document {
    readonly _id:string
    readonly firstname :string
    readonly lastname :string
    readonly address:string
    readonly tel:string
    readonly status:string
    readonly lat:string
    readonly lng:string
    readonly createmember_date:Date
    readonly updatemember_date:Date
}