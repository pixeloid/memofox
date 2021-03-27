<template>
  <div class="four-step-bg pt-6 pb-6">
    <div class="container">

      <h2 class="title is-secondary">
        Az időd drága
      </h2>
      <!--
      <div class="columns mb-6">
        <div class="column is-three-fifths is-offset-one-fifth">
          <p class="lead-text mb-6">Dőlj hátra és lazíts, miközben felejthetetlen videót készítünk Neked!</p>
        </div>
      </div>
    -->

      <p class="lead-text mb-5">Dőlj hátra és lazíts, miközben felejthetetlen videót készítünk Neked!</p>

      <div class="columns four-step is-multiline mb-5 is-variable is-1">
        <div class="column is-one-quarter-desktop is-half-tablet pb-4">
          <div class="fourstep-block has-text-centered">
            <img src="../assets/svg/fourstep-one.svg" alt="">
            <h2 class="title is-tertiary hcenter vcenter">
              1. Rendeld meg!
            </h2>
            <p class="lead-text has-text-centered">
              Válaszd ki a szerkesztés stílusát, hosszát és a feltöltendő felvételek méretét.
            </p>
          </div>
        </div>
        <div class="column is-one-quarter-desktop is-half-tablet pb-4">
          <div class="fourstep-block has-text-centered">
            <img src="../assets/svg/fourstep-two.svg" alt="">
            <h2 class="title is-tertiary hcenter vcenter">
              2. Tedd Egyedivé!
            </h2>
            <p class="lead-text has-text-centered">
              Oszd meg velünk az ötleteidet, hogy a személyes videód még tökéletesebb legyen számodra.
            </p>
          </div>
        </div>
        <div class="column is-one-quarter-desktop is-half-tablet pb-4">
          <div class="fourstep-block has-text-centered">
            <img src="../assets/svg/fourstep-three.svg" alt="">
            <h2 class="title is-tertiary hcenter vcenter">
              3. Töltsd fel!
            </h2>
            <p class="lead-text has-text-centered">
              Töltsd fel nekünk a kamerával vagy telefonnal készített emléket, rendezvényt, vagy egy kalandot!
            </p>
          </div>
        </div>
        <div class="column is-one-quarter-desktop is-half-tablet pb-4">
          <div class="fourstep-block has-text-centered">
            <img src="../assets/svg/fourstep-four.svg" alt="">
            <h2 class="title is-tertiary hcenter vcenter">
              4. Ünnepelj!
            </h2>
            <p class="lead-text has-text-centered">
              7 napon belül küldjük a videót. Oszd meg a csodálatot bárkivel, bármelyik közösségi oldalon.
            </p>
          </div>
        </div>
      </div>

      <div>
        <router-link class="button is-secondary" :to="{ name: 'Products', params: {} }">
          <span>Próbáld ki!</span>
          <span class="icon material-icons">east</span>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
