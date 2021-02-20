<template>
  <div class="columns mt-6">
    <div class="column is-half is-offset-one-quarter">
      <div class="card login">

        <div class="card-header p-5">
          <h2 class="title">Regisztráció</h2>
        </div>

        <div class="pt-5 pl-5 pr-5">
          <p class="has-text-weight-bold">Szia!</p>
          <p>Kérlek töltsd ki az alábbi formot és regisztrálj!</p>
        </div>

        <form class="form" @submit.prevent="Register">

          <div class="card-content">

            <div class="field">
              <div class="control">
                <input class="input" v-model="email" type="email" placeholder="e.g. alex@example.com">
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input class="input" v-model="password" type="password" placeholder="********">
              </div>
            </div>

            <div class="mt-4 buttons">
              <button class="button is-primary is-medium" type="submit">Regisztrálok</button>
              <router-link class="button is-link is-outlined" :to="{ name: 'Login', params: {} }">Van már fiókom</router-link>
            </div>

          </div>

          <footer v-if="error" class="card-footer">
            <div class="notification is-danger">
              <button class="delete" @click="closeNotification"></button>
              {{message}}
            </div>
          </footer>

        </form>

      </div>
    </div>
  </div>
</template>

<script>

import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Signup',
  data() {
    return {
      isLoad: false,
      email: null,
      password: null,
      error: false,
      message: ''
    }
  },
  methods: {
    async Register() {
      this.isLoad = true

      try {
        const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        this.$router.replace({name: "Secret"})
      } catch(err) {
        this.error = true
        this.message = err.message
        // console.log(err)
      }

      this.isLoad = false

    }
  }
}
</script>

<style lang="css" scoped>
</style>
