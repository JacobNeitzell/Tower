import { dbContext } from "../db/DbContext.js"
import { eventsService } from "./EventsService.js"

class TicketsService {


  async getMyTickets(accountId) {
    const ticket = await dbContext.Ticket.find({ accountId }).populate('profile', 'name picture')
      .populate('towerEvents', 'title coverimg')
    return ticket
  }

  async getTicketByProfileId(eventId, accountId) {
    const ticket = await dbContext.Ticket.findOne({ eventId, accountId })
      .populate('profile', 'name picture')
      .populate('towerEvent', 'title coverimg ')
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