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

</style>

<script>
export default {

}
</script>
