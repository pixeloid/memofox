<template>

</template>

<script>

import firebase from 'firebase/app'
import 'firebase/auth'

export let loggedIn

export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user
      /*
      if(user){
        this.loggedIn = true
      } else {
        this.loggedIn = false
      }
      */
      console.log(this.loggedIn)

    })
  },
  data() {
    return {
      loggedIn: false
    }
  }
}
</script>
