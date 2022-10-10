<template>

  <form @submit.prevent="handleSubmit" class="card col-12 d-flex align-items-center comment-form ">
    <div class="component text-center">
      <h2 class="text-shadow title">Enter Comment Here</h2>
      <div>
        <label for="body" class="text-shadow">Body:</label>
        <textarea type="text" class="form-control" rows="8" style="resize:none" v-model="editable.body"
          :name="editable.body"></textarea>
      </div>
      <button class="btn btn-dark text-shadow">Submit</button>
    </div>
  </form>


</template>


<script>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { AppState } from "../AppState.js"
import { commentsService } from "../services/CommentsService.js"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    const route = useRoute()
    const editable = ref({
      body: "",

    })
    return {
      editable,

      async handleSubmit() {
        try {
          const commentData = editable.value
          commentData.eventId = AppState.activeEvent
          await commentsService.createComments(commentData)
          editable.value = {
            body: {},

          }

        } catch (error) {
          Pop.error(error, '[SubmittingComment]')
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

.comment-form {
  background-color: rgba(10, 55, 69, 0.553);
}

.text-shadow2 {
  color: rgba(67, 153, 240, 0.988);
  text-shadow: 1px 1px black, 0px 0px 5px rgb(6, 206, 220);
  font-weight: bold;
  letter-spacing: 0.08rem
}
</style>