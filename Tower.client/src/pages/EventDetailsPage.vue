<template>
  <div class="EventDetailsPage container-fluid">
    <div class="d-flex flex-column align-items-center">
      <img alt="logo" src="../assets/img/pixil-frame-0 (1).png" height="50" />
    </div>
    <h5 class="text-shadow">TOWER</h5>
    <div class="row" v-if="event">
      <EventDeets v-for="e in events" :key="e.id" :event="e" />
    </div>
    <div class="row">
      <!-- <AttendeeCard v-for="a in attendee" :key="a.id" :attendee="a" /> -->
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
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { useRoute } from "vue-router";

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
    });
    return {
      activeEvents: computed(() => AppState.activeEvent),
      attendees: computed(() => AppState.attendees),
      events: computed(() => AppState.events)

    };
  },
  components: { EventDeets, AttendeeCard }
}
</script>
<style lang="sccs" scoped>

</style>