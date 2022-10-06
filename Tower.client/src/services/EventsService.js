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








}
export const eventservice = new EventService