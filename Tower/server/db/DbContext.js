import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CommentSchema } from "../models/Comment.js";
import { TowerEventSchema } from "../models/Event.js";
import { TicketSchema } from "../models/Ticket.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Ticket = mongoose.model('Ticket', TicketSchema)

  Event = mongoose.model('Event', TowerEventSchema)

  Comment = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
