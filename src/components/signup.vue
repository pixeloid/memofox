<template>
  <div class="columns mt-6">
    <div class="column is-three-fifths is-offset-one-fifth">
      <div class="card">

        <div class="card-header p-5">
          <h2 class="title">Regisztráció</h2>
        </div>

        <div class="card-content">

            <div class="field">
              <label class="label">Név</label>
              <div class="control">
                <input class="input" v-model="name" type="text" placeholder="full name">
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" v-model="email" type="email" placeholder="e.g. alex@example.com">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" v-model="password" type="password" placeholder="********">
              </div>
            </div>

            <button class="button is-primary" @click="register">Regisztráció</button>
            Van már fiókod? <router-link :to="{ name: 'login', params: {} }">Jelentkezz be</router-link>!

        </div>

        <footer class="card-footer">

        </footer>
      </div>



    </div>
  </div>
</template>

<script>

//import {fb} from '../firebase'

export default {
  name: 'Signup',
  data() {
    return {
      isLoad: false,
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    register() {
      /*
      this.isLoad = true
      fb.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        this.$router.replace('/admin')
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        this.isLoad = false
        console.log(error);
      });
      */
    }
  }

}
</script>

<style lang="css" scoped>
</style>
