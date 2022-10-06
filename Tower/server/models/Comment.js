import { Schema } from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils";

export const CommentSchema = new Schema({
  creatorId: { type: ObjectId, required: true, },
  eventId: { type: ObjectId, required: true, },
  body: { type: String, required: true, },
  isAttending: { type: Boolean, }
}, SCHEMA_OPTIONS)

CommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'

})