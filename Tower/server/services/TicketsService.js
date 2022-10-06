import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
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


  async getTicketByEvent(event) {
    const ticket = await dbContext.Ticket.find({ event })
      .populate('profile', 'name picture')
      .populate('event')
    return ticket
  }


  async createTicket(ticketData) {
    const event = await eventsService.getEventIfNotCancelled(ticketData.eventId)
    const ticket = await dbContext.Ticket.create(ticketData)
    // @ts-ignore
    event.capacity--
    event.save()
    await ticket.populate('profile', 'name picture')
    return ticket
  }
}
export const ticketsService = new TicketsService