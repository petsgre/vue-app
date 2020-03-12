<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" v-model="xxx" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      xxx: "xxx"
    };
  },
  methods: {},
  created() {
    // console.log(this);
    console.log(this.$EventBus);
    this.$EventBus.$on("xxx", params => {
      console.log(params);
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
