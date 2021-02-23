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
                <th>Sorrend</th>
                <th>Termék megnevezése</th>
                <th>Termék ára</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

            <!-- ITEMS -->
              <tr v-for="(e, i) in products" :key="i" v-if="products.length">
                <td>{{e.data().sort}}</td>
                <td>{{e.data().name}}</td>
                <td>{{e.data().price}}</td>
                <td>
                  <div class="has-text-right table-functions">
                    <button class="button is-small" @click="editProduct(e, i)">
                      <span class="icon material-icons">edit</span>
                    </button>
                    <button class="button is-small is-danger" v-bind:class="{'is-loading': isLoad}" @click="deleteProduct(e, i)">
                      <span class="icon material-icons">delete</span>
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
                <label class="label">Sorrend</label>
                <div class="control">
                  <input class="input" type="text" v-model="product.sort" placeholder="Product sort">
                </div>
              </div>
              <div class="field">
                <label class="label">Product name</label>
                <div class="control">
                  <input class="input" type="text" v-model="product.name" placeholder="Product name">
                </div>
              </div>
              <div class="field">
                <label class="label">Price</label>
                <div class="control">
                  <input class="input" type="text" v-model="product.price" placeholder="Price">
                </div>
              </div>
            </section>
            <div class="modal-card-foot">
              <button class="button is-success" v-bind:class="{'is-loading': isLoad}"   @click="addData">Add Element</button>
              <button class="button" @click="addModal=!addModal">Cancel</button>
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
                <label class="label">Sorrend</label>
                <div class="control">
                  <input class="input" type="text" v-model="edit.product.sort" placeholder="Product sort">
                </div>
              </div>
              <div class="field">
                <label class="label">Product name</label>
                <div class="control">
                  <input class="input" type="text" v-model="edit.product.name" placeholder="Product name">
                </div>
              </div>
              <div class="field">
                <label class="label">Price</label>
                <div class="control">
                  <input class="input" type="text" v-model="edit.product.price" placeholder="Price">
                </div>
              </div>
            </section>
            <div class="modal-card-foot">
              <button class="button is-success" v-bind:class="{'is-loading': isLoad}" @click="updateProduct">Update</button>
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
      addModal: false,
      editModal: false,
      index: 0,
      isLoad: false,
      products: [],
      product: {
        name: null,
        price: null,
        sort: null
      },
      edit: {
        id: null,
        product: {
          name: null,
          price: null,
          sort: null
        }
      }
    }
  },
  methods: {
    watcher() {
      db.collection("products").orderBy('sort').onSnapshot((querySnapshot) => {
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
        this.product.price = null
        this.product.sort = null
      } catch(err) {
        onsole.error("Error adding document: ", err)
      }
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this))
    },
    getData(data) {
      try {
        db.collection(data).orderBy('sort').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc)
          })
        })
      } catch(err) {
        console.log(err)
      }
    },
    deleteProduct(product, i) {
      this.isLoad = true
      this.index = i
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
    editProduct(product, i) {
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
    this.getData("products")
  }
}
</script>
