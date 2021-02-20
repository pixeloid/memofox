<template>
  <nav class="navbar is-fixed-top is-transparent container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/svg/memofox-logo-c-hor.svg" />
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>

        <Basket />
      </div>
    </div>
  </nav>
</template>

<script>
import Basket from "@/components/basket"

export default {
  components: {
    Basket
  },
  data() {
    return {

    }
  },
  methods: {

  }
}

</script>

<style lang="scss">


</style>
