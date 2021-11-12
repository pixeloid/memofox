<template>
  <article class="is-fullheight">
    <p class="panel-heading vcenter title is-6 m-0 p-6">
      <span class="order-sort-numb hcenter vcenter">{{ surveyPageNumber }}</span>
      <span>{{ title }}</span>
    </p>
    <div class="panel-block p-6 is-fullheight">
      <div class="columns is-multiline is-variable is-1 item-wrapper is-fullwidth">
        <div v-for='(item, i) in items' :key='i' class="column is-half">
          <div class="item-box vcenter is-row" @click="$parent.itemClick(i, items, multi, type)" v-bind:class="{'is-active': item.active, 'is-info': item.info}">
            <span class="item-image">
              <img :src="item.image" />
            </span>
            <p class="name hcenter">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="survey-buttons has-text-right vcenter p-6">
      <div class="button-container has-text-left">
        <button type="button" class="button is-primary is-outline" @click="$parent.backStep">
          <span class="material-icons-round">fast_rewind</span>
        </button>
      </div>
      <span class="is-size-6"><strong> {{ surveyPageNumber }} / {{ $parent.maximumStep }} </strong></span>

      <div class="button-container has-text-right">
        <button v-if="$parent.maximumStep != surveyPageNumber" type="button" class="button is-primary is-outline" @click="$parent.nextStep">
          <span>{{ nextButtonText }}</span>
          <span class="icon material-icons-round">fast_forward</span>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    surveyPageNumber: Number,
    title: String
  },
  data () {
    return {
      nextButtonText: 'Következő',
      multi: true,
      type: this.$parent.selectedItems.videoCameras,
      items: [{
        active: false,
        name: 'Drone (DJI, Parrot, Autel... stb.)',
        // eslint-disable-next-line no-undef
        image: require('@/assets/svg/drone.svg')
      }, {
        active: false,
        name: 'Okostelefon (iPhone, Samsung... stb.)',
        // eslint-disable-next-line no-undef
        image: require('@/assets/svg/smartphone.svg')
      }, {
        active: false,
        name: 'Képek',
        // eslint-disable-next-line no-undef
        image: require('@/assets/svg/photo.svg')
      }, {
        active: false,
        name: 'Akció kamera (GoPro, Sony... stb.)',
        // eslint-disable-next-line no-undef
        image: require('@/assets/svg/gopro.svg')
      }, {
        active: false,
        name: '360 Camera (GoPro Max, Insta 360... stb.)',
        // eslint-disable-next-line no-undef
        image: require('@/assets/svg/360camera.svg')
      }, {
        active: false,
        name: 'DSLR (Sony, Cannon, Nikon... stb.)',
        // eslint-disable-next-line no-undef
        image: require('@/assets/svg/dslr.svg')
      }]
    }
  },
  created () {
    this.$parent.filterActiveElement(this.items, this.type, this.multi)
  }
}
</script>

<style lang="css" scoped>
</style>
