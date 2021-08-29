<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8">
        <div class="content-on-hero p-6">
          <h2 class="title is-secondary">
            Az igénylőlap kitöltése után kiszámítjuk Neked az egyéni árat.
          </h2>
          <hr class="simple" />
          <div class="survey-form">
            <div class="mb-4">

              <div v-if="orderPageNumber == 1">
                <VideoType v-bind:orderPageNumber="orderPageNumber" v-bind:title="'Válaszd ki a videód típusát'" />
              </div>
              <div v-if="orderPageNumber == 2">
                <VideoPersonal v-bind:orderPageNumber="orderPageNumber" v-bind:title="'Személyes, vagy Céges videó?'" />
              </div>
              <div v-if="orderPageNumber == 3">
                <VideoCameras v-bind:orderPageNumber="orderPageNumber" v-bind:title="'Válaszd ki, hogy milyen eszközökkel készültek a felvételek!'" />
              </div>
              <div v-if="orderPageNumber == 4">
                <VideoEditType v-bind:orderPageNumber="orderPageNumber" v-bind:title="'Milyen legyen a szerkesztés stílusa?'" />
              </div>
              <div v-if="orderPageNumber == 5">
                <VideoLenth v-bind:orderPageNumber="orderPageNumber" v-bind:title="'Válaszd ki, hogy milyen hosszú legyen a videód!'" />
              </div>
              <div v-if="orderPageNumber == 6">
                <VideoSize v-bind:orderPageNumber="orderPageNumber" v-bind:title="'Becsüld meg a felvételeid méretét!'" />
              </div>

              <div v-for="(e, i) in categories" :key="i" class="">
                {{ e.data().name }}
              </div>
              <div v-for="(e, i) in products" :key="i" class="">
                {{ e.data().name }}
              </div>

            </div>
            <div class="survey-buttons has-text-right">
              <button v-if="backButton" type="button" class="button is-primary is-outline" @click="backStep">
                <span class="material-icons-round">fast_rewind</span>
              </button>
              <button type="button" class="button is-primary" @click="nextStep">
                <span>{{ nextButtonText }}</span>
                <span class="icon material-icons-round">fast_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="flow-status has-background-light content-on-hero p-6">
          <h3 class="title is-tertiary">
            Flow Status
          </h3>
          <p class="subtitle">
            hogy konnyebb legyen az elet.
          </p>
          <div class="pt-2">
            eddig ezt valaszoltad:
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

import VideoType from '@/components/sources/surveyStepVideoType'
import VideoPersonal from '@/components/sources/surveyStepVideoPersonal'
import VideoCameras from '@/components/sources/surveyStepVideoCameras'
import VideoEditType from '@/components/sources/surveyStepVideoEditType'
import VideoLenth from '@/components/sources/surveyStepVideoLength'
import VideoSize from '@/components/sources/surveyStepVideoSize'

export default {
  components: {
    VideoType, VideoPersonal, VideoCameras, VideoEditType, VideoLenth, VideoSize
  },
  data: function () {
    return {
      products: [],
      categories: [],
      orderPageNumber: 1,
      maximumStep: 6,
      backButton: false,
      nextButtonText: 'Következő',
      selectedItems: [],
    }
  },
  methods: {
    getProducts () {
      try {
        db.collection('products').orderBy('name', 'asc').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc)
          })
          console.log(this.products)
        })
      } catch (err) {
        console.log(err)
      }
      try {
        db.collection('category').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.categories.push(doc)
          })
        })
      } catch (err) {
        console.log(err)
      }
    },
    nextStep () {
      if (this.maximumStep != this.orderPageNumber) {
        this.orderPageNumber += 1
      }

      if (this.orderPageNumber == 1) {
        this.backButton = false
      } else {
        this.backButton = true
      }
    },
    backStep () {
      if (this.orderPageNumber != 1) {
        this.orderPageNumber -= 1
      }

      if (this.orderPageNumber == 1) {
        this.backButton = false
      } else {
        this.backButton = true
      }
    },
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss">
</style>
