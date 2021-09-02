<template>
  <article class="is-fullheight">
    <p class="panel-heading vcenter title is-6 m-0 p-4">
      <span class="order-sort-numb hcenter vcenter">{{ surveyPageNumber }}</span>
      <span>{{ title }}</span>
    </p>
    <div class="panel-block p-5 is-fullheight">
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
  </article>
</template>

<script>
export default {
  props: {
    surveyPageNumber: Number,
    title: String,
  },
  data() {
    return {
      multi: true,
      type: this.$parent.selectedItems.videoCameras,
      items: [{
        active: false,
        name: 'Drone (DJI, Parrot, Autel... stb.)',
        image: require('@/assets/svg/drone.svg')
      }, {
        active: false,
        name: 'Okostelefon (iPhone, Samsung... stb.)',
        image: require('@/assets/svg/smartphone.svg')
      }, {
        active: false,
        name: 'Képek',
        image: require('@/assets/svg/photo.svg')
      }, {
        active: false,
        name: 'Akció kamera (GoPro, Sony... stb.)',
        image: require('@/assets/svg/gopro.svg')
      }, {
        active: false,
        name: '360 Camera (GoPro Max, Insta 360... stb.)',
        image: require('@/assets/svg/360camera.svg')
      }, {
        active: false,
        name: 'DSLR (Sony, Cannon, Nikon... stb.)',
        image: require('@/assets/svg/dslr.svg')
      }]
    }
  },
  created() {
    this.$parent.filterActiveElement(this.items, this.type, this.multi)
  }
}
</script>

<style lang="css" scoped>
</style>
