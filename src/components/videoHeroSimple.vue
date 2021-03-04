<template>
  <div class="columns is-centered">
    <div class="column is-three-quarters">
      <h2 class="title secondary is-dark has-text-centered is-normal is-light mb-4">
        Minden, amit a <span class="memo">Memo</span><span class="fox">Fox</span> videószerkesztő<br/>szolgáltatásával kaphatsz
      </h2>
    </div>
  </div>
  <div class="player-block">
    <div class="container">
      <div class="hero is-medium is-memofox-hero">
        <div class="hero-body">
          <div class="columns">
            <div class="column is-half">
              <p class="title is-primary">
                Pro szerkesztők vagyunk, akik szemmel tartják a kalandvideókat
              </p>
              <div class="columns">
                <div class="column is-one-third">
                  <div class="separator-line"></div>
                </div>
              </div>
              <p class="lead-text mb-5">
                Történeteket hozunk létre azáltal, hogy válogatjuk az unalmasnak tűnő felvételeket és előhozzuk a legjobb pillanatokat, melyeket érdemes megosztani.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <VimeoPlayer v-bind:id="517805197" />
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
