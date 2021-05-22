<template>
  <Auth />
  <router-view />
</template>

<script>
import Auth from '@/components/auth'
export default {
  components: {
    Auth: Auth
  }
}

</script>

<style lang="scss">
  @import './assets/scss/app.scss';
</style>
