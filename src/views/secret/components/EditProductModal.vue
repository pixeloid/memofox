<template>
    <section>
      <div class="modal is-active" v-if="editModal">
        <div class="modal-background"></div>
          <div class="modal-card">
            <div class="modal-card-head">
              <p class="modal-card-title">Termék szerkesztése</p>
              <button class="button is-light is-small" @click="$parent.editModal=!$parent.editModal">
                <span class="material-icons">close</span>
              </button>
            </div>
            <section class="modal-card-body">
              <div class="field">
                <label class="label">Tétel neve</label>
                <div class="control">
                  <input class="input" type="text" v-model="editProduct.data.name" placeholder="Product name">
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="field">
                    <label class="label">Kategória</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select v-model="editProduct.data.category">
                          <option value="">Válassz egy kategóriát!</option>
                          <option v-for="(option, i) in categories" :key="i" v-if="categories.length" v-bind:value="option.id">
                            {{ option.data().name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <label class="label">Tétel típusa</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select v-model="editProduct.data.type">
                          <option value="">Válassz ki a tétel típusát!</option>
                          <option :value="item.type"
                            v-for="item in productTypes">
                            {{item.type}}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Tétel leírása</label>
                <div class="control">
                  <textarea class="textarea" v-model="editProduct.data.desc" placeholder="Desc"></textarea>
                </div>
              </div>
              <div class="field">
                <label class="label">Tétel ára</label>
                <div class="control">
                  <input class="input" type="text" v-model="editProduct.data.price" placeholder="Product name">
                </div>
              </div>
            </section>
            <div class="modal-card-foot">
              <button class="button is-success" v-bind:class="{'is-loading': isLoad}" @click="updateProduct">Frissítés</button>
              <button class="button" @click="$parent.editModal=!$parent.editModal">Mégsem</button>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  props: {
    editModal: Boolean,
    productTypes: Array,
    editProduct: Object,
    categories: Array
  },
  data () {
    return {
      isLoad: false,
      product: {
        name: null,
        type: null,
        desc: null,
        price: null
      },
    }
  },
  methods: {
    updateProduct () {
      this.isLoad = true
      var editID = this.editProduct.id
      var editProduct = this.editProduct.data

      var washingtonRef = db.collection('products').doc(editID)
      if (this.editProduct.data.desc == '<p></p>') {
        this.editProduct.data.desc = ''
      }
      return washingtonRef.update(this.editProduct.data)
        .then(() => {
        // this.reset()
        // this.getData('products')
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
  },
  created () {
    //console.log(this.editProduct);
  }
}
</script>

<style lang="css" scoped>
</style>
