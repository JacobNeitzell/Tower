<template>
  <div class="col-auto AttendeeCard">

    <img :src="attendees.profile.picture" :title="attendees.profile.name" class="img-fluid rounded-start" alt="">

  </div>
</template>


<script>
import { Account } from "../models/Account.js";
import { Attendee } from "../models/Attendee.js";

export default {
  props: {
    attendees: { type: Attendee, required: true },

  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
img {
  max-width: 90rem;
  max-height: 80rem;
  object-fit: fill;
}
</style>