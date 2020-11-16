<template>
  <div>
    <b-container style="width: 320px">
      <b-img fluid alt="Door Dash Logo" src="./assets/doordash.png"></b-img>
    </b-container>
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style scoped>

</style>
