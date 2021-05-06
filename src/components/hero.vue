<template>
  <div class="hero-wrapper vcenter">
    <div class="hero-bg">
      <VimeoPlayer v-bind:id="517867006" />
    </div>
    <div class="hero-bg-gradient"></div>
    <div class="container">
      <div class="hero is-medium is-memofox-hero">
        <div class="hero-body vcenter">
          <div class="columns">
            <div class="column is-full-mobile is-two-thirds-tablet is-half-desktop is-half-widescreen is-half-fullhd">
              <div class="hero-title-wrapper">
                <p class="title is-secondary">
                  Küldetésünk, hogy megmentsük a fiók mélyére száműzött emlékeidet.
                </p>
                <div class="columns">
                  <div class="column is-one-third">
                    <div class="separator-line"></div>
                  </div>
                </div>
                <p class="lead-text mb-5">
                  Készen állsz a kalandra? Egészen idáig utaztál, így itt az ideje, hogy találkozz a <span class="memo">Memo</span><span class="fox">Fox</span> Videószerkesztő szolgáltatásával.
                </p>
                <div class="vcenter hero-button-wrapper">
                  <router-link class="button is-primary" :to="{ name: 'Products', params: {} }">Szerezz egy videót</router-link>
                  <a class="button is-secondary is-outline is-inverse">Ismerd meg</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
