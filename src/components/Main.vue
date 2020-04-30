<template>
  <div class="main">
    <XiaoDialog
      :title.sync="title"
      :tableDialogVisible.sync="tableDialogVisible"
      :filterOptions="filterOptions"
      :tableOptions="tableOptions"
      :filterData.sync="filterData"
      :tableData="tableData"
      :pagination="pagination"
      @fetchData="fetchData"
      :customize="{ list: list, add: addCourse, remove: removeCourse }"
    />
    <el-button @click="tableDialogVisible = true">打开Dialog</el-button>
    <div v-for="item in list" :key="item.id">{{ item.curriculum_name }}</div>
  </div>
</template>

<script>
import _ from "lodash"
import XiaoDialog from "./XiaoDialog"
import filterOptionsController from "./options/filterOptions"
import tableOptionsController from "./options/tableOptions"
const DEFAULT_PAGE_SIZE = 20

export default {
  data() {
    return {
      list: [],
      tableDialogVisible: true,
      currentPage: 1,
      pageSize: DEFAULT_PAGE_SIZE,
      filterData: {
        name: "",
        lecturer_name: "",
        curriculum_title: "",
        grade_list: [],
        sale_status: "",
      },
      tableData: [],
      pagination: {
        total: 100,
      },
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
    tableOptions() {
      return tableOptionsController({
        gradesOption: this.gradesOption,
      })
    },
  },
  methods: {
    addCourse(data) {
      this.$set(this.list, this.list.length, data)
    },
    removeCourse(data) {
      this.$delete(this.list, _.findIndex(this.list, { id: data.id }))
    },
    fetchData() {
      const id = Math.random()
      this.tableData.push({
        id: id,
        curriculum_name: "新课" + Math.random(),
        sale_status: 11,
      })
      this.$set(this.tableData, [...this.tableData])
    },
  },
  created() {},
  mounted() {},
  components: {
    XiaoDialog,
  },
}
</script>
