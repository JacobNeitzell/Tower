<template>
  <div class="EventDetailsPage container-fluid">
    <div class="row">
      <EventDeets :event="activeEvent" />
    </div>
    <div class="row">
      <AttendeeCard v-for="a in attendees" :key="a.id" :attendee="a" />
    </div>
    <div class="row">

      <CommentForm />
      <CommentCard v-for="c in comments" :key="c.id" :comments="c" />
    </div>
  </div>

</template>

<script>

import EventDeets from "../components/EventDeets.vue";
import { computed } from "@vue/reactivity";
import AttendeeCard from "../components/AttendeeCard.vue";
import { attendeesService } from "../services/AttendeesService.js";
import { eventservice } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";
import { onMounted, } from "vue";
import { AppState } from "../AppState.js";
import { useRoute } from "vue-router";
import { AuthService } from "../services/AuthService.js";
import CommentForm from "../components/CommentForm.vue";

import { commentsService } from "../services/CommentsService.js";
import CommentCard from "../components/CommentCard.vue";

export default {
  setup() {
    const route = useRoute();

    async function getEventsById() {
      try {
        await eventservice.getEventsById(route.params.id);
      } catch (error) {
        Pop.error(error, "[getEvents]")
      }
    }

    async function getCommentsByEventId() {
      try {

        await commentsService.getComments(route.params.id)
      } catch (error) {
        Pop.error(error, "[GettingComments]")
      }


    }


    async function getAttendees() {
      try {
        await attendeesService.getAttendees(route.params.id);
      } catch (error) {
        Pop.error(error, "[getAttendees]")

      }
    }



    onMounted(() => {
      getEventsById();
      getAttendees();
      getCommentsByEventId();
    });
    return {
      activeEvent: computed(() => AppState.activeEvent),
      attendees: computed(() => AppState.attendees),
      event: computed(() => AppState.events),
      account: computed(() => AppState.account),
      comments: computed(() => AppState.comments),

      async addTicket() {
        try {
          if (!AppState.account.id) {
            return AuthService.loginWithRedirect()
          }
          await attendeesService.addTicket({ eventId: AppState.activeEvent.id || route.params.id })
          Pop.success('Ticket has been grabbed')
        } catch (error) {
          Pop.error(error, ['CreateTicket'])
        }
      },





    };
  },
  components: { EventDeets, AttendeeCard, CommentForm, CommentCard }
}
</script>
<style lang="sccs" scoped>



</style>