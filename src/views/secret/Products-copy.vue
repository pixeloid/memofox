<template>
  <section class="section mt-4">
    <div class="container">
      <h1 class="title">Termekek</h1>
      <h2 class="title">Step by step</h2>

      <div class="select is-medium">
        <select v-model="selected.videoTypes">
          <option value="">Kerlek valassz egyet!</option>
          <option :value="item.name"
            v-for="item in videoTypes">
            {{item.name}}
          </option>
        </select>
      </div>

      <div class="select is-medium">
        <select v-model="selected.scopeTypes">
          <option value="">Kerlek valassz egyet!</option>
          <option :value="item.name"
            v-for="item in scopeTypes">
            {{item.name}}
          </option>
        </select>
      </div>

      <div class="select is-medium">
        <select v-model="selected.cameraTypes">
          <option value="">Kerlek valassz egyet!</option>
          <option :value="item.name"
            v-for="item in cameraTypes">
            {{item.name}}
          </option>
        </select>
      </div>

      <div class="select is-medium">
        <select v-model="selected.style">
          <option value="">Kerlek valassz egyet!</option>
          <option :value="item.name"
            v-for="item in videoStyles">
            {{item.name}}
          </option>
        </select>
      </div>

      <div class="select is-medium">
        <select v-model="selected.length">
          <option value="">Kerlek valassz egyet!</option>
          <option :value="item.name"
            v-for="item in videoEditLengths">
            {{item.name}}
          </option>
        </select>
      </div>

      <div class="select is-medium">
        <select v-model="selected.amount">
          <option value="">Kerlek valassz egyet!</option>
          <option :value="item.name"
            v-for="item in videoAmounts">
            {{item.name}}
          </option>
        </select>
      </div>

      <div class="columns">
        <div class="column">

          <p>Vegosszeg: {{price}}</p>

          <button type="button" class="button" name="button" @click="showPrice">frissites</button>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      videoTypes: [],
      scopeTypes: [],
      cameraTypes: [],
      videoStyles: [],
      videoEditLengths: [],
      videoAmounts: [],

      selected: {
        videoTypes: '',
        scopeTypes: '',
        cameraTypes: '',
        length: '',
        style: '',
        amount: ''
      },

      price: ''

    }
  },
  methods: {
    showPrice() {
      const productVariant = this.selected.amount + ' / ' + this.selected.length + ' / ' + this.selected.style
      const str = this.products.filter((product) => {
        return product.name.includes(productVariant)
      })

      if(str != 0){
        this.price = str[0].price + '$'
        //console.log(this.selected)
      } else {
        console.log('find not found')
      }

    }
  },
  mounted() {
    // products
    fetch("http://localhost:1337/products").then(
      (res) => res.json()
    ).then((data) => {
      this.products = data
    })
    // videoTypes
    fetch("http://localhost:1337/video-types").then(
      (res) => res.json()
    ).then((data) => {
      this.videoTypes = data
    })
    // scopeTypes
    fetch("http://localhost:1337/scope-types").then(
      (res) => res.json()
    ).then((data) => {
      this.scopeTypes = data
    })
    // scopeTypes
    fetch("http://localhost:1337/camera-types").then(
      (res) => res.json()
    ).then((data) => {
      this.cameraTypes = data
    })
    // videoStyles
    fetch("http://localhost:1337/video-styles").then(
      (res) => res.json()
    ).then((data) => {
      this.videoStyles = data
    })
    // videoEditLengths
    fetch("http://localhost:1337/video-edit-lengths").then(
      (res) => res.json()
    ).then((data) => {
      this.videoEditLengths = data
    })
    // videoAmounts
    fetch("http://localhost:1337/video-amounts").then(
      (res) => res.json()
    ).then((data) => {
      this.videoAmounts = data
    })
  }
}
</script>
