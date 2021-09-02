<template>
  <article>
    <p class="panel-heading vcenter title is-6 m-0 p-4">
      <span class="order-sort-numb hcenter vcenter">{{ surveyPageNumber }}</span>
      <span>{{ title }}</span>
    </p>
    <div class="panel-block p-5 is-fullheight">
      <div class="columns is-multiline is-variable is-1 item-wrapper is-fullwidth is-fullheight">
        <div v-for='(item, i) in items' :key='i' class="column is-fullheight">
          <div class="item-box is-fullheight" @click="$parent.itemClick(i, items, multi, type)" v-bind:class="{'is-active': item.active, 'is-info': item.info}">
            <p class="name">
              {{ item.name }}
            </p>

            <p v-if="item.desc">
              <div v-html="item.desc"></div>
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
      category: 'Style',
      multi : false,
      type: this.$parent.selectedItems.videoEditType,
      items: []
    }
  },
  created() {
    this.$parent.getFilteredProducts(this.category, this.items)
    this.$parent.filterActiveElement(this.items, this.type, this.multi)
  }
}
</script>

<style lang="css" scoped>
</style>
