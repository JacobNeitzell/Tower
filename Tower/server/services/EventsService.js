import { BadRequest, Forbidden } from "@bcwdev/auth0provider/lib/Errors.js"
import { query } from "express"
import { dbContext } from "../db/DbContext.js"

class EventsService {
  async getAllEvents(query) {
    const events = await dbContext.Event.find({ isCanceled: false, ...query, }).populate('creator', 'name')
    return events
  }
  async getEventById(id) {
    const event = await dbContext.Event.findById(id).populate('creator', 'name picture')
    if (!event) {
      throw new BadRequest('Invalid or Bad Event Id')
    }
    return event
  }

  async createEvent(eventData) {
    const event = await dbContext.Event.create(eventData)
    await event.populate('creator', 'name picture')
    return event
  }

  async getEventIfNotCancelled(eventId) {
    const event = await this.getEventById(eventId)
    if (event.isCanceled) {
      throw new BadRequest('This event is cancelled')
    }
    return event


  }

  async cancelEvent(eventId, userId) {
    const event = await this.getEventById(eventId)
    // @ts-ignore
    if (event.creatorId.toString() != userId) {
      throw new Forbidden('Property is not owned by you, please request to make your own event')
    }
    // @ts-ignore
    event.isCanceled = true
    await event.save()
    return event
  }

  async editEvent(eventData, userInfo) {
    const event = await this.getEventById(eventData.id)

    // @ts-ignore
    if (userInfo.id != event.creatorId.toString()) { throw new Forbidden('Not your event please access your own event.') }
    if (event.isCanceled == true) { throw new BadRequest('this event is Canceled') }
    event.name = eventData.name || event.name
    event.description = eventData.description || event.description

    event.coverImg = eventData.coverImg || event.coverImg
    event.location = eventData.location || event.location
    event.capacity = eventData.capacity || event.capacity
    event.startDate = eventData.startDate || event.startDate

    event.type = eventData.type || event.type

    await event.save()

    return event
  }




}
export const eventsService = new EventsService()