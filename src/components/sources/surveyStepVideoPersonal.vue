<template>
  <article class="is-fullheight">
    <p class="panel-heading vcenter title is-6 m-0 p-4">
      <span class="order-sort-numb hcenter vcenter">{{ surveyPageNumber }}</span>
      <span>{{ title }}</span>
    </p>
    <div class="panel-block p-5 is-fullheight is-fullwidth">
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
      multi: false,
      type: this.$parent.selectedItems.videoPersonal,
      items: [{
        active: false,
        name: 'Személyes Videó',
        icon: 'face',
        image: require('@/assets/svg/personal.svg')
      }, {
        active: false,
        name: 'Céges Videó',
        icon: 'maps_home_work',
        image: require('@/assets/svg/business.svg')
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
