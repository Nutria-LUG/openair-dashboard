<template>
  <div id="app">
  <div id="header">
    <Header />
  </div>
  <div id="content">
    <router-view />
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/views/_Header.vue";

@Component({
  components: { Header }
})
export default class extends Vue {}
</script>


<style lang="scss">
#app {
  display: flex;
  flex-flow: column;
}
#header {
}
#content {
  flex-grow: 1;
}
</style>
