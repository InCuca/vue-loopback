<template lang="html">
  {{#extended}}
    <router-view id="app"></router-view>
  {{else}}
    <h1>\{{ hello }}</h1>
  {{/extended}}
</template>

<script>
export default {
  {{#unless extended}}
  data: () => ({
    hello: 'Hello World!',
  }),
  {{/unless}}
}
</script>

<style {{#extended}}lang="scss"{{else}}lang="css"{{/extended}}>
</style>
