<template>
  <canvas
    class="w-screen h-screen"
    ref="canvas"
  />
</template>

<script>
export default {
  name: 'Canvas',
  data () {
    return {
      ctx: null
    }
  },
  computed: {
    cWidth: function () { return this.$refs.canvas.width },
    cHeight: function () { return this.$refs.canvas.height },
    cMidX: function () { return this.$refs.canvas.width * 0.5 },
    cMidY: function () { return this.$refs.canvas.height * 0.5 }
  },
  mounted () {
    const canvas = this.$refs.canvas
    this.ctx = canvas.getContext('2d')
    canvas.height = canvas.clientHeight
    canvas.width = canvas.clientWidth
  }
}
</script>
