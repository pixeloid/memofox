<template>
  <div class="main">
    <Nav />
    <Hero />
    <div class="bg-light">
      <div class="container">
        <div class="pt-6 pb-6">
          <h2 class="title is-fox has-text-centered">Az időd drága</h2>
          <div class="columns is-centered">
            <div class="column is-three-fifths">
              <p class="lead-text has-text-centered">
                Töltsd fel a felvételeidet, amiket egy kiránduláson, nászúton, vagy bármilyen számodra fontos eseményen készítettél!
                <br /><strong>Majd dőlj hátra és lazíts, miközben készül a menő videód!</strong>
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
