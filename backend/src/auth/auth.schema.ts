import * as mongoose from 'mongoose'

// internal
import * as UsersSchema from '../user/user.schema'
export const CollectionName = 'tokens'

const TokensSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  token: {
    type: String,
    required: true,
  }
})
export { TokensSchema }