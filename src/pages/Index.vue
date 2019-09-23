<template>
  <Menu
    ref="menu"
    class="hide-sm"
    @imgChange="handleImgChange"
  />
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'Index',
  metaInfo: {
    title: 'About us'
  },
  inject: ['setImg'],
  components: {
    Menu
  },
  methods: {
    handleImgChange ($event) {
      this.setImg($event)
    }
  }
}
</script>

<style>
  body {
    @apply bg-orange-200;
  }
</style>
