<template>
  <div class="columns mt-6">
    <div class="column is-three-fifths is-offset-one-fifth">
      <div class="card">

        <div class="card-header p-5">
          <h2 class="title">Bejelentkezés</h2>
        </div>

        <div class="card-content">
          <form class="">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="e.g. alex@example.com">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" placeholder="********">
              </div>
            </div>

            <button class="button is-primary">Sign in</button>
            Vagy <router-link :to="{ name: 'signup', params: {} }">Regisztrálj</router-link>!
          </form>
        </div>

        <footer class="card-footer">

        </footer>
      </div>



    </div>
  </div>
</template>

<script>

//import firebase from '../firebase'

export default {
  name: 'Login',
  data() {
    return {
      isLoad: false,
    }
  }
}
</script>

<style lang="css" scoped>
</style>
