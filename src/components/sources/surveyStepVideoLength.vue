<template>
  <section>
    <p class="title is-tertiary vcenter">
      <span class="order-sort-numb hcenter vcenter">{{ surveyPageNumber }}</span>
      <span>{{ title }}</span>
    </p>
  </section>
</template>

<script>
export default {
  props: {
    surveyPageNumber: Number,
    title: String,
  },
  data() {
    return {
      videoTypes: null
    }
  }
}
</script>

<style lang="css" scoped>
</style>
