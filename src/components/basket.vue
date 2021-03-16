<template>

    <a class="basket-button navbar-item" v-bind:class="{'is-active': showBasket}" @click="showBasket=!showBasket">
      <span class="icon">
        <img src="../assets/svg/icon-shopping-bag.svg" />
      </span>
      <span class="">
        <span v-if="basketItemNumber != 0">{{ basketItemNumber }}</span>
      </span>
    </a>

    <div class="basket-wrapper" v-if="showBasket" :style="{ height: basket.height+'px' }">
      <div class="basket-header">
        <div class="basket-title-wrapper">
          <div class="icon icon-basket">
            <img src="../assets/svg/icon-shopping-bag-purple.svg" alt="">
          </div>
          <div class="title-text">Kosarad</div>
        </div>
        <div class="close">
          <img src="../assets/svg/icon-close-purple.svg" alt="" @click="showBasket=!showBasket">
        </div>
      </div>
      <div class="basket-info">
        Jelenleg {{ basketItemNumber }} db elem van a kosárban.
      </div>
      <div class="basket-item-wrapper">

        <div v-for="(item, i) in items" :key="i" v-if="items.length" class="product-item">
          <div class="l-item-name">
            <div class="item-icon">
              <img src="../assets/svg/icon-play-dark.svg" alt="">
            </div>
            <div class="item-product">
              <div class="item-category">
                {{item.category}}
              </div>
              <div class="item-name">
                {{item.name}}
              </div>
            </div>
          </div>
          <div class="r-item-functions">
            <div class="item-price">
              {{item.price}}
            </div>
            <div class="item-function">
              <div v-if="item.pieces < 2" class="item-delete">
                <img src="../assets/svg/icon-delete-red.svg" alt="">
              </div>
              <div v-else class="item-down" v-on:click="item.pieces--" @click="updateBasketItemNumber(item.pieces, 'down')">
                <img src="../assets/svg/icon-subtrack-dark.svg" alt="">
              </div>
              <div class="item-number">
                {{item.pieces}}
              </div>
              <div class="item-add" v-on:click="item.pieces++" @click="updateBasketItemNumber(item.pieces, 'up')">
                <img src="../assets/svg/icon-add-dark.svg" alt="">
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      showBasket: false,
      basketItemNumber: 0,
      items: [
        {
          category: 'Memofox Videó',
          name: '20Gb / 3 to 6 Mins / Cinematic Styling',
          price: '46.319 Ft',
          pieces: 0
        },
        {
          category: 'Memofox Videó',
          name: '80Gb / 0 to 3 Mins / Epic Styling',
          price: '46.319 Ft',
          pieces: 0
        }
      ],
      basket: {
        height: 0,
        windowHeight: 0,
        height: 0,
        mobileSize: '768',
        position: 0,
      },
      product: null
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
  },
  mounted() {
    this.calculateBasketHeight()
  },
  methods: {
    updateBasketItemNumber(numb, mode) {
      if(mode=='up'){
        this.basketItemNumber++
      } else {
        this.basketItemNumber--
      }
    },
    handleResize: _.throttle(function() {
      this.calculateBasketHeight()
    }, 100),

    calculateBasketHeight() {
      this.basket.height = window.innerHeight - "140"
    }
  }

}
</script>

<style lang="css" scoped>
</style>
