<template>
  <div class="col-12 d-flex justify-content-center">
    <div class="eventdeetsCard">
      <div class="card bg-dark elevate-5" style="width: 18rem;">
        <img :src="event?.coverImg" class="card-img-top" alt="EventDetailsImg">
        <div class="card-body">
          <h3 class="card-title text-shadow2">{{event?.name}}</h3>
          <h5 class="text-shadow">{{new
          Date(event?.startDate).toLocaleDateString('en-Us',{month:'short', day:'2-digit'})}}</h5>
          <p class="card-text text-shadow">{{event?.description}}
          </p>
          <div class="d-flex justify-content-between text-shadow"><span>{{event?.capacity}}Spots Left</span>
            <div><span>{{event?.type}}</span></div>
            <a href="#" class="btn btn-primary">Attend</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import { TowerEvent } from "../models/TowerEvent.js";

export default {
  props: {
    event: { type: TowerEvent, required: true },
  },
  setup() {
    return {}
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



img {
  max-width: 400px;
  max-height: 400px;
  object-fit: contain;
}
</style>