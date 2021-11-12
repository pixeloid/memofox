<template>
  <div class="pl-4 pr-4">
    <div class="container">
      <div class="title-with-function">
        <h2 class="title is-2">Gyakori kérdések</h2>
        <div>
          <button class="button is-primary" @click="addModal=!addModal">
            <span class="icon material-icons">add</span>
            <span>Kérdés létrehozása</span>
          </button>
        </div>
      </div>

      <div class="box">
        <div class="">
          <div class="title-with-function mb-5">
            <h2 class="title is-4">Kérdések</h2>
          </div>

          <div class="" v-if="faqs.length">
            <table class="table is-action">
              <thead>
                <tr>
                  <th></th>
                  <th>Kérdés</th>
                  <th>Válasz</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

              <!-- ITEMS -->
                <tr v-for="faq in faqs">
                  <td><strong>{{ faq.data().sortable }}</strong></td>
                  <td><strong>{{ faq.data().question }}</strong></td>
                  <td>{{ faq.data().answer }}</td>
                  <td>
                    <div class="has-text-right table-functions">
                      <button class="button is-info mr-2" @click="updateData(faq)">
                        <span class="material-icons-outlined">
                          edit
                        </span>
                      </button>
                      <button class="button is-danger" v-bind:class="{'is-loading': isLoad}" @click="deleteData(faq)">
                        <span class="material-icons-outlined">
                          delete_outline
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              <!-- ITEMS -->

              </tbody>
            </table>
          </div>
          <div v-else>
            <p>Még nincsenek elemek.</p>
          </div>

        </div>

      </div>

      <NewFaqModal
        v-bind:addModal="addModal" />
      <EditFaqModal
        v-bind:editModal="editModal"
        v-bind:editData="editData" />
    </div>
  </div>
</template>

<script>
import NewFaqModal from './components/NewFaqModal'
import EditFaqModal from './components/EditFaqModal'

import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  components: {
    NewFaqModal, EditFaqModal
  },
  name: 'FAQ',
  props: {
    msg: String
  },
  data () {
    return {
      addModal: false,
      editModal: false,
      isLoad: false,
      faqs: [],
      editData: {
        id: null,
        data: null
      }
    }
  },
  methods: {
    reset () {
      Object.assign(this.$data, this.$options.data.apply(this))
    },
    watcher () {
      this.faqs = []
      this.editData.id = null
      this.editData.data = null

      this.getData()
    },
    getData () {
      try {
        db.collection('faq').orderBy('sortable', 'asc').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.faqs.push(doc)
          })
        })
      } catch (err) {
        console.log(err)
      }
    },
    updateData (x) {
      this.editData.id = x.id
      this.editData.data = x.data()
      this.editModal = true
    },
    deleteData (x) {
      this.isLoad = true
      if (confirm('Bizotsan törlöd ezt a tételt? ' + x.data().question)) {
        db.collection('faq').doc(x.id).delete().then(() => {
          this.isLoad = false
          this.watcher()
          // this.faqs.splice(this.index,1)
          console.log('Document successfully deleted!')
        }).catch((error) => {
          this.isLoad = false
          console.error('Error removing document: ', error)
        })
      } else {
        this.isLoad = false
      }
    }
  },
  created () {
    this.getData()
  }

}
</script>
