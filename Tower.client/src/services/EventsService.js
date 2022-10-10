import { AppState } from "../AppState.js"
import { TowerEvent } from "../models/TowerEvent.js"
import { router } from "../router.js"
import { logger } from "../utils/Logger.js"
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
    AppState.activeEvent = res.data

  }






  async createEvents(eventData) {
    const res = await api.post('api/events', eventData)
    const event = new TowerEvent(res.data)
    AppState.events.push(event)
    AppState.events = [...AppState.events, event]
    AppState.activeEvent = event

    router.push({ name: 'EventDetails', params: { id: event.id } })
  }


  async archiveEvent(id) {
    await api.delete(`/api/events/${id}`)
    AppState.activeEvent.isCanceled = true
    router.push({ name: 'Home' })
  }





}
export const eventservice = new EventService