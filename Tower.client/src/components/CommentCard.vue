<template>
  <div class="component">
    <div class="card mb-3 bg-dark" style="max-width: 540px;">
      <div class="row g-0 bg-dark">
        <div class="col-md-4 commenttext">
          <img :src="account?.picture" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8 commenttext">
          <div class="card-body bg-dark">
            <h5 class="card-title text-shadow2">{{comments?.name}}</h5>
            <p class="card-text text-shadow ">{{comments?.body}}
            </p>
            <p class="card-text bg-dark"><small class="text-muted">{{comments?.isAttending}}</small></p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { Account } from "../models/Account.js";
import { Comment } from "../models/Comment.js";
export default {
  props: {
    comments: { type: Comment, required: true },
    account: { type: Account, required: true }
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
  color: rgba(67, 153, 240, 0.988);
  text-shadow: 1px 1px black, 0px 0px 5px rgb(6, 206, 220);
  font-weight: bold;
  letter-spacing: 0.08rem
}

.commenttext {
  background-color: rgba(10, 55, 69, 0.553);
  ;
}

img {
  max-width: 90rem;
  max-height: 80rem;
  object-fit: fill;
}
</style>