
import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class AttendeesService {
  async getAttendees(eventId) {
    const res = await api.get(`/api/events/${eventId}/tickets`)
    AppState.attendees = res.data
  }

  async addTicket(eventData) {
    const res = await api.post('/api/tickets', eventData)
    const attendees = res.data
    AppState.attendees.push(attendees)
  }

  async removeTicket(attendeeId) {
    await api.delete('api/tickets/' + attendeeId)
    AppState.attendees = AppState.attendees.filter(a => a.id != attendeeId)
  }




}
export const attendeesService = new AttendeesService