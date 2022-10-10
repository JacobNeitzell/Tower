<template>
  <div v-for="t in tickets" :key="t.id">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <button class="btn btn-dark" @click="deleteTicket(t.id)"><i class="mdi mdi-delete"></i></button>
            <img :src="t.event.coverImg" class="img-fluid">
            <div class="card-body bg-dark">
              <h1 class="text-shadow">{{t.event.name}}</h1>
              <h2 class="text-shadow">{{t.event.location}}</h2>
              <h3 class="text-shadow">{{t.event.capacity}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { TowerEvent } from "../models/TowerEvent.js";
import { accountService } from "../services/AccountService.js";

import Pop from "../utils/Pop.js";
import EventCard from "../components/EventCard.vue";
import { attendeesService } from "../services/AttendeesService.js";
export default {
  props: {
    event: { type: TowerEvent, required: true },
  },
  setup() {
    async function getMyTickets() {
      try {
        await accountService.getMyTickets();
      }
      catch (error) {
        Pop.error(error, ["gettingMyticks"]);
      }
    }
    onMounted(() => {
      getMyTickets();
    });
    return {
      account: computed(() => AppState.account),
      tickets: computed(() => AppState.isAttending),

      async deleteTicket(id) {
        try {
          const yes = await Pop.confirm('are you sure you want to delete this Ticket?')
          if (!yes) { return }
          await attendeesService.removeTicket(id)
        } catch (error) {
          Pop.error(error, '[removeticket]')
        }
      }



    };
  },
  components: { EventCard }
}
</script>

<style scoped>
img {
  max-width: 32rem;
}


.text-shadow {
  color: rgba(223, 226, 229, 0.988);
  text-shadow: 1px 1px black, 0px 0px 5px rgb(6, 206, 220);
  font-weight: bold;
  letter-spacing: 0.08rem
}

.text-shadow2 {
  color: rgba(72, 153, 233, 0.847);
  text-shadow: 1px 1px black, 0px 0px 5px rgb(6, 206, 220);
  font-weight: bold;
  letter-spacing: 0.08rem
}
</style>
