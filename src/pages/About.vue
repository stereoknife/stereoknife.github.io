<template>
  <div>
    <a href="/" class="hidden lg:block absolute inset-0 home"/>
    <Menu
      ref="menu"
      class="hidden lg:block"
      sel="about"
      @imgChange="selectedElem = $event"
    />
    <div class="
      pt-8 pr-8
      h-full sm:w-2/3
      lg:absolute lg:h-auto lg:bg-secondary lg:pb-12 lg:w-3/4 lg:top-0
      lg:ml-20 lg:mt-20
      lg:z-10
      "
      ref="cont"
    >
      <div class="lg:ml-16 lg:-mr-24">
        <p class="text-lg underline">Well, hello there.</p>
        <p>My name is Ignasi Granell. I make things, all kinds of things, but mainly web stuff (fronted & node backend), cool things in Unity 3D, and attempt to do some design every now and then.</p>
        <p>These days I'm busy learning about shaders, computer graphics and Go, and working on my bachelor's thesis.</p>
        <p>If you've got anything to tell me feel free to send an email to <span class="code">ignasi.gv (at) outlook (dot) com</span></p>
      </div>
      <a href="/" class="text-4xl underline uppercase font-bold lg:hidden">Close</a>
    </div>
  </div>
</template>

<page-query>
query Post ($id: String!) {
  post: projectPost (id: $id) {
    title
    content
    slug
    client
    time
    links
    images {
      title
    }
  }
}
</page-query>

<style>
  body {
    @apply bg-secondary;
  }

  .code {
    background: #2223;
    box-decoration-break: clone;
    @apply px-1 rounded font-mono text-sm;
  }

  p {
    @apply mb-4;
  }

  ul {
    @apply list-disc list-inside;
  }

  .home {
    cursor: url('/cursor/cross.png') 20 20, auto;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    body {
      @apply bg-orange-200;
    }
  }
</style>

<script>
import Menu from '@/components/Menu'

export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  },
  components: {
    Menu
  },
  methods: {
    log (log) { console.log(log) }
  },
  computed: {
    links () { return [...this.$page.post.links.matchAll(/\[(.+?)\]\((.+?)\)/g)].filter(l => l[2] !== '#') }
  }
}
</script>

