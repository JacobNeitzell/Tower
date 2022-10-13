import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class CommentsService {

  async getComments(eventId) {
    const res = await api.get(`/api/events/${eventId}/comments`)
    AppState.comments = res.data
  }


  async createComments(commentData) {
    const res = await api.post('/api/comments', commentData)
    const comment = new Comment(res.data)
    AppState.comments.push(comment)

  }

  async removeComments(commentId) {
    await api.delete('api/comments/' + commentId)
    AppState.comments = AppState.comments.filter(c => c.id != commentId)

  }

}
export const commentsService = new CommentsService