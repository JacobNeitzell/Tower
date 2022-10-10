<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/pixil-frame-0 (1).png" height="50" />
        <h5 class="text-shadow">TOWER</h5>
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <div class="row bg-dark py-1 px-5 text-light">
        <div class="col-12">
          <h2 class="text-shadow">Popular Events</h2>
        </div>
        <div class="col-12 text-shadow">
          filter <i class="mdi mdi-filter"></i>
        </div>
        <div class="col-2 btn btn-outline-light rounded-pill text-shadow" @click="getEventsbyType('')">All</div>
        <div class="col-2 btn btn-outline-light rounded-pill text-shadow" @click="getEventsbyType('concert')">Concert
        </div>
        <div class="col-2 btn btn-outline-light rounded-pill text-shadow" @click="getEventsbyType('convention')">
          Convention</div>
        <div class="col-2 btn btn-outline-light rounded-pill text-shadow" @click="getEventsbyType('sport')">Sport
        </div>
        <div class="col-2 btn btn-outline-light rounded-pill text-shadow" @click="getEventsbyType('digital')">Digital
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { eventservice } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";
import Login from './Login.vue'
export default {
  setup() {
    const editable = ref('')


    return {
      editable,
      events: computed(() => AppState.events.filter(e => e.type.toUpperCase().includes(editable.value.toUpperCase()))),
      async getEventsbyType(type) {
        try {
          debugger
          await eventservice.getEvents(type)
        } catch (error) {
          Pop.error(error, '[GetEventsByType]')
        }
      }



    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.text-shadow {
  color: rgba(223, 226, 229, 0.988);
  text-shadow: 1px 1px black, 0px 0px 5px rgb(6, 206, 220);
  font-weight: bold;
  letter-spacing: 0.08rem
    /* Second Color  in text-shadow is the blur */
}


.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
