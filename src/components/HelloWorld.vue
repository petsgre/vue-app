<template>
  <div class="main">
    <XDialog :tableDialogVisible.sync="tableDialogVisible" />
    <button @click="tableDialogVisible = true">123</button>
  </div>
</template>

<script>
import XDialog from "./XDialog"

import { mapState, mapGetters, mapActions } from "vuex"
export default {
  props: {
    msg: String,
    xxx: {
      type: String,
    },
  },
  model: {
    prop: "xxx",
    event: "change",
  },
  computed: {
    // 使用$store 获取实例上挂载的vuex
    name() {
      return this.$store.state.name
    },
    // 使用mapState api获取对应的映射
    ...mapState({ name: "name", lll: (state) => state.count }),
    // getter 就是state的 计算属性
    ...mapGetters({ computedName: "getName" }),
  },
  data: () => {
    return {
      tableDialogVisible: true,
      show: false,
      dia: false,
    }
  },
  created() {
    this.$emit("change", "666")
    this.$EventBus.$emit("xxx", "params")
    setTimeout(() => {
      this.hookBefore("nnn")
    }, 2000)
  },
  mounted() {
    // console.log(this);
    console.log(this.xxx)
    setTimeout(() => {
      console.log(this.xxx)
    }, 2000)
    // const ul = document.getElementById("xxx");
    // console.log(ul);
  },
  methods: {
    invoke() {
      this.$EventBus.$emit("xxx", "params")
    },
    ...mapActions({ changeName: "updateName", hookBefore: "hookBefore" }),
  },
  components: {
    XDialog,
    // Sub: () => import("./Sub"),
    // Input
  },
}
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
