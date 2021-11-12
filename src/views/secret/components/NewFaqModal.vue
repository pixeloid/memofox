<template>
  <section>
    <div class="modal is-active" v-if="addModal">
      <div class="modal-background"></div>
        <div class="modal-card">
          <div class="modal-card-head">
            <p class="modal-card-title">GYIK létrehozása</p>
            <button class="button is-light is-small" @click="$parent.addModal=!$parent.addModal">
              <span class="material-icons">close</span>
            </button>
          </div>
          <section class="modal-card-body">
            <div class="columns">
              <div class="column is-10">
                <div class="field">
                  <label class="label">Kérdés</label>
                  <div class="control">
                    <input class="input" type="text" v-model="faq.question" placeholder="Írd be a kérdést!">
                  </div>
                </div>
              </div>
              <div class="column is-2">
                <div class="field">
                  <label class="label">Sort</label>
                  <div class="control">
                    <input class="input" type="number" v-model="faq.sortable">
                  </div>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Válasz</label>
              <div class="control">
                <editor class="editor" v-model="faq.answer" placeholder="Desc" />
              </div>
            </div>

          </section>
          <div class="modal-card-foot">
            <button class="button is-success" v-bind:class="{'is-loading': isLoad}" @click="addData">Létrehozás</button>
            <button class="button" @click="$parent.addModal=!$parent.addModal">Mégsem</button>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Editor from './editor'
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  components: {
    Editor
  },
  props: {
    addModal: Boolean,
  },
  data () {
    return {
      editor: null,
      isLoad: false,
      faq: {
        sortable: Number,
        question: null,
        answer: null,
      },
    }
  },
  methods: {
    addData () {

      if (this.faq.answer == '<p></p>') {
        this.faq.answer = ''
      }

      try {
        db.collection('faq').add(this.faq)
        this.$parent.watcher()
        this.faq.sortable = Number
        this.faq.question = null
        this.faq.answer = null

      } catch (err) {
        console.error('Error adding document: ', err)
      }
    },
  }
}
</script>

<style lang="css" scoped>
</style>
