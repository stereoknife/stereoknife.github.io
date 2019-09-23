<template>
  <div
    class="z-10"
  >
    <g-image
      v-for="(edge, i) in display"
      :key="i"
      :src="edge.node.title.src"
      :style="imgOffset(edge.node.title)"
      class="absolute top-0 right-0"
      blur="40"
    />
  </div>
</template>

<static-query>
  query Shots {
    shots: allShot {
      edges {
        node {
          title(width: 500)
          belongsTo {
            edges {
              node {
                ... on ProjectPost {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
</static-query>

<script>
export default {
  name: "Images",
  props: ['sel'],
  data () {
    return {
    }
  },
  computed: {
    display () { return this.$static.shots.edges.filter(edge => edge.node.belongsTo.edges[0].node.id === this.sel) }
  },
  methods: {
    imgOffset: function (img) {
      console.log(img.size.height)
      return ({
        marginTop: Math.floor((Math.random() * (window.innerHeight - img.size.height - 60)) + 31 ) + 'px',
        marginRight: Math.floor((Math.random() * 400) + 21) + 'px',
        zIndex: - Math.floor(Math.random() * 50) - 1
      })
    }
  }
}
</script>
