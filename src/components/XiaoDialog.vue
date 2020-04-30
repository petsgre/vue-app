<template>
  <el-dialog center :title="title" :visible.sync="visible" width="80%">
    <div class="xiao-search-filter">
      <div
        class="xiao-filter-item"
        v-for="(widget, index) in filterOptions.widgets"
        :key="index"
      >
        <!-- :data 是当前控件对应的值，如果是非受控组件，可以不用传，受控组件就要有 -->
        <!-- 对应的path去获取这个值 -->
        <component
          :is="widget.control.name"
          v-bind="widget.control.props"
          :value="filterData[widget.valuePath]"
          v-on="listenerProcessor(widget.control.on)"
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
          <CustomView
            :index="scope.$index + 1"
            :options="tr.options"
            :data="scope.row"
            :tableData="tableData"
            :renderFunc="tr.render"
            :fun="tr.fun"
            :customize="$attrs.customize"
          />
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="currentPage"
        :page-sizes="PAGE_SIZE_LIST"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total">
      </el-pagination>
    </div>
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
const PAGE_SIZE_LIST = [10, 20, 50, 100, 200]

export default {
  props: {
    tableDialogVisible: Boolean,
    title: String,
    filterOptions: Object,
    pagination: Object,
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
  watch:{
    filterData:{
      handler(){
        this.$emit('fetchData')
      }
    }
  },
  data() {
    return {
      currentPage:1,
      PAGE_SIZE_LIST,
      pageSize:20
    }
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
      this.$emit("fetchData")
    },
    listenerProcessor(listeners = {}) {
      Object.keys(listeners).forEach((key) => {
        listeners[key] = listeners[key].bind(this)
      })
      return listeners
    },
    handleCurrentChange(){
      
    },
    handleSizeChange(){
      
    }
  },
  created() {
    this.$emit("fetchData")
  },
  components: {
    XiaoInput,
    XiaoSelect,
    CustomView,
  },
}
</script>
