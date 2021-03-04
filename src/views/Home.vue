<template>
  <div class="main">
    <div class="hero-wrapper">
      <Nav />
      <Hero />
    </div>
    <div class="bg-light">
      <div class="container">
        <div class="pt-max pb-max">
          <h2 class="title is-primary">Az időd drága</h2>
          <div class="columns">
            <div class="column is-half is-desktop">
              <p class="lead-text">
                Töltsd fel azokat a videókat, amiket egy kiránduláson, nászúton, vagy bármilyen más, számodra fontos eseményen készítettél!
                <strong>Majd dőlj hátra és lazíts, miközben készül a menő videód!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FourStep />
    <Vimeo />
    <Footer />
  </div>
</template>

<script>

import Nav from "@/components/nav"
import Hero from "@/components/hero"
import FourStep from "@/components/fourStep"
import Vimeo from "@/components/videoHeroSimple"
import Footer from "@/components/footer"

export default {
  components: {
    Nav, Hero, FourStep, Vimeo, Footer
  }
}
</script>

<style lang="scss">


</style>
