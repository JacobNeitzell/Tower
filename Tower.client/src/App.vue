<template>
  <header>
    <Navbar />
  </header>
  <main class="main-background container-fluid">
    <div class="row">
      <div class=" justify-content-end d-none d-md-block bg-dark text-light sidebar">
        <LoginOffCan />

      </div>
    </div>
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with Giraffe works
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import LoginOffCan from "./components/LoginOffCan.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, LoginOffCan }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.main-background {
  background-color: #2A2D3A;
}
</style>
