<template>
  <div class="container">
    <div class="content-on-hero mb-5">
      <span class="title has-text-light mb-0 hcenter">MemoFox videószerkesztő szolgáltatás</span>
      <div class="vcenter has-text-light hcenter">
        <span class="is-size-5 material-icons-round">star</span>
        <span class="is-size-5 material-icons-round">star</span>
        <span class="is-size-5 material-icons-round">star</span>
        <span class="is-size-5 material-icons-round">star</span>
        <span class="is-size-5 material-icons-round pr-2">star</span>
        <span class="is-size-6 pt-1">24 vélemény | 64 videó</span>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6 is-offset-1">
        <div class="survey-form box p-0">

          <div class="survey-form-content" v-if="surveyPageNumber == 1">
            <VideoType v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Válaszd ki a videód típusát!'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 2">
            <VideoPersonal v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Személyes, vagy Céges videó?'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 3">
            <VideoCameras v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Milyen eszközökkel készültek a felvételek?'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 4">
            <VideoEditType v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Milyen legyen a szerkesztés stílusa?'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 5">
            <videoLength v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Válaszd ki, hogy milyen hosszú legyen a videód!'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 6">
            <VideoSize v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Becsüld meg a felvételeid méretét!'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 7">
            <StepEmail v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Végül csak pár adat.'" />
          </div>
          <div class="survey-form-content" v-if="surveyPageNumber == 8">
            <StepSummary v-bind:surveyPageNumber="surveyPageNumber" v-bind:title="'Elkészült a személyre szabott ajánlatod.'" />
          </div>

        </div>
      </div>

      <div class="column is-4">
        <div class="box is-fullheight p-6">
          <h2 class="title is-5">
            Segítség a megrendeléshez
          </h2>
          <p class="hcenter mb-2 vleft">
            <span class="material-icons-outlined mr-1">email</span><span class="is-size-6">support@memofox.hu</span>
          </p>
          <!--
          <p>Nyitva munkanapokon: 9:00 - 17:00</p>
          <p class="hcenter vleft">
            <span class="material-icons-outlined mr-1">phone</span><span class="is-size-6">+36 30 653 94 24</span>
          </p>
        -->
          <div class="faq mt-5">
            <h2 class="title is-5">Gyakori kérdések</h2>
            <div class="faq-item mb-2">
              <p><strong>Mi van, ha nem tetszik a videó?</strong></p>
              <p>Nem baj, mindannyian emberek vagyunk. Kapsz két ingyenes variációs kört! Együttműködünk Önnel, hogy elégedett legyen, vagy visszaadjuk a pénzét.</p>
            </div>
            <div class="faq-item mb-2">
              <p><strong>Hogyan oszthatom meg vagy tölthetem fel a videóimat?</strong></p>
              <p>Miután kiválasztotta és megrendelte a videószerkesztést, e-mailben elküldünk egy egyéni linket, amelyre húzással feltöltheti felvételeit, vagy megoszthatja kedvenc felhőmegosztó szolgáltatásával, például a Google Drive-val vagy a Dropboxszal.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="columns">
      <div class="column is-offset-1 is-10">
        <div class="box">
          <div class="body">
            A legegyszerűbb módja annak, hogy az emléked egy menő és megosztható videóba mentsd. A fejlett videoszerkesztés és a szakértői történetmesélés lehetővé teszi, hogy egy teljesen testreszabott videóval újraéld az izgalmas kalandodat.
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

import VideoType from '@/components/sources/surveyStepVideoType'
import VideoPersonal from '@/components/sources/surveyStepVideoPersonal'
import VideoCameras from '@/components/sources/surveyStepVideoCameras'
import VideoEditType from '@/components/sources/surveyStepVideoEditType'
import VideoLength from '@/components/sources/surveyStepVideoLength'
import VideoSize from '@/components/sources/surveyStepVideoSize'
import StepEmail from '@/components/sources/surveyStepEmail'
import StepSummary from '@/components/sources/surveyStepSummary'

const db = firebase.firestore()

export default {
  components: {
    VideoType, VideoPersonal, VideoCameras, VideoEditType, VideoLength, VideoSize, StepEmail, StepSummary
  },
  data: function () {
    return {
      products: [],
      categories: [],
      surveyPageNumber: 1,
      maximumStep: 8,
      backButton: false,
      selectedItems: {
        videoType: [],
        videoPersonal: [],
        videoCameras: [],
        videoEditType: [],
        videoLength: [],
        videoSize: [],
        videoUser: {
          name: '',
          emailAddress: '',
        }
      },
    }
  },
  methods: {
    checkout () {
      //console.log(this.selectedItems.videoEditType[0].name);
    },
    itemClick (i, items, multi, type) {
      const data = items

      if (!multi) {
        data.filter(o => o.i !== i).map(o => o.active = false)
        data[i].active = true
        type[0] = data[i]
      } else {
        if (data[i].active) {
          // itt veszi ki
          data[i].active = false

          const selectedItems = type

          selectedItems.forEach((item, index) => {
            if (item.name === data[i].name) {
              type.splice(index, 1)
            }
          })
        } else {
          data[i].active = true
          type.push(data[i])
        }
      }
    },
    filterActiveElement (items, type, multi) {
      const data = type
      let index = 0
      data.forEach((item, i) => {
        if (item.active === true) {
          index++
          items.find(el => el.name === item.name).active = true
        }
      })

      if (index === 0 && items.length > 0) {
        this.itemClick(0, items, multi, type)
      }
    },
    getProducts () {
      try {
        db.collection('products').orderBy('rate', 'asc').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc)
          })
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
      // tovabb mehet
      if (this.maximumStep !== this.surveyPageNumber) {
        this.surveyPageNumber += 1
      }

      if (this.surveyPageNumber === 1) {
        this.backButton = false
      } else {
        this.backButton = true
      }
    },
    backStep () {
      if (this.surveyPageNumber !== 1) {
        this.surveyPageNumber -= 1
      }

      if (this.surveyPageNumber === 1) {
        this.backButton = false
      } else {
        this.backButton = true
      }
    },
    getCategoryName (id) {
      const filtered = this.categories.find(el => el.id === id)
      if (filtered) {
        return filtered.data().name
      } else {
        return 'undefined'
      }
    },
    getFilteredProducts (categoryFilter, items) {
      this.products.forEach((item, i) => {
        const categoryName = this.getCategoryName(item.data().category)

        if (categoryName === categoryFilter) {
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
