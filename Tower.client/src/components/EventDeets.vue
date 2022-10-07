<template>
  <div class="col-12">
    <div class="component">
      <div class="card" style="width: 18rem;">
        <img :src="events.coverImg" class="card-img-top" alt="CoverImg">
        <div class="card-body">
          <h3 class="card-title">{{events.name}}</h3>
          <h5>{{new
          Date(events.startDate).toLocaleDateString('en-Us',{month:'short', day:'2-digit'})}}</h5>
          <p class="card-text">{{events.description}}
          </p>
          <div class="d-flex justify-content-between"><span>{{events.capacity}}Spots Left</span>
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
    events: { type: TowerEvent, required: true },
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
</style>