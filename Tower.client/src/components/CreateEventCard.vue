<template>
  <div class="CreateEvent">
    <form @submit.prevent="handleSubmit" class=" bg-transparent card col-12 d-flex align-items-center posts-form ">
      <div class="component text-center">
        <h1 class="text-shadow title">Enter Post Here</h1>
        <div class="form mb-3">
          <label for="imgUrl">Image Here:</label>
          <input type="url" class="form-control" name="">
        </div>
        <div>
          <label for="body">Body:</label>
          <textarea type="text" class="form-control" name="body" rows="8" style="resize:none"></textarea>
        </div>
        <button class="btn btn-dark ">Submit</button>
      </div>
    </form>

  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>