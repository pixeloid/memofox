<template>
  <div class="container">
    <div class="content-on-hero mb-5">
      <span class="title has-text-light mb-0">MemoFox videószerkesztő szolgáltatás</span>
      <div class="vcenter has-text-light">
        <span class="is-size-5 material-icons-round">star</span>
        <span class="is-size-5 material-icons-round">star</span>
        <span class="is-size-5 material-icons-round">star</span>
        <span class="is-size-5 material-icons-round">star</span>
        <span class="is-size-5 material-icons-round pr-2">star</span>
        <span class="is-size-6 pt-1">24 vélemény | 64 videó</span>
      </div>
    </div>
    <div class="columns">
      <div class="column is-8">

        <div class="survey-form box p-0">

          <div class="survey-form-content" v-if="surveyPageNumber == 1">
            <VideoType v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Válaszd ki a videód típusát'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 2">
            <VideoPersonal v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Személyes, vagy Céges videó?'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 3">
            <VideoCameras v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Válaszd ki, hogy milyen eszközökkel készültek a felvételek!'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 4">
            <VideoEditType v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Milyen legyen a szerkesztés stílusa?'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 5">
            <VideoLenth v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Válaszd ki, hogy milyen hosszú legyen a videód!'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 6">
            <VideoSize v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Becsüld meg a felvételeid méretét!'" />
          </div>

          <div class="survey-buttons has-text-right p-4 vcenter">
            <div class="button-container has-text-left">
              <button type="button" class="button is-primary is-outline" v-bind:disabled="!backButton" @click="backStep">
                <span class="material-icons-round">fast_rewind</span>
              </button>
            </div>
            <span class="is-size-6"><strong>{{ surveyPageNumber }} /  {{ maximumStep }}</strong></span>
            <div class="button-container has-text-right">
              <button type="button" class="button is-primary" @click="nextStep">
                <span>{{ nextButtonText }}</span>
                <span class="icon material-icons-round">fast_forward</span>
              </button>
            </div>
          </div>

        </div>

      </div>
      <div class="column is-4">
        <div class="box is-fullheight p-6">
          <h2 class="title is-5">
            Megrendelés állapota
          </h2>
          <p class="is-size-5 pb-6">A legegyszerűbb módja annak, hogy az emléked egy menő és megosztható videóba mentsd. A fejlett videoszerkesztés és a szakértői történetmesélés lehetővé teszi, hogy egy teljesen testreszabott videóval újraéld az izgalmas kalandodat.</p>
          <p class="subtitle">
            hogy konnyebb legyen az elet.
          </p>
          <div class="pt-2">
            eddig ezt valaszoltad: 13.435 Ft
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
      surveyPageNumber: 1,
      maximumStep: 6,
      backButton: false,
      nextButtonText: 'Következő',
      selectedItems: {
        videoType: [],
        videoPersonal: [],
        videoCameras: [],
        videoEditType: [],
        videoLenth: [],
        videoSize: []
      },
    }
  },
  methods: {
    itemClick(i, items, multi, type) {

      const data = items

        if (!multi) {
          data.filter(o => o.i !== i).map(o => o.active = false)
          data[i].active = true
          type[0] = data[i]
        } else {
          if (data[i].active) {
            //itt veszi ki
            data[i].active = false

            var selectedItems = type

            selectedItems.forEach((item, index) => {
              if(item.name == data[i].name) {
                type.splice(index, 1)
              }
            })

          } else {
            data[i].active = true
            type.push(data[i])
          }
        }

    },
    filterActiveElement(items, type, multi) {
      var data = type
      var index = 0;
      data.forEach((item, i) => {
        if(item.active == true) {
          index++
          items.find(el => el.name === item.name).active = true
        }
      })

      if(index == 0) {
        this.itemClick(0, items, multi, type)
      }

    },
    getProducts () {
      try {
        db.collection('products').orderBy('rate', 'asc').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc)
          })
          //console.log(this.products)
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
      if (this.maximumStep != this.surveyPageNumber) {
        this.surveyPageNumber += 1
      }

      if (this.surveyPageNumber == 1) {
        this.backButton = false
      } else {
        this.backButton = true
      }
    },
    backStep () {
      if (this.surveyPageNumber != 1) {
        this.surveyPageNumber -= 1
      }

      if (this.surveyPageNumber == 1) {
        this.backButton = false
      } else {
        this.backButton = true
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
    getFilteredProducts (categoryFilter, items) {
      this.products.forEach((item, i) => {
        var categoryName = this.getCategoryName(item.data().category)

        if(categoryName == categoryFilter) {
          items.push(item.data())
        }
      })

    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss">
</style>
