<template>
  <div class="col-auto Attendee-Card">

    <img :src="attendee.picture" :title="attendee.name">

  </div>
</template>


<script>
import { Attendee } from "../models/Attendee.js";

export default {
  props: {
    attendee: { type: Attendee, required: true },
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>