<template>
  <div class="col-md-6 col-lg-auto p-3 mb-3">
    <div class="eventsCard">
      <div class="card elevation-3 bg-dark" style="width: 18rem;">
        <img :src="event.coverImg" class="card-img-top" alt="EventImg">
        <div class="card-body">
          <h5 class="card-title">{{event.name}}</h5>
          <p class="card-text text-shadow">{{event.location}}<br>{{event.startDate}}
          </p>
          <div class="d-flex justify-content-end text-shadow">
            <span class="">{{event.capacity}} Spots left</span>
          </div>
          <div>
            <a href="#" class="btn btn-primary">Go to Event</a>
          </div>
        </div>
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
.text-shadow {
  color: rgba(223, 226, 229, 0.988);
  text-shadow: 1px 1px black, 0px 0px 5px rgb(6, 206, 220);
  font-weight: bold;
  letter-spacing: 0.08rem
    /* Second Color  in text-shadow is the blur */
}

img {
  max-width: 350px;
  max-height: 350px;
  object-fit: contain;
}
</style>