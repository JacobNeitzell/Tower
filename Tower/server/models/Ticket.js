import { Schema } from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";

export const TicketSchema = new Schema({
  eventId: { type: ObjectId, required: true, ref: 'Account' },
  accountid: { type: ObjectId, required: true, ref: 'Account' },

}, SCHEMA_OPTIONS)

TicketSchema.virtual('account', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

TicketSchema.virtual('towerEvent', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'TowerEvent'

})