
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AttendeesService {
  async getAttendees(eventId) {
    const res = await api.get(`/api/events/${eventId}/tickets`)
    AppState.attendees = res.data
  }

  async addTicket(eventData) {
    const res = await api.post('/api/tickets', eventData)
    const isAttending = res.data
    AppState.isAttending.push(isAttending)
    logger.log(res.data)
  }

  async removeTicket(attendeeId) {
    await api.delete('api/tickets/' + attendeeId)
    AppState.attendees = AppState.attendees.filter(a => a.id != attendeeId)
  }




}
export const attendeesService = new AttendeesService