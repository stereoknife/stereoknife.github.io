<template>
  <div class="flex">
    <Canvas class="flex-grow-0" />
    <div class="flex-grow">
      <div class="">
        <Menu
          ref="menu"
          :sel="slug"
          @imgChange="selectedElem = $event"
        />
        <slot />
      </div>
    </div>
    <Images
      class="hidden"
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
  props: ['slug']
}
</script>
