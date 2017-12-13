<template lang="html">
  <div class="profile-view">
    <div class="card">
      <div class="logo">
        <img src="../static/images/logo.png">
      </div>
      <div class="card-block p-4">
        <form @submit="onSubmit">
          <div v-if="access_token ===  null" class="form-group">
            <label for="senha">Old password</label>
            <input type="password"
                   class="form-control"
                   id="senha"
                   placeholder="Insert the old password"
                   v-model="password"
                   required>
          </div>
          <div class="form-group">
            <label for="senha-nova1">New password</label>
            <input type="password"
                   class="form-control"
                   id="senha-nova1"
                   placeholder="Insert the new password"
                   v-model="passwordNew1"
                   required>
          </div>
          <div class="form-group">
            <label for="senha-nova2">Confirmation</label>
            <input type="password"
                   class="form-control"
                   id="senha-nova2"
                   placeholder="Confirm the new password"
                   v-model="passwordNew2"
                   required>
          </div>
          <div class="alert alert-danger"
               role="alert"
               v-if="error">\{{error.message}}</div>
          <div class="flex">
            <button
                    class="btn btn-danger"
                    @click="onCancel">
                    <i class="fa fa-ban"></i>
                    CANCEL
            </button>
            <button type="submit"
                    class="btn btn-success">
                    <i v-if="loading" class="fa fa-spinner"></i>
                    <i v-else class="fa fa-check"></i>
                    SAVE
            </button>
          </div>
        </form>
        <b-modal
          ref="resetSuccess"
          ok-only
          @ok="onModalOk">
          The password has been updated!
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    access_token: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      password: null,
      passwordNew1: null,
      passwordNew2: null,
      error: null,
      loading: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.loading = true
      this.error = null

      if(this.passwordNew1 !== this.passwordNew2) {
        this.loading = false
        this.error = new Error('The password does not match, please try again')
        return;
      }

      this
        .$store
        .dispatch('auth/resetPassword', {
          oldPassword: this.password,
          newPassword: this.passwordNew1,
          access_token: this.access_token
        })
        .then(() => {
          this.loading = false
          this.$refs.resetSuccess.show()
        })
        .catch(err => {
          this.error = err
          this.loading = false
        })
    },
    onCancel (evt) {
      evt.preventDefault();
      this.$router.go(-1);
    },
    onModalOk() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-view {
  display: flex;
  height: 100vh;
//   background-image: url(../static/images/background-login.png);
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
}
.card {
  border: none;
  margin: auto;
  background-color: $dark;
}
.card .logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card .logo img {
  margin: 30px;
  max-width: 108px;
}
.card .card-block {
  background-color: var(--white);
}
</style>
