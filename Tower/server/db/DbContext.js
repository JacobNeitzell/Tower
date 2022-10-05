import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { TowerEventSchema } from "../models/Event.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Event = mongoose.model('Event', TowerEventSchema)
}

export const dbContext = new DbContext()
