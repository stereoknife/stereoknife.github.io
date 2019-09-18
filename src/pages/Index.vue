<template>
  <Layout>

  </Layout>
</template>

<page-query>
query Pages {
  pages: allProjectPost {
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
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>

</style>
