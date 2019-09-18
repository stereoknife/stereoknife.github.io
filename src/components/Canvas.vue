<template>
  <canvas
    ref="canvas"
  />
</template>

<script>
export default {
  name: 'Canvas',
  props: {
    src: {
      default: null
    }
  },
  data () {
    return {
      ctx: null
    }
  },
  computed: {
    cWidth: function () { return this.$refs.canvas.width },
    cHeight: function () { return this.$refs.canvas.height },
    cMidX: function () { return this.$refs.canvas.width * 0.5 },
    cMidY: function () { return this.$refs.canvas.height * 0.5 },
    img: function () {
      if (!this.src) return null
      const img = new Image
      img.src = this.src.src
      return img
    }
  },
  methods: {
    render () {
      if (this.ctx && this.src) {
        this.img.addEventListener('load', () => {
          this.ctx.clearRect(0, 0, this.cWidth, this.cHeight)
          this.ctx.drawImage(this.img, this.cWidth - 30 - this.src.size.width, this.cHeight - 30 - this.src.size.height)
        }, false)
      }
    },
    centerX (width, center = this.cMidX) { return center - width * 0.5},
    centerY (height, center = this.cMidY) { return center - height * 0.5}
  },
  mounted () {
    const canvas = this.$refs.canvas
    this.ctx = canvas.getContext('2d')
    canvas.height = canvas.clientHeight
    canvas.width = canvas.clientWidth
    // setInterval(this.render, 33)
  },
  beforeUpdate () {
    render()
  },
  watch: {
    src: function () {
      this.render()
    }
  }
}
</script>
