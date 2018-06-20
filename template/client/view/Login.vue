<template>
  <div class="login-view">
    <div class="card">
      <div class="logo">
        <img src="../static/images/logo.png">
      </div>
      <div class="card-block p-4">
        <!-- Login Form -->
        <form @submit="onSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Insert your email"
              required>
          </div>
          <div class="form-group">
            <label for="senha">Password</label>
            <input
              id="senha"
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Insert your password"
              required>
          </div>
          <div
            v-if="error"
            class="alert alert-danger"
            role="alert">\{{ error.message }}</div>
          <div class="flex">
            <a
              class="link"
              href="#"
              @click.prevent="$refs.forgotPassword.show()">
              Forgot your password?
            </a>
            <button
              type="submit"
              class="btn btn-success">
              <i
                v-if="loading"
                class="fa fa-spinner"/>
              <i
                v-else
                class="fa fa-check"/>
              SIGN IN
            </button>
          </div>
        </form>

        <!-- Forgot Password -->
        <b-modal
          ref="forgotPassword"
          title="Recover the password"
          size="sm"
          @ok="onModalOk"
          @shown="onModalShown">
          <form
            ref="forgotPasswordForm"
            class="forgot-form">
            <i
              v-if="loading"
              class="fa fa-spinner"/>
            <b-alert
              v-if="recoverError"
              :show="recoverError !== null"
              variant="danger">
              \{{ recoverError.message }}
            </b-alert>
            <input
              ref="recoverEmail"
              v-model="recoverEmail"
              required
              type="email"
              class="form-control"
              placeholder="Insert your email"
              @keydown.enter="sendRecoverEmail">
          </form>
        </b-modal>

        <b-modal
          ref="recoverSuccess"
          ok-only>
          An email has been sent, please verify your mailbox
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    sessionError: {
      type: Error,
      default: null,
    },
  },
  data() {
    return {
      email: null,
      password: null,
      error: null,
      recoverError: null,
      recoverSuccess: null,
      recoverEmail: null,
      loading: false,
    };
  },
  watch: {
    sessionError: {
      handler(err) {
        this.error = err;
      },
      immediate: true,
    },
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.loading = true;
      this.error = null;
      this
        .$store
        .dispatch('auth/signIn', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({name: 'agenda'});
          this.loading = false;
        })
        .catch((err) => {
          this.error = err;
          this.loading = false;
        });
    },
    onModalShown() {
      this.$refs.forgotPasswordForm.reset();
      this.recoverError = null;
      this.$refs.recoverEmail.focus();
    },
    onModalOk(evt) {
      evt.preventDefault();
      this.sendRecoverEmail();
    },
    sendRecoverEmail() {
      const form = this.$refs.forgotPasswordForm;

      this.recoverError = null;
      if (form.checkValidity()) {
        this.loading = true;
        this
          .$store
          .dispatch('auth/rememberPassword', this.email)
          .then(() => {
            this.loading = false;
            this.$refs.forgotPassword.hide();
            this.$refs.recoverSuccess.show();
          })
          .catch((err) => {
            this.loading = false;
            this.recoverError = err;
          });
      } else {
        this.recoverError = {
          message: 'Please, check the inserted email and try again',
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-view {
  display: flex;
  height: 100vh;
//   background-image: url(http://via.placeholder.com/1920x1100);
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

.link {
  cursor: pointer;
}

.forgot-form {
  text-align: center;
}

</style>
