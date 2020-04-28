<template>
  <div class="main">
    <XiaoDialog
      :title.sync="title"
      :tableDialogVisible.sync="tableDialogVisible"
      :filterOptions="filterOptions"
      :tableOptions="tableOptions"
      :filterData.sync="filterData"
      @fetchData="fetchData"
    />
    <el-button @click="tableDialogVisible = true">打开Dialog</el-button>
  </div>
</template>

<script>
import XiaoDialog from "./XiaoDialog"
import filterOptionsController from "./options/filterOptions"
import tableOptions from "./options/tableOptions"
const DEFAULT_PAGE_SIZE = 20

export default {
  data() {
    return {
      currentPage: 1,
      tableDialogVisible: false,
      pageSize: DEFAULT_PAGE_SIZE,
      tableOptions: tableOptions,
      filterData: {
        name: "",
        lecturer_name: "",
        curriculum_title: "",
        grade_list: [],
        sale_status: "",
      },
      tableData: [],
      title: "选择课程",
      gradesOption: [
        {
          code: 1,
          zh_cn: "一年级",
          is_valid: true,
          curriculum_num: 1125,
          short_code: "01",
        },
        {
          code: 2,
          zh_cn: "二年级",
          is_valid: true,
          curriculum_num: 273,
          short_code: "02",
        },
      ],
    }
  },
  computed: {
    filterOptions() {
      return filterOptionsController({
        gradesOption: this.gradesOption,
      })
    },
  },
  methods: {
    fetchData() {},
  },
  created() {},
  mounted() {},
  components: {
    XiaoDialog,
  },
}
</script>
