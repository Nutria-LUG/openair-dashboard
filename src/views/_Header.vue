<template>
  <div id="header">
    <div id="logo">
      OpenAir <small>by Nutria-LUG</small>
    </div>
    <div id="nav">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/table">Table</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>


<style lang="scss">
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  background-color: #222;
}
#nav a {
  margin: 0 1em;
  color: #999;
  text-decoration: none;
}
#nav a:hover {
  color: #ddd;
}
</style>