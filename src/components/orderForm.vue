<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8 is-offset-2">

        <div class="content-on-hero pt-6">
          <div class="columns is-centered">
            <div class="column">
              <h2 class="title is-secondary has-text-centered">
                Az igénylőlap kitöltése után kiszámítjuk<br/>Neked az egyéni árat.
              </h2>

              <div class="order-form">
                <div class="mb-4">

                  <p class="title is-tertiary vcenter">
                    <span class="order-sort-numb hcenter vcenter">{{ orderPageNumber + 1 }}</span>
                    <span>{{ itemWrapper[orderPageNumber].title }}</span>
                  </p>

                  <hr class="simple" />

                  <div v-if="itemWrapper[orderPageNumber].amount">
                    <div class="">
                      Slider
                    </div>
                  </div>

                  <div class="" v-else-if="itemWrapper[orderPageNumber].last">
                    <form class="form">
                      <div v-for='(item, i) in itemWrapper[orderPageNumber].items' :key='i'>
                        <p class="pb-4">{{item.name}}</p>
                        <div class="field">
                          <div class="control is-medium">
                            <input class="input is-medium" type="email" required v-model="emailAddress" placeholder="Add meg az e-mail címed!">
                          </div>
                        </div>
                      </div>

                      <div class="columns order-buttons">
                        <div class="column vcenter">
                          <button v-if="backButton" type="button" class="button is-secondary is-outline" @click="backStep">
                            <span class="material-icons-round">fast_rewind</span>
                          </button>
                        </div>
                        <div class="column has-text-right">
                          <button type="button" class="button is-secondary" @click="lastStep">
                            <span>A végösszeg kiszámítása</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="" v-else>
                    <div class="columns is-multiline is-variable is-1 item-wrapper">
                      <div v-for='(item, i) in itemWrapper[orderPageNumber].items' :key='i' class="column" v-bind:class="{'is-half': !itemWrapper[orderPageNumber].amount,'is-one-fifth': itemWrapper[orderPageNumber].amount }">
                        <div class="item-box vcenter" @click="itemClick(i)" v-bind:class="{'is-active': item.active, 'is-info': item.info}">
                          <div v-if="item.info && item.info.highlight" class="item-highlight">
                            {{ item.info.message }}
                          </div>
                          <span class="item-image" v-if="!item.info">
                            <img :src="item.image" />
                          </span>
                          <p class="name hcenter">
                            {{ item.name }}
                          </p>
                          <ul v-if="item.info" class="item-info" v-bind:class="{'is-epic': item.info && !item.info.highlight}">
                            <li class="hcenter" v-for="(d, index) in item.info.desc" :key="index">
                              {{ d }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="columns order-buttons">
                      <div class="column vcenter">
                        <button v-if="backButton" type="button" class="button is-secondary is-outline" @click="backStep">
                          <span class="material-icons-round">fast_rewind</span>
                        </button>
                      </div>
                      <div class="column has-text-right">
                        <button type="button" class="button is-secondary" @click="nextStep">
                          <span>Következő</span>
                          <span class="icon material-icons-round">fast_forward</span>
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { orderForm } from '../orderform.js'

export default {
  components: {

  },
  data: function () {
    return {
      slideData: [],
      orderPageNumber: 0,
      backButton: false,
      selectedItems: [],
      emailAddress: null,
      itemWrapper: orderForm,
      // email validation
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods: {
    nextStep () {
      const actualPage = this.orderPageNumber + 1
      if (actualPage < this.itemWrapper.length) {
        this.orderPageNumber += 1
      } else {
        console.log('nincs tobb')
      }

      if (this.orderPageNumber > 0) {
        this.backButton = true
      } else {
        this.backButton = false
      }
    },
    backStep () {
      this.orderPageNumber -= 1

      if (this.orderPageNumber > 0) {
        this.backButton = true
      } else {
        this.backButton = false
      }
    },
    itemClick (i) {
      const multi = this.itemWrapper[this.orderPageNumber].multi
      const data = this.itemWrapper[this.orderPageNumber].items

      if (!multi) {
        // this.itemWrapper[this.orderPageNumber].items.filter(o=>o.i===i).map(o=>o.active=true)
        data.filter(o => o.i !== i).map(o => o.active = false)
        data[i].active = true
      } else {
        if (data[i].active) {
          data[i].active = false
        } else {
          data[i].active = true
        }
      }

      // this.selectedItems.push(data)
    },
    isEmailValid: function () {
      return (this.emailAddress == '') ? '' : (this.reg.test(this.emailAddress)) ? 'is-primary' : 'is-danger'
    },
    lastStep () {
      console.log(this.isEmailValid())
      console.log(this.emailAddress)
    }

  },
  created () {
    this.itemWrapper[5].items.forEach((item, i) => {
      this.slideData.push(item.name)
    })

    console.log(this.slideData)

    if (this.orderPageNumber > 1) {
      this.backButton = true
    } else {
      this.backButton = false
    }
  }
}
</script>

<style lang="scss">
</style>
