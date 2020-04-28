<template>
  <el-input v-bind="$attrs" @input="updateValue" :value="value" />
</template>

<script>
export default {
  props: ["value"],
  computed: {
    placeholder() {
      return this.$attrs.placeholder
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("update", value)
    },
  },
  created() {},
}
</script>

<style></style>
