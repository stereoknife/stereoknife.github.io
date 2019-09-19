<template>
  <div class="">
    <div class="container m-auto">
      <slot/>
    </div>
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
  body {
    @apply bg-orange-200;
  }
</style>

<script>
export default {

}
</script>
