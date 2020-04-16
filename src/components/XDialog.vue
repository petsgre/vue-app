<template>
  <el-dialog center :title="title" :visible.sync="visible" width="80%">
    <div class="search-filter">
      <div
        class="filter-item"
        v-for="(widget, index) in filterOptions.widgets"
        :key="index"
      >
        <!-- :data 是当前控件对应的值，如果是非受控组件，可以不用传，受控组件就要有 -->
        <!-- 对应的path去获取这个值 -->
        <component
          :is="widget.control.name"
          v-bind="{
            ...widget.control.options.props,
          }"
          :value="filterData[widget.valuePath]"
          @update="call($event, widget.control.options.on.update)"
        />
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="tr in tableOptions.table"
        :key="tr.key"
        :label="tr.label || tr.key"
        width="180"
      >
        <template slot-scope="scope">
          <div v-if="tr.options">
            {{ tr.render(scope.row[tr.key], tr.options).label }}
          </div>
          <div v-else-if="!tr.render">{{ scope.row[tr.key] }}</div>
          <CustomView
            v-else
            :data="scope.row[tr.key]"
            :renderFunc="tr.render"
          />
        </template>
      </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
/**
 * dialog with table and filter
 * @param {object} filterOptions
 * @param {object} tableOptions
 * @param {object} footerOptions
 */

import XiaoInput from "./widgets/XiaoInput"
import XiaoSelect from "./widgets/XiaoSelect"
import CustomView from "./widgets/CustomView"
// import { bindInstance } from "./util"

export default {
  props: {
    tableDialogVisible: Boolean,
    title: String,
    filterOptions: Object,
    tableOptions: Object,
    filterData: Object,
    tableData: Array,
  },
  computed: {
    visible: {
      get() {
        return this.tableDialogVisible
      },
      set() {
        this.$emit("update:tableDialogVisible", false)
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    /**
     * 1. 可以使用util的方法，初始化对象，在on方法上都绑定this
     * 2. 可以使用一个方法过度，在组件内部call
     * 3. 也可以通过mixin混入，意味着options要写在mixin中，不太好做js操作，不推荐
     * 4. 在options中定义context，在组件挂载时赋值context到this
     */
    call(value, func) {
      func.call(this, value)
      this.fetchData()
    },
    fetchData() {
      console.log("fetched")
    },
  },
  created() {},
  components: {
    XiaoInput,
    XiaoSelect,
    CustomView,
  },
}
</script>

<style>
.search-filter {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 10px;
}
</style>
