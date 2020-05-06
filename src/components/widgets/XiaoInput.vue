<template>
  <el-input :value="value" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
export default {
  props: ["value"],
  methods: {},
  created() {}
}
</script>