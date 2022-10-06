export class Comment {
  constructor(data) {
    this.id = data.id
    this.eventId = data.eventId
    this.creatorId = data.creatorId
    this.body = data.body
    this.isAttending = data.isAttending
  }
}