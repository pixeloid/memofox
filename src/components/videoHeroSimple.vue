<template>
  <div class="player-separator">
    <div class="columns is-center is-fullwidth">
      <div class="column is-three-fifths is-offset-one-fifth">
        <p class="title is-secondary has-text-centered">
          Videó szerkesztők, akik odafigyelnek az emlékeidre
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
import VimeoPlayer from '@/components/vimeoPlayer'

export default {
  components: {
    VimeoPlayer
  }
}
</script>

<style lang="scss">
</style>
