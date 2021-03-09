<template>
  <div class="">
    <div class="what-we-do pb-6">

      <hr class="simple mb-6">
      <h2 class="title is-secondary has-text-centered">
        Minden, amit a <span class="memo">Memo</span><span class="fox">Fox</span> videószerkesztő<br/>szolgáltatás tartalmaz
      </h2>
      <div class="columns mb-6">
        <div class="column is-three-fifths is-offset-one-fifth has-text-centered">
          <p class="lead-text">A felvételeidet dinamikus átmenetekkel, figyelemfelkeltő színkorrekcióval és képstabilizálással szerkesztjük. A profik által szerkesztett emlékedet garantáltan imádni fogják!</p>
        </div>
      </div>

    </div>

    <div class="player-separator">
      <div class="columns is-center">
        <div class="column is-three-fifths is-offset-one-fifth">
          <p class="title is-secondary has-text-centered">
            Pro szerkesztők, akik szemmel tartják a kalandvideókat.
          </p>
          <p class="lead-text has-text-centered">
            Olyan történeteket alkotunk, melyet aztán érdemes megosztani. Válogatjuk az unalmasnak tűnő felvételeket és előhozzuk a legjobb pillanatokat.
          </p>
        </div>
      </div>
      <VimeoPlayer v-bind:id="510342803" />
    </div>
  </div>
</template>

<script>
import VimeoPlayer from "@/components/vimeoPlayer"

export default {
  components: {
    VimeoPlayer
  }
}
</script>

<style lang="scss">
</style>
