<template>
  <div class="col-12 Attendee-Card">
    <span>{{attendees.name}}{{attendees.picture}}</span>

  </div>
</template>


<script>
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

</style>