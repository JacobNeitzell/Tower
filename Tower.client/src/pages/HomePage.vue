<template>
  <div class="container-fluid">
    <div class="row justify-content-around">
      <EventCard v-for="e in events" :key="e.id" :event="e" />
    </div>
  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, } from "vue";
import { AppState } from "../AppState.js";
import EventCard from "../components/EventCard.vue";
import { eventservice } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";
export default {
  setup() {

    async function getEvents() {
      try {
        await eventservice.getEvents();
      } catch (error) {
        Pop.error(error, "[getEvents]")
      }
    }

    onMounted(() => {
      getEvents();
    })
    return {

      events: computed(() => AppState.events)
    };
  },
  components: { EventCard }
}
</script>

<style scoped lang="scss">

</style>
