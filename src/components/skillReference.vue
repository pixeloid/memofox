<template>
  <div class="pb-6 hot-bg-color">
    <hr class="simple mb-6">

    <!--
    <div class="hcenter pb-0">
      <img src="../assets/svg/mf-illustration.svg" style="width:540px" alt="">
      <img src="../assets/svg/memofox-videoedit-service.svg" alt="">
    </div>
    -->

    <div class="container">

      <div class="skill-wrapper">

        <h2 class="title is-3 has-text-centered">
          Minden, amit a <span class="memo">Memo</span><span class="fox">Fox</span> videószerkesztő<br/>szolgáltatás tartalmaz
        </h2>

        <div class="columns mb-5">
          <div class="column is-three-fifths is-offset-one-fifth has-text-centered">
            <p class="p-6 is-size-4">
              A felvételeidet dinamikus átmenetekkel, figyelemfelkeltő színkorrekcióval és képstabilizálással szerkesztjük. A profik által szerkesztett emlékedet garantáltan imádni fogják!
            </p>
          </div>
        </div>

        <div class="">

          <div class="columns has-background-white">
            <div class="column is-6-desktop has-text-center">
              <img src="../assets/svg/illustration/VirtualRealityHeadset.svg" alt="">
            </div>
            <div class="column is-4-desktop">
              <div class="skill-block">
                <div class="skill-info">
                  <h2 class="title mb-1 is-4">Zenék és hangok</h2>
                  <p class="lead-text is-5">
                    Tökéletesen illesztett zene és finomhangolt effektek. A videódat a <strong>8000+</strong> jogdíjmentes dalunkból választott zene ütemére szerkesztjük. Oszd meg videódat bármely közösségi médiában, szerzői jogi korlátozások nélkül.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-4-desktop is-offset-2 has-background-white">
              <div class="skill-block">
                <div class="skill-info">
                  <h2 class="title mb-1 is-4">Rázkódás javítása</h2>
                  <p class="lead-text is-5">
                    Minden videóból kihozzuk a lehető legtöbbet. Javítjuk a kéz által okozott képremegést, hiszen senki sem született gimbalnak. Szerkesztőink néha kész csodákat művelnek a felvételekkel.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4-desktop has-background-white">
              <img src="../assets/svg/illustration/Testimony.svg" alt="">
            </div>
          </div>

          <div class="columns">
            <div class="column is-4-desktop is-offset-2-desktop">
              <img src="../assets/svg/illustration/Growth.svg" alt="">
            </div>
            <div class="column is-4-desktop">
              <div class="skill-block">
                <div class="skill-info">
                  <h2 class="title mb-1 is-4">100%-ban csak a Tied!</h2>
                  <p class="lead-text is-5">
                    Az elkészült videóra nem teszünk logót és vízjelet sem. Olyan lesz, mintha Te készítetted volna.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-4-desktop is-offset-2">
              <div class="skill-block">
                <div class="skill-info">
                  <h2 class="title mb-1 is-4">Dinamikus átmenetek a felvételek között</h2>
                  <p class="lead-text is-5">
                    Minden videóból kihozzuk a lehető legtöbbet. Javítjuk a kéz által okozott képremegést, hiszen senki sem született gimbalnak. Szerkesztőink néha kész csodákat művelnek a felvételekkel.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4-desktop">
              <img src="../assets/svg/illustration/Startup.svg" alt="">
            </div>
          </div>

          <div class="columns">
            <div class="column is-4-desktop is-offset-2-desktop">
              <img src="../assets/svg/illustration/Setting.svg" alt="">
            </div>
            <div class="column is-4-desktop">
              <div class="skill-block">
                <div class="skill-info">
                  <h2 class="title mb-1 is-4">Szín korrekciók</h2>
                  <p class="lead-text is-5">
                    Az elkészült videóra nem teszünk logót és vízjelet sem. Olyan lesz, mintha Te készítetted volna.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-4-desktop is-offset-2">
              <div class="skill-block">
                <div class="skill-info">
                  <h2 class="title mb-1 is-4">Bármilyen kamerával készíthetsz felvételeket</h2>
                  <p class="lead-text is-5">
                    Ha több kamerát is használtál, legyen az GoPro, DSLR, Telefon, drón, nem probléma. Keverd össze a fájlokat és töltsd fel! A különleges emléked minden pillanata fontos.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4-desktop">
              <img src="../assets/svg/illustration/DroneTechnology.svg" alt="">
            </div>
          </div>

          <div class="columns">
            <div class="column is-4-desktop is-offset-2-desktop">
              <img src="../assets/svg/illustration/Security.svg" alt="">
            </div>
            <div class="column is-4-desktop">
              <div class="skill-block">
                <div class="skill-info">
                  <h2 class="title mb-1 is-4">Nagy hangsúlyt fordítunk a biztonságra.</h2>
                  <p class="lead-text is-5">
                    A személyes videóid számunkra a legfontosabb. A projekt végén minden megosztott és feltöltött adatot törlünk a szerverünkről.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="has-text-centered p-6">
        <router-link class="button is-primary is-medium" :to="{ name: 'Products', params: {} }">
          <span>Próbáld ki!</span>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="scss">
</style>
