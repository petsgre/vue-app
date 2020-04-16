<template>
  <el-select :value="value" :placeholder="placeholder" @change="updateValue">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: ["value", "options"],
  computed: {
    placeholder() {
      return this.$attrs.placeholder
    },
  },
  methods: {
    updateValue(value) {
      console.log(value)
      this.$emit("update", value)
    },
  },
}
</script>

<style></style>
