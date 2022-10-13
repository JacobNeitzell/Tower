<template>
  <div class="component">
    <div class="card mb-3 bg-dark" style="max-width: 540px;">
      <div class="row g-0 bg-dark">
        <div class="col-md-4 commenttext">
          <img :src="comments.creator?.picture" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8 commenttext ">

          <h5 class="card-title text-shadow2">{{comments.creator?.name}}</h5>
          <p class="card-text text-shadow ">{{comments.body}}
          </p>
          <p class="card-text bg-dark"><a v-if="comments.creator?.isAttending == true"
              class="btn btn-success">{{comments.creator?.isAttending}}</a></p>
          <i @click.prevent="removeComments(comments.id)" class="mdi mdi-cancel selectable"></i>
        </div>
      </div>
    </div>
  </div>


</template>


<script>

import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { Comment } from "../models/Comment.js";
import { commentsService } from "../services/CommentsService.js";
import Pop from "../utils/Pop.js";
export default {
  props: {
    comments: { type: Comment, required: true },
  },
  setup() {

    return {

      async removeComments(id) {
        try {
          const yes = await Pop.confirm('Are you sure you want to delete this comment?')
          if (!yes) { return }
          await commentsService.removeComments(id)
          Pop.success('Comment Removed')
        } catch (error) {
          Pop.error(error, '[removeComments]')
        }
      }
    }
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