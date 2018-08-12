<template>
  <div id="app">
    <Header />
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
html,
body,
#app {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  display: flex;
  flex-flow: column;
  color: #ddd;
}
#content {
  flex-grow: 1;
  padding: 0 2em;
  background-color: #333;
}
</style>
