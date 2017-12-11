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
            <input type="email"
                   class="form-control"
                   id="email"
                   aria-describedby="emailHelp"
                   placeholder="Digite seu e-mail"
                   v-model="email"
                   required>
          </div>
          <div class="form-group">
            <label for="senha">Senha</label>
            <input type="password"
                   class="form-control"
                   id="senha"
                   placeholder="Digite sua senha"
                   v-model="password"
                   required>
          </div>
          <div class="alert alert-danger"
               role="alert"
               v-if="error">{{error.message}}</div>
          <div class="flex">
            <a class="link"
              @click.prevent="$refs.forgotPassword.show()"
              href="#">
              Esqueceu sua senha?
            </a>
            <button type="submit"
                    class="btn btn-success">
              <i v-if="loading" class="fa fa-spinner"></i>
              <i v-else class="fa fa-check"></i>
              ENTRAR
            </button>
          </div>
        </form>

        <!-- Forgot Password -->
        <b-modal
            ref="forgotPassword"
            title="Recuperar a senha"
            size="sm"
            @ok="onModalOk"
            @shown="onModalShown">
          <form ref="forgotPasswordForm" class="forgot-form">
            <i v-if="loading" class="fa fa-spinner"></i>
            <b-alert
              v-if="recoverError"
              :show="recoverError !== null"
              variant="danger">
              {{ recoverError.message }}
            </b-alert>
            <input
              type="email"
              class="form-control"
              ref="recoverEmail"
              placeholder="Digite o seu e-mail"
              v-model="recoverEmail"
              @keydown.enter="sendRecoverEmail"
              required/>
          </form>
        </b-modal>

        <b-modal
          ref="recoverSuccess"
          ok-only>
          Um email foi enviado para você, por favor verifique a caixa de entrada
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      error: null,
      recoverError: null,
      recoverSuccess: null,
      recoverEmail: null,
      loading: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.loading = true
      this.error = null
      this
        .$store
        .dispatch('auth/signIn', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.loading = false
        })
        .catch(err => {
          this.error = err
          this.loading = false
        })
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
      const email = this.$refs.recoverEmail;

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
          .catch(err => {
            this.loading = false;
            this.recoverError = err;
          });
      } else {
        this.recoverError = {message: 'Verifique o e-mail digitado e tente novamente'};
      }
    }
  }
}
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
