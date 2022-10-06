import { BadRequest, Forbidden } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { eventsService } from "./EventsService.js"

class CommentsService {
  async createComment(commentData) {
    const event = await eventsService.getEventIfNotCancelled(commentData.eventId)
    if (event.isCanceled) {
      throw new BadRequest('Event was canceled please go and comment somewhere else')
    }
    const comment = await dbContext.Comment.create(commentData)
    await comment.populate('creator')
    return comment
  }


  async getEventComments(eventId) {
    const comment = await dbContext.Comment.find({ eventId }).populate('creator', 'name picture ')
    return comment
  }


  async deleteComment(commentId, userId) {
    const comment = await dbContext.Comment.findById(commentId)
    // @ts-ignore
    const event = await eventsService.getEventById(comment.eventId)
    // @ts-ignore
    if (userId != comment.creatorId.toString()) {
      throw new Forbidden("this is not your comment")
    }
    // @ts-ignore
    await comment.populate('profile', 'name picture')
    // @ts-ignore
    await comment.remove()
    event.save()
    return comment
  }




}
export const commentsService = new CommentsService