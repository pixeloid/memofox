<template>
  <div class="pl-4 pr-4">
    <div class="container">
      <div class="title-with-function">
        <h2 class="title is-2">Bolt</h2>
        <div>
          <button class="button is-secondary mr-4">
            <span class="icon material-icons">add</span>
            <span>Tétel csomagok megtekintése</span>
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
            <span v-for="type in productTypes" class="tag is-medium mr-2"> {{ type.type }}</span>
          </div>
        </div>

        <hr>

        <div class="">
          <div class="title-with-function mb-5">
            <h2 class="title is-4">Tételek</h2>
          </div>

          <div class="" v-if="products.length">
            <table class="table is-action">
              <thead>
                <tr>
                  <th>Tétel neve</th>
                  <th>Tétel kategória</th>
                  <th>Tétel típusa</th>
                  <th>Leírás</th>
                  <th class="has-text-right">Ár</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

              <!-- ITEMS -->
                <tr v-for="product in products">
                  <td><strong>{{ product.data().name }}</strong></td>
                  <td>{{ getCategoryName(product.data().category) }}</td>
                  <td>{{ product.data().type }}</td>
                  <td>{{ product.data().desc }}</td>
                  <td class="has-text-right">{{ product.data().price }} Ft</td>
                  <td>
                    <div class="has-text-right table-functions">
                      <button class="button is-info mr-2" @click="updateProduct(product)">
                        <span class="material-icons-outlined">
                          edit
                        </span>
                      </button>
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

      <NewProductModal
        v-bind:addModal="addModal"
        v-bind:categories="categories"
        v-bind:productTypes="productTypes"  />
      <EditProductModal
        v-bind:editModal="editModal"
        v-bind:productTypes="productTypes"
        v-bind:categories="categories"
        v-bind:editProduct="editProduct" />
    </div>
  </div>
</template>

<script>
import NewProductModal from './components/NewProductModal'
import EditProductModal from './components/EditProductModal'

import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  components: {
    NewProductModal, EditProductModal
  },
  name: 'Products',
  props: {
    msg: String
  },
  data () {
    return {
      productTypes: [{
        type: "Szolgáltatás"
      },{
        type: "Termék"
      }],
      addModal: false,
      editModal: false,
      isLoad: false,
      products: [],
      categories: [],
      editProduct: {
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
      this.products = []
      this.editProduct.id = null
      this.editProduct.data = null

      this.getProducts()

    },
    getProducts() {
      try {
        db.collection('products').orderBy('name', 'asc').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc)
          })
        })
      } catch (err) {
        console.log(err)
      }
    },
    getCategoryName (id) {
      var filtered = this.categories.find(el => el.id === id)
      if (filtered) {
        return filtered.data().name
      } else {
        return 'undefined'
      }
    },
    updateProduct(product) {
      this.editProduct.id = product.id
      this.editProduct.data = product.data()
      this.editModal = true;
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
    try {
      db.collection('category').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.categories.push(doc)
        })
      })
    } catch (err) {
      console.log(err)
    }
    this.getProducts()
  }

}
</script>
