<template>
  <div class="component">
    <Login />
    <button class="btn" data-bs-target="Canvas" data-bs-toggle="offcanvas">
      <span class="text-success lighten-30 selectable text-uppercase">
        New Event
      </span>
    </button>
  </div>

  <div class="col-md-10 main-content">
    <router-view />
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
      id="classifiedsCanvas" aria-labelledby="CanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="CanvasLabel">New Event</h5>
        <CreateEventCard />
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
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

</style>