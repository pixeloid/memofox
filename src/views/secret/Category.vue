<template>
  <div class="pl-4 pr-4">
    <div class="container">
      <div class="title-with-function">
        <h2 class="title">Kategóriák kezelése</h2>

        <div>
          <button class="button is-secondary" @click="addModal=!addModal">
            <span class="icon material-icons">add</span>
            <span>Kategória hozzáadása</span>
          </button>
        </div>
      </div>
      <h2 class="subtitle">Subtitle lorem ipsum dolor sit amet</h2>

      <div class="container-fluid content-wrapper">
        <div class="" v-if="categories.length">
          <table class="table is-action">
            <thead>
              <tr>
                <th>Kategória neve</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

            <!-- ITEMS -->
              <tr v-for="(e, i) in categories" :key="i" v-if="categories.length">
                <td>{{e.data().name}}</td>
                <td>
                  <div class="has-text-right table-functions">
                    <button class="button is-info mr-2" @click="edit(e, i)">
                      <span class="material-icons-outlined">
                        edit
                      </span>
                    </button>
                    <button class="button is-danger" v-bind:class="{'is-loading': isLoad}" @click="deleteCategory(e, i)">
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
          <p>Még nincsenek elemek hozzáadva.</p>
        </div>
      </div>

      <!-- Item adding modal -->
      <div class="modal is-active" v-if="addModal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <div class="modal-card-head">
            <p class="modal-card-title">Add Category</p>
            <button class="button is-light is-small" @click="addModal=!addModal">
              <span class="material-icons">close</span>
            </button>
          </div>

            <section class="modal-card-body">
              <div class="field">
                <label class="label">Kategória neve</label>
                <div class="control">
                  <input class="input" type="text" v-model="category.name" placeholder="Kategória neve">
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
                <label class="label">Kategória neve</label>
                <div class="control">
                  <input class="input" type="text" v-model="edited.category.name" placeholder="Kategória neve">
                </div>
              </div>
            </section>
            <div class="modal-card-foot">
              <button class="button is-success" v-bind:class="{'is-loading': isLoad}" @click="update">Update</button>
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
  components: {

  },
  data() {
    return {
      addModal: false,
      editModal: false,
      index: 0,
      isLoad: false,
      categories: [],
      category: {
        name: null,
        sort: null
      },
      edited: {
        id: null,
        category: {
          name: null,
          sort: null
        }
      }
    }
  },
  methods: {
    watcher() {
      db.collection("category").onSnapshot((querySnapshot) => {
        this.categories = [];
        querySnapshot.forEach((doc) => {
            this.categories.push(doc);
        });
      });

    },
    addData() {
      try {
        db.collection("category").add(this.category)
        console.log("ok")
        this.watcher()
        this.category.name = null
      } catch(err) {
        console.error("Error adding document: ", err)
      }
    },
    getData(data) {
      try {
        db.collection(data).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.categories.push(doc)
          })
        })
      } catch(err) {
        console.log(err)
      }
    },
    deleteCategory(category, i) {
      this.isLoad = true
      this.index = i
      if(confirm('Bizotsan törlöd ezt a terméket? '+category.data().name)) {
        db.collection("category").doc(category.id).delete().then(() => {
          this.isLoad = false
          this.watcher()
          console.log("Document successfully deleted!");
        }).catch((error) => {
          this.isLoad = false
          console.error("Error removing document: ", error);
        });
      } else {
        this.isLoad = false
      }
    },
    edit(category, i) {
      this.editModal = true
      this.edited.id = category.id
      this.edited.category = category.data()
    },
    update(){
      this.isLoad = true
      var washingtonRef = db.collection("category").doc(this.edited.id);
      return washingtonRef.update(this.edited.category)
      .then(() => {
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
    this.getData("category")
  }
}
</script>

<style lang="scss">
</style>
