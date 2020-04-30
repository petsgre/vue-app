<script>
export default {
  props: [
    "data",
    "renderFunc",
    "options",
    "index",
    "tableData",
    "customize",
  ],
  render: function(h) {
    // console.log(this);
    if (!this.renderFunc && !this.options) {
      return <div>xxx</div>
    }
    if (!this.renderFunc) {
      return <div>{this.data}</div>
    }
    const jsx = this.renderFunc(h, this)

    return jsx
  },
}
</script>

<style></style>
