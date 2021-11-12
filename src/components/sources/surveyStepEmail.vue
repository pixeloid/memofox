<template>
    <article>
      <p class="panel-heading vcenter title is-6 m-0 p-6">
        <span class="order-sort-numb hcenter vcenter">{{ surveyPageNumber }}</span>
        <span>{{ title }}</span>
      </p>
      <div class="panel-block p-6">

        <div class="columns is-multiline item-wrapper is-fullwidth is-0">
          <div class="column is-full mb-4 p-0">
            <div class="content">
              <p class="is-size-5">A megfelelő kommunikációhoz, az alábbi adatokra van szükségünk.</p>
            </div>
          </div>
          <div class="column is-6 p-4 has-background-white-bis">
            <div class="field">
              <label for="name" class="label">Hogyan szólíthatunk?</label>
              <div class="control">
                <input id="name" class="input is-medium" v-model='$parent.selectedItems.videoUser.name' type="text" placeholder="pl. alex">
              </div>
            </div>
          </div>
          <div class="column is-6 p-4 has-background-white-bis">
            <div class="field">
              <label for="email" class="label">Add meg az e-mail címed!</label>
              <div class="control">
                <input id="email" class="input is-medium" v-model='$parent.selectedItems.videoUser.emailAddress' type="email" placeholder="pl. alex@pelda.com">
              </div>
            </div>
          </div>

          <div v-if='emailValidationBlock' class="column is-12 p-4 has-background-white-bis">
            <article class="message is-danger mb-4">
              <div class="message-body p-2">
                {{ message }}
              </div>
            </article>
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
          <button v-if="$parent.maximumStep != surveyPageNumber" type="button" class="button is-primary is-outline" @click="isNextStepBefore">
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
      type: this.$parent.selectedItems.videoUser,
      emailValidationBlock: false,
      message: 'Az összesítéshez add meg helyesen a fenti adatokat!',
      nextButtonText: 'Összegzés',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  created () {

  },
  methods: {
    isNextStepBefore () {
      this.emailValidationBlock = false

      if (this.reg.test(this.$parent.selectedItems.videoUser.emailAddress) && this.$parent.selectedItems.videoUser.name != '') {
        this.emailValidationBlock = false
        this.$parent.nextStep()
      } else {
        this.emailValidationBlock = true
      }

    }
  }
}
</script>
