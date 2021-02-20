<template>
  <div class="columns mt-6">
    <div class="column is-half is-offset-one-quarter">
      <div class="card login">

        <div class="card-header p-5">
          <h2 class="title">
            <i class="ph-lock mr-2"></i>
            Bejelentkezés
          </h2>
        </div>

        <div class="pt-5 pl-5 pr-5">
          <p class="has-text-weight-bold">A használathoz kérlek jelentkezz be!</p>
          <p>Ha még nincs fiókod, akkor a regisztrációra klikkelve készíts egyet!</p>
        </div>

        <form class="form" @submit.prevent="Login">

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
              <button class="button is-primary is-medium" type="submit">Belépés</button>
              <router-link class="button is-link is-outlined" :to="{ name: 'Signup', params: {} }">
                <i class="ph-smiley-bold"></i>
                <i class="ph-heart-fill" style="color: hotpink"></i>
                <i class="ph-cube-bold"></i>
                Regisztráció
              </router-link>
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
  data() {
    return {
      isLoad: false,
      email: '',
      password: '',
      error: false,
      message: ''
    }
  },
  methods: {
    async Login() {

      this.isLoad = true

      try {
        const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        //console.log(val)
        this.$router.replace({name: 'Secret'})
      } catch(err) {
        this.error = true
        this.message = err.message
        console.log(err)
      }

      this.isLoad = false

    },
    closeNotification() {
      this.error = false
    }
  }
}
</script>

<style lang="scss">


</style>
