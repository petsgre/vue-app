<template>
  <div class="main">
    <XDialog
      :title.sync="title"
      :tableDialogVisible.sync="tableDialogVisible"
      :filterOptions="filterOptions"
      :tableOptions="tableOptions"
      :filterData.sync="filterData"
    />
    <el-button @click="tableDialogVisible = true">打开Dialog</el-button>
  </div>
</template>

<script>
import XDialog from "./XDialog"
import filterOptions from "./options/filterOptions"
import tableOptions from "./options/tableOptions"

export default {
  data() {
    return {
      title: "选择课程",
      tableDialogVisible: false,
      filterOptions: filterOptions,
      tableOptions: tableOptions,
      filterData: {
        name: "",
        gender: "",
        address: "",
      },
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
