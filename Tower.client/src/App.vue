<template>
  <header>
    <Navbar />
  </header>
  <main class="main-background container-fluid">
    <router-view />
    <div class="row">
      <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar">
        <LoginOffCan />
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
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
