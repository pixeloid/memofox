<template>
  <div class="pl-4 pr-4">
    <div class="container">
      <div class="title-with-function">
        <h2 class="title is-2">Bolt</h2>
        <div>
          <button class="button is-secondary mr-4" @click="addModal=!addModal">
            <span class="icon material-icons">add</span>
            <span>Típus létrehozása</span>
          </button>
          <button class="button is-primary" @click="addModal=!addModal">
            <span class="icon material-icons">add</span>
            <span>Tétel létrehozása</span>
          </button>
        </div>
      </div>

      <div class="box">
        <div>
          <div class="title-with-function mb-5">
            <h2 class="title is-4">Típusok</h2>
          </div>
          <div>
            <span class="tag is-large">Medium</span>
          </div>
        </div>

        <hr>

        <div class="">
          <div class="title-with-function mb-6">
            <h2 class="title is-4">Tételek</h2>
          </div>

          <ul>
            <li v-for="(variant, i) in variants">
              <input type="text" v-model="variant.title">
              <input type="text" v-model="variant.label">
              <button @click="addElement(i, variant)">Add element</button>

              <span v-for="(label) in variant.labels">- {{ label }} -</span>



              <button @click="deleteRow(i)">Delete</button>
            </li>
          </ul>

          <button @click="addRow">Add row</button>
          <button @click="differentVariants">Variánsok összesítése</button>



          <ul>
            <li v-for="(variant, i) in variantsOutput">
              {{ variant }}, <input type="text" placeholder="ár">
            </li>
          </ul>




          <div class="" v-if="products.length">
            <table class="table is-action">
              <thead>
                <tr>
                  <th width='30%'>Tétel neve</th>
                  <th>Tétel típusa</th>
                  <th>Leírás</th>
                  <th>Ár</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

              <!-- ITEMS -->
                <tr v-for="product in products">
                  <td>{{ product.data().name }}</td>
                  <td></td>
                  <td>{{ product.data().desc }}</td>
                  <td></td>
                  <td>
                    <div class="has-text-right table-functions">
                      <button class="button is-danger" v-bind:class="{'is-loading': isLoad}" @click="deleteProduct(product)">
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
            <p>Még nincsenek termékek.</p>
          </div>

        </div>

      </div>

      <!-- Item adding modal -->
      <div class="modal is-active" v-if="addModal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <div class="modal-card-head">
            <p class="modal-card-title">Add product</p>
            <button class="button is-light is-small" @click="addModal=!addModal">
              <span class="material-icons">close</span>
            </button>
          </div>

            <section class="modal-card-body">
              <div class="field">
                <label class="label">Termék neve</label>
                <div class="control">
                  <input class="input" type="text" v-model="product.name" placeholder="Product name">
                </div>
              </div>
              <div class="field">
                <label class="label">Termék leírása</label>
                <div class="control">
                  <textarea class="textarea" v-model="product.desc" placeholder="Desc"></textarea>
                </div>
              </div>
            </section>
            <div class="modal-card-foot">
              <button class="button is-success" v-bind:class="{'is-loading': isLoad}" @click="addData">Mentés</button>
              <button class="button" @click="addModal=!addModal">Mégsem</button>
            </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Editor from './components/editor'

import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  components: {
    Editor
  },
  name: 'Products',
  props: {
    msg: String
  },
  data () {
    return {
      variants:[],
      variantsOutput: {

      },
      editor: null,
      filter: '',
      addModal: false,
      isLoad: false,
      products: [],
      product: {
        name: null,
        desc: null,
        price: null
      },
    }
  },
  methods: {
    addRow() {
      this.variants.push({
        title: '',
        label: '',
        labels: []
      })

    },
    modifier(data) {
        return data.map(a => a.labels.map(b => b.title))
    },
    reducer(data) {
      return data.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), [])).map(i => i.join(' '))
    },
    differentVariants() {
      if(this.variants.length > 0) {
        var output = this.reducer(this.modifier(this.variants))
        this.variantsOutput = output
      }
    },
    addElement(i, value) {
      this.variants.forEach((data, index) => {
        if(i == index) {
          data.labels.push({title: data.label})
          data.label = ''
        }
      })
      //console.log(this.variants)
    },
    deleteRow(index) {
      this.variants.splice(index,1)
    },
    watcher () {
      db.collection('products').orderBy('name').onSnapshot((querySnapshot) => {
        this.products = []
        querySnapshot.forEach((doc) => {
          this.products.push(doc)
        })
      })
    },
    addData () {

      if (this.product.desc == '<p></p>') {
        this.product.desc = ''
      }

      try {
        db.collection('products').add(this.product)
        console.log('ok')
        this.watcher()
        this.product.name = null
        this.product.desc = null
        this.product.price = null
      } catch (err) {
        console.error('Error adding document: ', err)
      }
    },
    reset () {
      Object.assign(this.$data, this.$options.data.apply(this))
    },
    getData (data) {
      try {
        db.collection(data).orderBy('name', 'asc').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc)
          })
        })
      } catch (err) {
        console.log(err)
      }
    },
    deleteProduct (product) {
      this.isLoad = true
      if (confirm('Bizotsan törlöd ezt a terméket? ' + product.data().name)) {
        db.collection('products').doc(product.id).delete().then(() => {
          this.isLoad = false
          this.watcher()
          // this.products.splice(this.index,1)
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
    this.getData('products')
  }

}
</script>
