import { Document } from 'mongoose'

export interface TokensInterface extends Document {
  readonly user_id: string
  readonly token: string
}
