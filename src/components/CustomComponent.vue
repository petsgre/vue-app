<script>
export default {
  props: ["data", "renderFunc", "update"],
  render: function(h) {
    const func = this.renderFunc

    const jsx = func(h, this, { data: this.data })

    return jsx
  },
}
</script>

<style></style>
