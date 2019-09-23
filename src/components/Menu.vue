<template>
  <div class="pointer-events-none">
    <div class="top-0 left-0">
      <!-- Proj links -->
      <p v-for="edge in $static.pages.edges" :key="edge.node.title" class="">
        <a
          :href="'/' + edge.node.slug"
          :ref="edge.node.slug"
          @mouseenter="$emit('imgChange', edge.node.id)"
        >
          {{edge.node.title}}
        </a>
        <span :class="{'!visible !text-gray-700 opacity-20 z-30': sel === edge.node.slug}">{{edge.node.title.replace('🤠', '')}}</span>
      </p>
      <!-- Footer -->
      <p class="footer">
        <a
          href="/about"
          @mouseenter="$emit('imgChange', )"
          :ref="'about'"
        >
          About
        </a>
        <span :class="{'!visible !text-gray-700 opacity-20 z-30': sel === 'about'}">About</span>
      </p>
      <!-- Sider -->
      <p class="sider">
        <a href="#">Blog</a>
        <span>Blog</span>
      </p>
    </div>
  </div>
</template>

<static-query>
  query Pages {
    pages: allProjectPost(sortBy: "date", order: DESC) {
      edges {
        node {
          title
          links
          slug
          id
        }
      }
    }
  }
</static-query>

<script>
export default {
  name: 'Menu',
  methods: {
    getPos (slug) {
      const r = this.$refs[slug][0].getBoundingClientRect()
      console.log(r)
      return { x: r.left, y: r.top }
    }
  },
  props: ['sel'],
  mounted () {
    this.$emit('mounted', this)
  }
}
</script>

<style scoped>
  p {
    @apply relative mb-8 break-all pointer-events-none;

    & a, & span {
      @apply leading-none font-bold;
    }

    & a {
      @apply relative underline text-accent text-6xl pointer-events-auto;
    }

    & span {
      font-family: 'Blackletter';
      font-size: 4.5rem;
      @apply
        absolute left-0 top-0 mt-4 ml-4 h-0
        pointer-events-none
        text-secondary
        invisible;
    }

    & a:hover {
      cursor: url('/cursor/arrow.png') 20 20, auto;
      @apply z-20;
    }

    & a:hover + span {
      @apply visible;
    }
  }

  @media (min-width: 768px) {
    p {
      @apply mb-4;
    }
  }

  @media (min-width: 1024px) {
    p {
      white-space: nowrap;
      @apply mb-0 break-normal;
    }

    .footer {
      @apply absolute pb-6 overflow-hidden bottom-0;
      & span {
        @apply mt-4;
      }
    }

    .sider {
      transform: rotate(90deg) translateY(100%);
      @apply absolute bottom-0 right-0 overflow-hidden pb-4 pt-6 pr-4 transform-br;

      & span {
        @apply -translate-y-4 bottom-0 ml-2;
      }
    }
  }
</style>
