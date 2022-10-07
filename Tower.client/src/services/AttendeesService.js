import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class AttendeesService {
  async getAttendees(eventId) {
    const res = await api.get(`/api/events/${eventId}/tickets`)
    AppState.attendees = res.data
  }



}
export const attendeesService = new AttendeesService