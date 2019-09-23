<template>
  <div class="flex h-full">
    <Canvas class="flex-grow-0 self-stretch" />
    <div class="flex-grow">
      <slot/>
    </div>
    <Images
      class=" hidden lg:block -z-10"
      :sel="selectedElem"
    />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
  #app {
    height: 100%;
  }

  canvas {
    @apply min-h-screen w-12 mr-6;
  }
</style>

<script>
import Canvas from '@/components/Canvas'
import Images from '@/components/Images'
import Menu from '@/components/Menu'

export default {
  components: {
    Canvas,
    Menu
  },
  components: {
    Menu,
    Images,
    Canvas
  },
  data: function () {
    return {
      selectedElem: null
    }
  },
  methods: {
    setImg (sel) { this.selectedElem = sel }
, },
  provide () {
    return {
      setImg: this.setImg
    }
  },
  props: ['slug']
}
</script>
