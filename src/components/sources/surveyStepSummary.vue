<template>
  <article class="">
    <p class="panel-heading vcenter title is-6 m-0 p-6">
      <span class="order-sort-numb hcenter vcenter">{{ surveyPageNumber }}</span>
      <span>{{ title }}</span>
    </p>
    <div class="panel-block p-6">

      regisztralt email cim: {{ $parent.selectedItems.videoUser.emailAddress }}

    </div>


    <div class="survey-buttons has-text-right vcenter p-6">
      <div class="button-container has-text-left">
        <button type="button" class="button is-primary is-outline" @click="$parent.backStep">
          <span class="material-icons-round">fast_rewind</span>
        </button>
      </div>
      <span class="is-size-6"><strong> {{ surveyPageNumber }} / {{ $parent.maximumStep }} </strong></span>

      <div class="button-container has-text-right">
        <button type="button" class="button is-primary">
          <span>Rendelés leadása</span>
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
}
</script>

<style lang="css" scoped>
</style>
