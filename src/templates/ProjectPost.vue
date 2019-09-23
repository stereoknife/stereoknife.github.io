<template>
  <div>
    <a href="/" class="hidden lg:block absolute inset-0 home"/>
    <Menu
      ref="menu"
      class="hidden lg:block"
      :sel="$page.post.slug"
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
        <p class="">Built for <span class="code">{{$page.post.client}}</span> in <span class="code">{{$page.post.time}}</span></p>
        <p class="">---------------------------------------</p>
        <div
          class=""
          v-html="$page.post.content"
        />
        <p
          v-if="links"
          class="mt-8"
        >
          <a
            v-for="link in links"
            :key="link[1]"
            :href="link[2]"
            class="font-mono text-accent-var hover:opacity-50 font-bold underline mr-4"
          >{{
            link[1]
          }}</a>
        </p>
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
    @apply px-1 rounded;
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
