import { object } from 'joi';
import * as mongoose from 'mongoose'

// internal
import * as UsersSchema from '../user/user.schema'
export const CollectionName = 'tokens'

const TokensSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema,
    ref: UsersSchema.CollectionName,
  },
  token: {
    type: String,
    required: true,
  },
})
export { TokensSchema }