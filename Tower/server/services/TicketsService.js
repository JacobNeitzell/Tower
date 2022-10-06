import { BadRequest, Forbidden } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { eventsService } from "./EventsService.js"

class TicketsService {


  async getMyTickets(accountId) {
    const ticket = await dbContext.Ticket.find({ accountId }).populate('profile', 'name picture')
      .populate('event')
    if (!ticket) {
      throw new BadRequest(
        'Invalid or Bad ticket Id'
      )
    }

    return ticket
  }


  async getTicketByEvent(eventId) {
    const ticket = await dbContext.Ticket.find({ eventId })
      .populate('profile', 'name picture')
      .populate('event')
    return ticket
  }

  async deleteTicket(ticketId, userId) {
    const ticket = await dbContext.Ticket.findById(ticketId)
    // @ts-ignore
    const event = await eventsService.getEventById(ticket.eventId)
    // @ts-ignore
    if (userId != ticket.accountId.toString()) {
      throw new Forbidden("This is not your ticket Charlie!")
    }

    // @ts-ignore
    await ticket.populate('profile', 'name picture')
    // @ts-ignore
    await ticket.remove()

    // @ts-ignore
    event.capacity++
    event.save()
    return ticket

  }


  async createTicket(ticketData) {
    const event = await eventsService.getEventIfNotCancelled(ticketData.eventId)
    // @ts-ignore
    if (event.capacity == 0) { throw new BadRequest('event is full sorry') }
    const ticket = await dbContext.Ticket.create(ticketData)
    // @ts-ignore
    event.capacity--
    event.save()
    await ticket.populate('profile', 'name picture')
    return ticket
  }
}
export const ticketsService = new TicketsService