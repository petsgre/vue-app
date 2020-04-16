<template>
  <div class="main">
    <XDialog :tableDialogVisible.sync="tableDialogVisible" />
    <el-button @click="tableDialogVisible = true">打开Dialog</el-button>
  </div>
</template>

<script>
import XDialog from "./XDialog"

export default {
  data() {
    return {
      tableDialogVisible: true,
    }
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    XDialog,
  },
}
</script>
