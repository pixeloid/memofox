<template>
  <article>
    <p class="panel-heading vcenter title is-6 m-0 p-6">
      <span class="order-sort-numb hcenter vcenter">{{ surveyPageNumber }}</span>
      <span>{{ title }}</span>
    </p>
    <div class="panel-block p-6">
      <div class="columns is-multiline is-variable is-1 item-wrapper is-fullwidth">
        <div v-for='(item, i) in items' :key='i' class="column is-fullheight">
          <div class="item-box hcenter" @click="$parent.itemClick(i, items, multi, type)" v-bind:class="{'is-active': item.active, 'is-info': item.info}">
            <p class="name">
              {{ item.name }}
            </p>
            <div v-if="item.desc">
              <p v-html="item.desc"></p>
            </div>
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
      category: 'Amount',
      multi: false,
      type: this.$parent.selectedItems.videoSize,
      items: []
    }
  },
  created () {
    this.$parent.getFilteredProducts(this.category, this.items)
    this.$parent.filterActiveElement(this.items, this.type, this.multi)
  }
}
</script>
