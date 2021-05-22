<template>
  <div class="main products-wrapper">
    <div class="product-hero page-with-nav">
      <Nav />
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <h2 class="title is-secondary">
              MemoFox Videószerkesztő szolgáltatás megrendelése
            </h2>
            <div class="subtitle vcenter is-small is-weight-medium">
              <span class="material-icons-round">star</span>
              <span class="material-icons-round">star</span>
              <span class="material-icons-round">star</span>
              <span class="material-icons-round">star</span>
              <span class="material-icons-round pr-2">star</span> 24 vélemény | 64 videó
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            <p class="lead-text">
              A legegyszerűbb módja annak, hogy az emléked egy menő és megosztható videóba mentsd. A fejlett videoszerkesztés és a szakértői történetmesélés lehetővé teszi, hogy egy teljesen testreszabott videóval újraéld az izgalmas kalandodat.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <orderForm class="pb-6 pt-6" />
    </div>
    <FourStep />
    <Footer />

  </div>
</template>

<script>
import Nav from '@/components/nav'
import FourStep from '@/components/fourStep'
import orderForm from '@/components/orderForm'
import Footer from '@/components/footer'
export default {

  components: {
    Nav, Footer, FourStep, orderForm
  }
}

</script>

<style lang="scss">

</style>
