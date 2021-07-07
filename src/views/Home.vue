<template>
  <div class="main">
    <Nav />
    <Hero />

    <div class="bg-light">
      <div class="container">
        <div class="pt-max pb-max">
          <h2 class="title is-primary">Mindenkinek van kamerája</h2>
          <div class="columns">
            <div class="column is-half is-desktop">
              <p class="lead-text">
                A kérdés az, hogy mit kezdesz azzal a számtalan felvétellel, amelyeket a fontos eseményeiden készítettél? <span class="is-strong">Bízd ránk!</span>
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

import Nav from '@/components/nav'
import Hero from '@/components/hero'
import FourStep from '@/components/fourStep'
import SkillRef from '@/components/skillReference'
import Vimeo from '@/components/videoHeroSimple'
import Footer from '@/components/footer'

export default {
  components: {
    Nav, Hero, FourStep, SkillRef, Footer, Vimeo
  }
}
</script>

<style lang="scss">

</style>
