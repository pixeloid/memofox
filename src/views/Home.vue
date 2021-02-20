<template>
  <div class="main">
    <Navigation id="nav" class="main" />
    <section class="hero is-medium is-memofox-hero container">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <p class="title">
              Küldetésünk, hogy megmentsük a fiók mélyére száműzött emlékeidet.
            </p>
            <div class="columns">
              <div class="column is-one-third">
                <div class="separator-line"></div>
              </div>
            </div>
            <p class="subtitle">
              Készen állsz a kalandra? Egészen idáig utaztál, így itt az ideje, hogy találkozz a <span class="memo">Memo</span><span class="fox">Fox</span> Videószerkesztő szolgáltatásával.
            </p>

            <button type="button" class="button is-primary is-medium" name="button">Szerezz egy videót</button>
          </div>
        </div>
      </div>
    </section>
    <div class="hero-bg">
      <img src="../assets/svg/header_hero_bg.svg" alt="">
    </div>  
  </div>
</template>

<script>

import Nav from "@/components/nav"
import Footer from "@/components/footer"

export default {
  components: {
    'Navigation': Nav,
    'Footer': Footer
  }
}
</script>
