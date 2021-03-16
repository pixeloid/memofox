<template>
  <div class="main">
    <div class="hero-wrapper">
      <Nav />
      <Hero />
    </div>
    <div class="bg-light">
      <div class="container">
        <div class="pt-max pb-max">
          <h2 class="title is-secondary">Mindenkinek van kamerája</h2>
          <div class="columns">
            <div class="column is-half is-desktop">
              <p class="lead-text">
                <span class="is-strong">A kérdés az, hogy mit kezdesz azzal a számtalan felvétellel, amelyeket a fontos eseményeiden készítettél?</span> <span class="is-strong is-color-primary">Bízd ránk!</span>
                A feltöltött videóidat egy hangulatos klippé varázsoljuk, amely igazi audiovizuális filmélmény lesz a néző számára.
                Hangulatos zenével, a legjobb pillanatok kiemelésével egy maximálisan testre szabott kisfilmet kapsz, amellyel újra átélheted és megoszthatod barátaiddal az izgalmas kalandodat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FourStep />
    <SkillRef />
    <Vimeo />
    <Footer />
  </div>
</template>

<script>

import Nav from "@/components/nav"
import Hero from "@/components/hero"
import FourStep from "@/components/fourStep"
import Vimeo from "@/components/videoHeroSimple"
import SkillRef from "@/components/skillReference"
import Footer from "@/components/footer"

export default {
  components: {
    Nav, Hero, FourStep, Vimeo, SkillRef, Footer
  }
}
</script>

<style lang="scss">


</style>
