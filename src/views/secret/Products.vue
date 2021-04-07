<template>
  <div class="pl-4 pr-4">
    <div class="container">
      <div class="title-with-function">
        <h2 class="title">Termékek kezelése</h2>

        <div>
          <button class="button is-secondary" @click="addModal=!addModal">
            <span class="icon material-icons">add</span>
            <span>Termék hozzáadása</span>
          </button>
        </div>
      </div>

      <h2 class="subtitle">Basic CRUD (create/read/update/delete) in Firebase and Vue</h2>

      <div class="container-fluid content-wrapper">
        <div class="" v-if="products.length">
          <table class="table is-action">
            <thead>
              <tr>
                <th>Termék neve</th>
                <th>Kategória</th>
                <th>Ár</th>
                <th> <input type="text" class="input"
                 placeholder="Filter by department or employee"
                 v-model="filter" />
               </th>
              </tr>
            </thead>
            <tbody>

            <!-- ITEMS -->
              <tr v-for="product in filteredRows">
                <td>{{ product.data().name }}</td>
                <td>{{ getCategoryName(product.data().category) }}</td>
                <td>{{ product.data().price }}</td>
                <td>
                  <div class="has-text-right table-functions">
                    <button class="button is-info mr-2" @click="editProduct(product)">
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
                <label class="label">Kategória</label>
                <div class="control">
                  <div class="select">
                    <select v-model="product.category">
                      <option value="" selected>Válassz kategóriát</option>
                      <option v-for="(option, i) in categories" :key="i" v-if="categories.length" v-bind:value="option.id">
                        {{ option.data().name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Termék ára</label>
                <div class="control">
                  <input class="input" type="text" v-model="product.price" placeholder="Price">
                </div>
              </div>
            </section>
            <div class="modal-card-foot">
              <button class="button is-success" v-bind:class="{'is-loading': isLoad}" @click="addData">Mentés</button>
              <button class="button" @click="addModal=!addModal">Mégsem</button>
            </div>

        </div>
      </div>

      <!-- Item editing modal -->
      <div class="modal is-active" v-if="editModal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <div class="modal-card-head">
            <h2 class="modal-card-title">Edit</h2>
            <button class="button is-light is-small" @click="editModal=!editModal">
              <span class="material-icons">close</span>
            </button>
          </div>

            <section class="modal-card-body">
              <div class="field">
                <label class="label">Termék neve</label>
                <div class="control">
                  <input class="input" type="text" v-model="edit.product.name" placeholder="Product name">
                </div>
              </div>
              <div class="field">
                <label class="label">Kategória</label>
                <div class="control">
                  <div class="select">
                    <select v-model="edit.product.category">
                      <option v-for="(option, i) in categories" :key="i" v-if="categories.length" v-bind:value="option.id">
                        {{ option.data().name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Termék ára</label>
                <div class="control">
                  <input class="input" type="text" v-model="edit.product.price" placeholder="Price">
                </div>
              </div>
            </section>
            <div class="modal-card-foot">
              <button class="button is-success" v-bind:class="{'is-loading': isLoad}" @click="updateProduct">Mentés</button>
              <button class="button" @click="editModal=!editModal">Cancel</button>
            </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  name: 'Products',
  props: {
    msg: String
  },
  data() {
    return {
      filter: '',
      addModal: false,
      editModal: false,
      index: 0,
      isLoad: false,
      products: [],
      categories: [],
      product: {
        name: null,
        category: null,
        price: null
      },
      edit: {
        id: null,
        product: {
          name: null,
          category: null,
          price: null
        }
      }
    }
  },
  methods: {
    highlightMatches(text) {
      const matchExists = text
        .toLowerCase()
        .includes(this.filter.toLowerCase())
      if (!matchExists) return text

      const re = new RegExp(this.filter, "ig")
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`)
    },
    getCategoryName(id) {
      var filtered = this.categories.find(el => el.id === id);
      if(filtered) {
        return filtered.data().name
      } else {
        return 'undefined'
      }

    },
    watcher() {
      db.collection("products").orderBy('name').onSnapshot((querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
            this.products.push(doc);
        });
      });

    },
    addData() {
      try {
        db.collection("products").add(this.product)
        console.log("ok")
        this.watcher()
        this.product.name = null
        this.product.category = null
        this.product.price = null
      } catch(err) {
        console.error("Error adding document: ", err)
      }
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this))
    },
    getData(data) {
      try {
        db.collection(data).orderBy('name', 'asc').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc)
          })
        })
      } catch(err) {
        console.log(err)
      }
    },
    deleteProduct(product) {
      this.isLoad = true
      if(confirm('Bizotsan törlöd ezt a terméket? '+product.data().name)) {
        db.collection("products").doc(product.id).delete().then(() => {
          this.isLoad = false
          this.watcher()
          //this.products.splice(this.index,1)
          console.log("Document successfully deleted!");
        }).catch((error) => {
          this.isLoad = false
          console.error("Error removing document: ", error);
        });
      } else {
        this.isLoad = false
      }
    },
    editProduct(product) {
      this.editModal = true
      this.edit.id = product.id
      this.edit.product = product.data()
    },
    updateProduct(){
      this.isLoad = true
      var washingtonRef = db.collection("products").doc(this.edit.id);
      return washingtonRef.update(this.edit.product)
      .then(() => {
        //this.reset()
        //this.getData('products')
        this.watcher()
        this.isLoad = false
        this.editModal = false
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        this.isLoad = false
        console.error("Error updating document: ", error);
      });
    }
  },
  created() {
    console.log(this.filteredRows)
    try {
      db.collection('category').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.categories.push(doc)
        })
      })
    } catch(err) {
      console.log(err)
    }
    this.getData("products")
  },
  computed: {
    filteredRows() {

      return this.products.filter(product => {
        const name = product.data().name.toString().toLowerCase()
        const category = this.getCategoryName(product.data().category).toLowerCase()
        const price = product.data().price.toString().toLowerCase()
        const searchTerm = this.filter.toLowerCase()

        return (
          price.includes(searchTerm) || category.includes(searchTerm) || name.includes(searchTerm)
        )
      })
    }
  }
}
</script>
