import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class CommentsService {

  async getComments(eventId) {
    const res = await api.get(`/api/events/${eventId}/comments`)
    AppState.comments = res.data
  }


  async createComments(eventData) {
    const res = await api.post('/api/comments', eventData)
    const comment = new Comment(res.data)
    AppState.comments.push(comment)
    AppState.comments = [...AppState.comments, comment]


  }


}
export const commentsService = new CommentsService