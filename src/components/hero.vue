<template>
  <div class="hero-bg">
    <img src="../assets/svg/header_hero_bg.svg" alt="">
  </div>
  <div class="container">
    <div class="hero is-medium is-memofox-hero">
      <div class="hero-body vcenter pt-6">
        <div class="columns">
          <div class="column is-half">
            <p class="title is-primary">
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
            <router-link class="button is-primary is-medium" :to="{ name: 'Products', params: {} }">Szerezz egy videót</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

</style>
