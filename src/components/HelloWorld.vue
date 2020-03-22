<template>
  <div class="hello">
    <ul id="xxx">
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <el-button @click="dia = true">显示dia 按钮</el-button>
    <div v-if="dia">
      <Sub :value.sync="show"></Sub>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    xxx: {
      type: String
    }
  },
  model: {
    prop: "xxx",
    event: "change"
  },
  data: () => {
    return {
      show: false,
      dia: false
    };
  },
  created() {
    this.$emit("change", "666");
    this.$EventBus.$emit("xxx", "params");
  },
  mounted() {
    // console.log(this);
    console.log(this.xxx);
    setTimeout(() => {
      console.log(this.xxx);
    }, 2000);
    // const ul = document.getElementById("xxx");
    // console.log(ul);
  },
  methods: {
    invoke() {
      this.$EventBus.$emit("xxx", "params");
    }
  },
  components: {
    Sub: () => import("./Sub")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
