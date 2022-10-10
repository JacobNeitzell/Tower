<template>
  <div class="eventdeetsCard">
    <div class="col-12 d-flex justify-content-center elevation-3">
      <div class="card bg-dark " style="width:30rem;">
        <img :src="event?.coverImg" class="card-img-top" alt="EventDetailsImg">
        <div class="card-body">
          <h3 class="card-title text-shadow2">{{event?.name}}</h3>
          <h5 class="text-shadow">{{new
          Date(event?.startDate).toLocaleDateString('en-Us',{month:'short', day:'2-digit'})}}</h5>
          <p class="card-text text-shadow">{{event?.description}}
          </p>
          <div class="d-flex justify-content-between text-shadow"><span>{{event?.capacity}} <p>Spots Left</p></span>
            <span>{{event?.type}}</span>
            <div>
              <a class="btn btn-primary" @click="addTicket()">Attend</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { TowerEvent } from "../models/TowerEvent.js";
import { attendeesService } from "../services/AttendeesService.js";
import { AuthService } from "../services/AuthService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    event: { type: TowerEvent, required: true },

  },
  setup() {
    return {
      account: computed(() => AppState.account),
      isAttending: computed(() => AppState.isAttending.find(a => a.accountId == AppState.account.id)),
      attendees: computed(() => AppState.attendees),

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
      }
    }
  }

}
</script>


<style lang="scss" scoped>
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