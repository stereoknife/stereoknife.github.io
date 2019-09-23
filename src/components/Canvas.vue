<template>
  <canvas
    ref="canvas"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
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
      speed: 3,
      maxspeed: 3,
      minspeed: 3,
      acceleration: 0.5,
      hovering: false,
      ctx: null,
      img: null,
      h: 0
    }
  },
  computed: {
    cWidth () { return this.$refs.canvas.width },
    cHeight () { return this.$refs.canvas.height },
    fHeight () { return this.$refs.canvas.height + 380 },
    cMidX () { return this.$refs.canvas.width * 0.5 },
    cMidY () { return this.$refs.canvas.height * 0.5 },
    separation () { return this.fHeight / this.amount },
    amount () { return Math.floor(this.fHeight / 340) }
  },
  methods: {
    render () {
      this.ctx.clearRect(0, 0, this.fHeight * 2, this.cWidth)
      for (let i = 0; i <= this.amount; i++) {
        this.ctx.drawImage(this.img, (this.h + this.separation * i) % this.fHeight, 0)
      }
      this.h = (this.h + this.speed) % this.fHeight
      if (this.hovering && this.speed > this.minspeed) this.speed = this.speed - this.acceleration < this.minspeed ? this.minspeed : this.speed - this.acceleration
      if (!this.hovering && this.speed < this.maxspeed) this.speed = this.speed + this.acceleration > this.maxspeed ? this.maxspeed : this.speed + this.acceleration
    },
  },
  mounted () {
    const canvas = this.$refs.canvas
    this.ctx = canvas.getContext('2d')
    canvas.height = canvas.clientHeight * 2
    canvas.width = canvas.clientWidth * 2
    this.ctx.rotate(-3.1416 * 0.5)
    this.ctx.translate(-canvas.height - 380, 0)
    const img = new Image()
    img.addEventListener('load', () => {
      this.img = img
      console.log(this.img)
      setInterval(this.render, 33)
    }, false)
    img.src = '/name.svg'
  },
}
</script>
