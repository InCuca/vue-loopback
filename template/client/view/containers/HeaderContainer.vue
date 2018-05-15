<template lang="html">
  <div class="header-container">
    <b-navbar
      variant="dark"
      type="dark"
      toggleable
      toggle-breakpoint="sm">
      <b-navbar-toggle target="nav_collapse"/>

      <b-navbar-brand
        :to="{name: 'home'}"
        class="logo">
        <img src="../static/images/logo.png" >
      </b-navbar-brand>

      <b-collapse
        id="nav_collapse"
        is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{name: 'profile'}">CHANGE PASSWORD</b-nav-item>
          <b-nav-item @click="onLogoutClick">LOG OUT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-navbar>
      <b-breadcrumb :items="$store.state.breadcrumb"/>
    </b-navbar>
  </div>
</template>

<script>
import notification from '@/view/mixins/notification';

export default {
  mixins: [notification],
  methods: {
    onLogoutClick() {
      this
        .$store
        .dispatch('auth/signOut')
        .catch(this.notifyError);
    },
  },
};
</script>

<style lang="css">
.logo img {
  margin: 0 14px;
  max-height: 72px;
}
</style>
