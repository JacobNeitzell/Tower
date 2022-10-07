<template>
  <div class="CreateEvent">
    <form @submit.prevent="handleSubmit" class=" bg-transparent card col-12 d-flex align-items-center events-form ">
      <div class="component text-shadow">
        <h1 class="text-shadow title">Enter Post Here</h1>
        <div class="form mb-3">
          <label for="imgUrl">Cover Image:</label>
          <input type="url" class="form-control" name="coverImg" v-model="editable.coverImg" required>
        </div>
        <label for="name">Name:</label>
        <input type="text" class="form-control" name="name" v-model="editable.name" required>

        <label for="startDate">Date:</label>
        <input type="date" class="form-control" name="date" v-model="editable.startDate" required>

        <label for="location">Location:</label>
        <input type="text" class="form-control" name="location" v-model="editable.location" required>

        <label for="capcity">Capacity:</label>
        <input type="number" class="form-control" name="Capacity" v-model="editable.capacity" required>
        <label for="type">Type:</label>
        <input type="selectable" class="form-control" name="type" v-model="editable.type" required>
        <div>
          <label for="description">Description:</label>
          <textarea type="text" class="form-control" name="description" rows="8" style="resize:none"
            v-model="editable.description" required></textarea>
        </div>
        <button class="btn btn-dark ">Submit</button>
      </div>
    </form>

  </div>
</template>


<script>
import { ref } from "vue";
import { eventservice } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({
      name: "",
      coverImg: "",
      capacity: "",
      startDate: "",
      description: "",
      type: "",
      location: "",

    })
    return {
      editable,
      async handleSubmit() {
        try {
          const eventData = editable.value
          await eventservice.createEvents(eventData)
          editable.value = {
            name: {},
            coverImg: {},
            capacity: {},
            date: {},
            description: {},
            type: {},
          }
        } catch (error) {
          Pop.error(error, '[CreateForm]')

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
</style>