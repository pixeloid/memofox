<template>
  <div class="main products-wrapper">
    <div class="product-hero page-with-nav">
      <Nav />
      <div class="container">

      </div>
    </div>
    <div class="">
      <Survey class="pb-6 pt-6" />
    </div>
    <FourStep />
    <Footer />

  </div>
</template>

<script>
import Nav from '@/components/nav'
import FourStep from '@/components/fourStep'
import Footer from '@/components/footer'
export default {
  components: {
    Nav, Footer, FourStep
  }
}
</script>

<style lang="css" scoped>
</style>
