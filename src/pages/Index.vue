<template>
  <Layout>
    <h1 v-for="(edge, index) in $page.pages.edges" :key="index">
      <a
        href="#"
        @mouseenter="selectedImage = edge.node.image"
      >
        {{edge.node.title}}
      </a>
    </h1>
    <a href="#" class="absolute bottom-0 mb-4">About me</a>
    <Canvas
      class="absolute inset-0 w-screen h-screen"
      :src="selectedImage"
    />
  </Layout>
</template>

<page-query>
query Pages {
  pages: allProjectPost(sortBy: "date", order: DESC) {
    edges {
      node {
        title
        image
        links
      }
    }
  }
}
</page-query>

<script>
import Canvas from '@/components/Canvas'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data: function () {
    return {
      selectedImage: null,
      i: 0
    }
  },
  components: {
    Canvas
  },
  mounted () {
    this.selectedImage = this.$page.pages.edges[0].node.image
  },
  methods: {
    handleMouse (e) {
      console.log(e)
    }
  }
}
</script>

<style>
  body {
    @apply bg-orange-200;
  }

  a {
    cursor: url('/cursor/arrow.png') 20 20, auto;
    @apply font-bold text-6xl leading-none text-blue-400 underline;
  }

  a:hover {
    @apply text-indigo-500;
  }

  a:visited {
    @apply text-purple-600;
  }

  canvas {
    z-index: -10;
  }
</style>
