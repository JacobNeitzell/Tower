import { AppState } from "../AppState.js"
import { TowerEvent } from "../models/TowerEvent.js"
import { api } from "./AxiosService.js"

class EventService {
  async getEvents(type = '') {
    let res
    if (type) {
      res = await api.get('/api/events', {
        params: {
          type: type
        }
      })
    } else {
      res = await api.get('/api/events')
    }
    AppState.events = res.data.map(e => new TowerEvent(e))
  }

  async getEventsById(id) {
    const res = await api.get(`/api/events/${id}`)
    AppState.activeEvent = new TowerEvent(res.data)
  }


  async createEvents(eventData) {
    const res = await api.post('api/events', eventData)
    const event = new Event(res.data)
    AppState.events = [...AppState.events, event]

  }








}
export const eventservice = new EventService