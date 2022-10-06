import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import { eventsService } from "../services/EventsService.js";
import { ticketsService } from "../services/TicketsService.js";
import BaseController from "../utils/BaseController.js";

export class EventsController extends BaseController {
  constructor() {
    super('api/events')
    this.router
      .get('', this.getAllEvents)
      .get('/:id', this.getEventById)
      .get('/:eventId/tickets', this.getTicketByEvent)
      .get('/:eventId/comments', this.getEventComments)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createEvent)
      .put('/:eventId', this.editEvent)
      .delete('/:eventId', this.cancelEvent)
  }

  async getAllEvents(req, res, next) {
    try {
      const events = await eventsService.getAllEvents(req.query)
      res.send(events)
    } catch (error) {
      next(error)
    }
  }

  async getEventById(req, res, next) {
    try {
      const event = await eventsService.getEventById(req.params.id)
      res.send(event)
    } catch (error) {
      next(error)
    }
  }

  async createEvent(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const event = await eventsService.createEvent(req.body)
      res.send(event)
    } catch (error) {
      next(error)
    }
  }

  async cancelEvent(req, res, next) {
    try {
      const event = await eventsService.cancelEvent(req.params.eventId, req.userInfo.id)
      res.send(event, "Event cancelled")
    } catch (error) {
      next(error)
    }
  }

  async editEvent(req, res, next) {
    try {
      const eventData = req.body
      eventData.id = req.params.eventId
      const event = await eventsService.editEvent(eventData, req.userInfo)
      res.send(event)
    } catch (error) {
      next(error)
    }
  }
  async getEventComments(req, res, next) {
    try {
      const comment = await commentsService.getEventComments(req.params.eventId)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
  async getTicketByEvent(req, res, next) {
    try {
      const ticket = await ticketsService.getTicketByEvent(req.params.eventId)
      res.send(ticket)
    } catch (error) {
      next(error)
    }


  }




}