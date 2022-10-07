import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class CommentsService {

  async getComments() {
    const res = await api.get(`/api//api/events/${id}/comments`)
    AppState.comments = res.data
  }



}
export const commentsService = new CommentsService