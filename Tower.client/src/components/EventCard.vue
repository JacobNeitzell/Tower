<template>
  <div class="component">
    <div class="card" style="width: 18rem;">
      <img :src="event.coverImg" class="card-img-top" alt="EventImg">
      <div class="card-body">
        <h5 class="card-title">{{event.name}}</h5>
        <p class="card-text">{{event.description}}
        </p>
        <a href="#" class="btn btn-primary">Go to Event</a>
      </div>
    </div>

  </div>
</template>


<script>

export default {
  props: {
    event: { type: Object, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>