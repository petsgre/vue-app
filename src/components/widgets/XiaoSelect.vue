<template>
  <el-select :value="value" v-bind="$attrs" v-on="$listeners">
    <el-option
      v-for="(item, key) in options"
      :key="item[optionProps.valueKey] || key"
      :label="item[optionProps.labelKey] || item"
      :value="item[optionProps.valueKey] || key"
      v-on="optionListeners"
    >
    </el-option>
  </el-select>
</template>

<script>
import _ from "lodash"

export default {
  props: {
    value: {
      type: [Array, String, Number],
    },
  },
  computed: {
    options() {
      return _.get(this.$attrs, "options.options", {})
    },
    optionProps() {
      return _.get(this.$attrs, "options.props", {})
    },
    optionListeners() {
      return _.get(this.$attrs, "options.on", {})
    },
  },
  methods: {},
  created() {},
}
</script>
