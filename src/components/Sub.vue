<template>
  <div>
    <el-button @click="show = true">默认按钮</el-button>
    <el-dialog title="提示" :visible="show" width="30%" @close="close">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="close">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data: () => {
    return { show: false };
  },
  methods: {
    close() {
      this.show = false;
      this.$emit("update:value", false);
    }
  }
};
</script>
