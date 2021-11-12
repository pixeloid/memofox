<template>

  <nav class="navbar boxed-shadow is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand vcenter">
        <a class="navbar-item" href="/">
          <img class="is-scrolled" src="../assets/svg/memofox-logo-w-hor.svg" />
          <img class="is-top" src="../assets/svg/memofox-logo-w-hor.svg" />
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="brand-background"></div>

      <div class="navbar-menu">
        <div class="navbar-end vcenter">
            <router-link class="navbar-item" :to="{ name: 'Products', params: {} }">Szerezz egy videót!</router-link>
            <router-link class="navbar-item" :to="{ name: 'Blog', params: {} }">Blog</router-link>
            <router-link class="navbar-item" :to="{ name: '', params: {} }">Kapcsolat</router-link>
            <Cart />
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
import Cart from '@/components/cart'

export default {
  components: {
    Cart
  },
  data () {
    return {
      handleScroll: 0,
      windowScrollTop: 0
    }
  },
  methods: {
    handleSCroll (event) {
      const header = document.querySelector('.navbar')

      if (window.scrollY > 16 && !header.className.includes('scrolled')) {
        header.classList.add('scrolled')
      } else if (window.scrollY < 16) {
        header.classList.remove('scrolled')
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleSCroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleSCroll)
  }
}

</script>

<style lang="scss">

</style>
