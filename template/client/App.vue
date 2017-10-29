<template lang="html">
  <h1>{{ hello }}</h1>
</template>

<script>
export default {
  props: {
    hello: {
      type: String,
      default: 'Hello World!',
    }
  }
}
</script>

<style lang="css">
</style>
