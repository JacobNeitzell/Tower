<template>
  <div class="component">
    <Login />
    <button class="btn" data-bs-target="#eventCanvasLabel" data-bs-toggle="offcanvas">
      <span class="text-success lighten-30 selectable text-uppercase">
        New Event
      </span>
    </button>
  </div>

  <div class="col-md-10 main-content">
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
      id="eventCanvasLabel" aria-labelledby="eventCanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="eventCanvasLabel">New Event</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <CreateEventCard />
      </div>
    </div>

  </div>
</template>


<script>
import Login from "./Login.vue";
import CreateEventCard from "./CreateEventCard.vue";
export default {
  setup() {
    return {};
  },
  components: { Login, CreateEventCard }
}
</script>


<style lang="scss" scoped>
.offcanvas {
  background-color: rgba(10, 55, 69, 0.553);
}
</style>