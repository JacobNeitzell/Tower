import { Schema } from "mongoose";
import { SCHEMA_OPTIONS, ObjectId } from "../db/DbUtils.js";

export const TowerEventSchema = new Schema({
  creatorId: { type: ObjectId, required: true, ref: 'Account' },
  name: { type: String, required: true },
  description: { type: String, required: true },
  coverImg: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  startDate: { type: Date, required: true, },
  isCanceled: { type: Boolean, default: false, },
  type: { type: String, enum: ['concert', 'convention', 'sport', 'digital'], required: true }

}, SCHEMA_OPTIONS)

TowerEventSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})