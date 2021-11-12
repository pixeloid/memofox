<template>
    <section>
      <div class="modal is-active" v-if="editModal">
        <div class="modal-background"></div>
          <div class="modal-card">
            <div class="modal-card-head">
              <p class="modal-card-title">GYIK szerkesztése</p>
              <button class="button is-light is-small" @click="$parent.editModal=!$parent.editModal">
                <span class="material-icons">close</span>
              </button>
            </div>
            <section class="modal-card-body">
              <div class="columns">
                <div class="column is-10">
                  <div class="field">
                    <label class="label">Kérdés</label>
                    <div class="control">
                      <input class="input" type="text" v-model="editData.data.question" placeholder="Írd be a kérdést!">
                    </div>
                  </div>
                </div>
                <div class="column is-2">
                  <div class="field">
                    <label class="label">Sort</label>
                    <div class="control">
                      <input class="input" type="number" v-model="editData.data.sortable">
                    </div>
                  </div>
                </div>
              </div>

              <div class="field">
                <label class="label">Válasz</label>
                <div class="control">
                  <editor class="editor" v-model="editData.data.answer" placeholder="Desc" />
                </div>
              </div>

            </section>
            <div class="modal-card-foot">
              <button class="button is-success" v-bind:class="{'is-loading': isLoad}" @click="updateData">Frissítés</button>
              <button class="button" @click="$parent.editModal=!$parent.editModal">Mégsem</button>
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
    editModal: Boolean,
    editData: Object,
  },
  data () {
    return {
      editor: null,
      isLoad: false,
    }
  },
  methods: {
    updateData () {
      this.isLoad = true
      var editID = this.editData.id

      var washingtonRef = db.collection('faq').doc(editID)
      if (this.editData.data.answer == '<p></p>') {
        this.editData.data.answer = ''
      }
      return washingtonRef.update(this.editData.data)
        .then(() => {
          this.$parent.watcher()
          this.isLoad = false
          this.$parent.editModal = false
          console.log('Document successfully updated!')
        })
        .catch((error) => {
          this.isLoad = false
          console.error('Error updating document: ', error)
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
