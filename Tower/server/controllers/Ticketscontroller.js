import { Auth0Provider } from "@bcwdev/auth0provider";
import { ticketsService } from "../services/TicketsService.js";
import BaseController from "../utils/BaseController.js";

export class Ticketscontroller extends BaseController {
  constructor() {
    super('api/tickets')
    this.router
      .get('', this.getTicketByProfileId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTicket)
  }

  async createTicket(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const ticket = await ticketsService.createTicket(req.body)
      res.send(ticket)
    } catch (error) {
      next(error)
    }

  }



  async getTicketByProfileId(req, res, next) {
    try {
      const ticket = await ticketsService.getTicketByProfileId(req.params.eventId)
      res.send(ticket)
    } catch (error) {
      next(error)
    }


  }






}