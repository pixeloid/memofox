<template>
  <div class="container nav-container">
    <nav class="navbar is-fixed-top boxed-shadow" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand vcenter">
          <a class="navbar-item" href="/">
            <img src="../assets/svg/memofox-logo-c-hor.svg" />
          </a>
          <span class="brand-subtitle">| Videószerkesztő szolgáltatás</span>
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
      </div>
    </nav>
  </div>
</template>

<script>
import Basket from "@/components/basket"

export default {
  components: {
    Basket
  },
  data() {
    return {
      //handleScroll: 0,
      windowScrollTop: 0,
    }
  },
  methods: {
    handleSCroll (event) {
      let header = document.querySelector(".navbar")

      if (window.scrollY > 16 && !header.className.includes('scrolled')) {
        header.classList.add('scrolled')
      } else if (window.scrollY < 16) {
        header.classList.remove('scrolled')
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleSCroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleSCroll)
  }
}

</script>

<style lang="scss">


</style>
