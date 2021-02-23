<template>
  <div class="main page-with-nav four-step-bg">
    <Nav />
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-three-quarters">
          <h2 class="title is-secondary hcenter">
            MemoFox Videószerkesztő szolgáltatás
          </h2>
          <div class="subtitle hcenter vcenter is-small is-weight-medium">
            <span class="material-icons-round">star</span>
            <span class="material-icons-round">star</span>
            <span class="material-icons-round">star</span>
            <span class="material-icons-round">star</span>
            <span class="material-icons-round pr-2">star</span> 24 vélemény | 64 videó
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-three-quarters">
          <p class="bread-text has-text-centered">
            A legegyszerűbb módja annak, hogy az emléked egy menő és megosztható videóba mentsd. A fejlett videoszerkesztés és a szakértői történetmesélés lehetővé teszi, hogy egy teljesen testreszabott videóval újraéld az izgalmas kalandodat.
          </p>
          <hr class="simple mt-6" />
        </div>
      </div>
    </div>
    <orderForm class="mb-6" />
    <FourStep />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/nav"
import FourStep from "@/components/fourStep"
import orderForm from "@/components/orderForm"
import Footer from "@/components/footer"
export default {

  components: {
    Nav, Footer, FourStep, orderForm
  }
}

</script>

<style lang="scss">

</style>
