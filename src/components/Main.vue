<template>
  <div class="main">
    <XDialog
      :title.sync="title"
      :tableDialogVisible.sync="tableDialogVisible"
      :filterOptions="filterOptions"
      :tableOptions="tableOptions"
      :filterData.sync="filterData"
      :tableData.sync="tableData"
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
      tableData: [
        {
          gender: 1,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          gender: 0,
          name: "王1虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          gender: 1,
          name: "王2虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          gender: 0,
          name: "王3虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
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
