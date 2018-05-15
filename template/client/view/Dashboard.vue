<template lang="html">
  <div class="dashboard-view">
    <HeaderContainer />
    <b-container fluid>
      Welcome!
      <HelloWorld />
    </b-container>
  </div>
</template>

<script>
// HelloWorld
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';
import HeaderContainer from './containers/HeaderContainer.vue';

export default {
  components: {
    HeaderContainer,
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>

</style>
