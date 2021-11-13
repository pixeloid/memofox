<template>
    <section>
      <div class="modal is-active" v-if="addModal">
        <div class="modal-background"></div>
          <div class="modal-card">
            <div class="modal-card-head">
              <p class="modal-card-title">Add product</p>
              <button class="button is-light is-small" @click="$parent.addModal=!$parent.addModal">
                <span class="material-icons">close</span>
              </button>
            </div>
            <section class="modal-card-body">
              <div class="columns">
                <div class="column">
                  <div class="field">
                    <label class="label">Tétel neve</label>
                    <div class="control">
                      <input class="input" type="text" v-model="product.name" placeholder="Product name">
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <label class="label">Tétel ára</label>
                    <div class="control">
                      <input class="input" type="text" v-model="product.price" placeholder="Product name">
                    </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <div class="field">
                    <label class="label">Kategória</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select v-model="product.category">
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
                        <select v-model="product.type">
                          <option value="">Kerlek valassz egyet!</option>
                          <option :value="item.type"
                            v-for="item in productTypes">
                            {{item.type}}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <label class="label">Tétel súlyozás</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select v-model="product.rate">
                          <option value="">Válassz egyet</option>
                          <option :value="item"
                            v-for="item in productRate">
                            {{item}}
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
                  <editor class="editor" v-model="product.desc" placeholder="Desc" />
                </div>
              </div>

            </section>
            <div class="modal-card-foot">
              <button class="button is-success" v-bind:class="{'is-loading': isLoad}" @click="addData">Mentés</button>
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
    productTypes: Array,
    categories: Array
  },
  data () {
    return {
      productRate: ['1', '2', '3', '4', '5','6','7','8','9'],
      editor: null,
      isLoad: false,
      product: {
        name: null,
        category: null,
        type: null,
        desc: null,
        price: null,
        rate: null
      },
    }
  },
  methods: {
    addData () {

      if (this.product.desc == '<p></p>') {
        this.product.desc = ''
      }

      try {
        db.collection('products').add(this.product)
        this.$parent.watcher()
        this.product.name = null
        this.product.category = null
        this.product.type = null
        this.product.desc = null
        this.product.price = null
        this.product.rate = null
      } catch (err) {
        console.error('Error adding document: ', err)
      }
    },
  }
}
</script>

<style lang="css" scoped>
</style>
