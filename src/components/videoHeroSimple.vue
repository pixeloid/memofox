<template>
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
