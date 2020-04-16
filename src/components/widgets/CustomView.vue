<script>
export default {
  props: ["data", "renderFunc"],
  render: function(h) {
    if (!this.renderFunc) {
      return <div>{this.data}</div>
    }
    const jsx = this.renderFunc(h, this, { data: this.data })

    return jsx
  },
}
</script>

<style></style>
