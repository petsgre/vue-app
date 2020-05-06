<script>
export default {
  props: ["data", "renderFunc", "options", "index", "tableData", "customize"],
  render: function(h) {
    if (!this.renderFunc) {
      return <span>{this.data}</span>
    }
    const jsx = this.renderFunc(h, this)

    return jsx
  },
}
</script>
