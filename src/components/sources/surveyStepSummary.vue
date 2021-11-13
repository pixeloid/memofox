<template>
  <article class="">
    <p class="panel-heading vcenter title is-6 m-0 p-6">
      <span class="order-sort-numb hcenter vcenter">{{ surveyPageNumber }}</span>
      <span>{{ title }}</span>
    </p>
    <div class="panel-block p-6">
      <div class="is-fullwidth">

        <!--
        <div class="mb-4 is-size-5"><p>Itt az új
          <strong>{{ $parent.selectedItems.videoPersonal[0].name }}</strong>,
          <strong>{{ $parent.selectedItems.videoType[0].name }}</strong>d árajánlata.</p>
        </div>
        -->

        <table class="table has-width-full is-fullwidth summary-table">
          <tbody>
            <tr>
              <td class="p-2 is-size-5">
                Videód hossza: <strong>{{ $parent.selectedItems.videoLength[0].name }}</strong>
                <button type="button" class="button is-small is-ghost ml-3" name="button" @click="prevTime()">
                  <span class="material-icons-round">remove</span>
                </button>
                <button type="button" class="button is-small is-ghost ml-1" name="button" @click="nextTime()">
                  <span class="material-icons-round">add</span>
                </button>
              </td>
              <td class="p-2 has-text-right is-size-5">{{ priceFormatter($parent.selectedItems.videoLength[0].price) }}</td>
            </tr>
            <!--
            <tr>
              <td colspan="2" class="p-2">
                <p class="is-size-6">Ha szeretnéd, akkor a videód pontos hosszat megadhatod a megrendelés után.</p>
              </td>
            </tr>
          -->
            <tr>
              <td class="p-2 is-size-5">
                Stílusa: <strong>{{ $parent.selectedItems.videoEditType[0].name }}</strong>
                <div>
                  <button v-if="!extra" type="button" class="button is-small is-ghost ml-0" name="button" @click="extraAdd()">
                    Extra hozzáadása
                  </button>
                  <button v-if="extra" type="button" class="button is-small is-ghost is-danger ml-0" name="button" @click="extraRemove()">
                    Extra eltávolítása
                  </button>
                  <p class="is-size-6">Az extra csomaggal szerkesztőink további időt töltenek a felvételek fényerejének és hőmérsékletének korrigálásával, a színpaletta finomításával, az átmenetek javításával és a stabilizálás finomhangolásával. Ez a csomag vlogokhoz és 360 fokos felvételekhez szükséges.</p>
                </div>
              </td>
              <td class="p-2 has-text-right is-size-5">{{ priceFormatter($parent.selectedItems.videoEditType[0].price) }}</td>
            </tr>
            <!--
            <tr>
              <td colspan="2" class="p-2">
                <p>Az extra csomaggal szerkesztőink további időt töltenek a felvételek fényerejének és hőmérsékletének korrigálásával, a színpaletta finomításával, az átmenetek javításával és a stabilizálás finomhangolásával. Ez a csomag vlogokhoz és 360 fokos felvételekhez szükséges.</p>
                <button type="button" class="button is-small is-ghost ml-0" name="button">
                  Extra hozzáadása
                </button>
              </td>
            </tr>
          -->
            <tr class="is-last-row">
              <td class="p-2 is-size-5">
                <div class="">
                  Akár <strong>{{ standardAmount }}GB</strong> Fotót és videót is feltölthetsz.
                </div>
                <div>
                  <p class="is-size-6">Ha szeretnéd, akkor a videód pontos hosszat megadhatod a megrendelés után.</p>
                </div>
                <div>
                  További extra tárhely: +<strong>{{ $parent.selectedItems.videoSize[0].name }}</strong>
                  <button type="button" class="button is-small is-ghost ml-3" name="button" @click="prevAmount()">
                    <span class="material-icons-round">remove</span>
                  </button>
                  <button type="button" class="button is-small is-ghost ml-1" name="button" @click="nextAmount()">
                    <span class="material-icons-round">add</span>
                  </button>
                </div>
              </td>
              <td class="p-2 has-text-right is-size-5">{{ priceFormatter($parent.selectedItems.videoSize[0].price) }}</td>
            </tr>
            <tr>
              <td class="p-2 is-size-5"><strong>ÖSSZESEN:</strong></td>
              <td class="p-2 has-text-right is-size-5 is-strong">{{ priceFormatter(getTotal()) }}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

    <div class="survey-buttons has-text-right vcenter p-6">
      <div class="button-container has-text-left">
        <button type="button" class="button is-primary is-outline" @click="$parent.backStep">
          <span class="material-icons-round">fast_rewind</span>
        </button>
      </div>
      <span class="is-size-6"><strong> {{ surveyPageNumber }} / {{ $parent.maximumStep }} </strong></span>

      <div class="button-container has-text-right">
        <button type="button" class="button is-primary">
          <span>Rendelés leadása</span>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    surveyPageNumber: Number,
    title: String
  },
  data: function() {
    return {
      standardAmount: null,
      packAmount: [
        10,20,30,40,50
      ],
      extra: Boolean,
      allTime: [],
      allAmount: [],
      allStyle: [],
      selectedTimePosition: null,
      selectedAmountPosition: null,

    }
  },
  methods: {
    priceFormatter(price) {
      var formatter = new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: 'HUF',
        maximumFractionDigits: 0

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

      return formatter.format(price); /* $2,500.00 */
    },
    getProductPrice(name) {
      const filtered = this.$parent.products.find(el => el.data().name === name)
      return this.priceFormatter(filtered.data().price)
    },
    getTotal() {
      const total = parseInt(this.$parent.selectedItems.videoLength[0].price)+parseInt(this.$parent.selectedItems.videoEditType[0].price)+parseInt(this.$parent.selectedItems.videoSize[0].price)
      return total
    },
    nextTime() {
      const nextProduct = this.selectedTimePosition+1
      this.allTime.forEach((item, i) => {
        if(nextProduct === i) {
          this.$parent.selectedItems.videoLength.splice(0)
          this.$parent.selectedItems.videoLength.push(item)
          this.selectedTimePosition = i
        }
      })
      this.checkAmount()
    },
    prevTime() {
      const nextProduct = this.selectedTimePosition-1
      this.allTime.forEach((item, i) => {
        if(nextProduct === i) {
          this.$parent.selectedItems.videoLength.splice(0)
          this.$parent.selectedItems.videoLength.push(item)
          this.selectedTimePosition = i
        }
      })
      this.checkAmount()
    },
    nextAmount() {
      const nextProduct = this.selectedAmountPosition+1
      this.allAmount.forEach((item, i) => {
        if(nextProduct === i) {
          this.$parent.selectedItems.videoSize.splice(0)
          this.$parent.selectedItems.videoSize.push(item)
          this.selectedAmountPosition = i
        }
      })
    },
    prevAmount() {
      const nextProduct = this.selectedAmountPosition-1
      this.allAmount.forEach((item, i) => {
        if(nextProduct === i) {
          this.$parent.selectedItems.videoSize.splice(0)
          this.$parent.selectedItems.videoSize.push(item)
          this.selectedAmountPosition = i
        }
      })
    },
    extraAdd() {
      this.$parent.selectedItems.videoEditType.splice(0)
      this.$parent.selectedItems.videoEditType.push(this.allStyle[1])
      this.extra = true
    },
    extraRemove() {
      this.$parent.selectedItems.videoEditType.splice(0)
      this.$parent.selectedItems.videoEditType.push(this.allStyle[0])
      this.extra = false
    },
    checkAmount() {
      this.packAmount.forEach((item, i) => {
        if(i === this.selectedTimePosition) {
          this.standardAmount = item
        }
      })
    }
  },
  created() {
    // alapbol a 10gigas tarhely ki van valasztva.
    this.$parent.getFilteredProducts('Amount', this.allAmount)
    this.$parent.getFilteredProducts('Time', this.allTime)
    this.$parent.getFilteredProducts('Style', this.allStyle)
    this.$parent.itemClick(0, this.allAmount, false, this.$parent.selectedItems.videoSize)
    //

    this.allAmount.forEach((item, i) => {
      if(item.name === this.$parent.selectedItems.videoSize[0].name) {
        this.selectedAmountPosition = i
      }
    })

    this.allTime.forEach((item, i) => {
      if(item.name === this.$parent.selectedItems.videoLength[0].name) {
        this.selectedTimePosition = i
      }
    })

    if(this.$parent.selectedItems.videoEditType[0].name === 'Standard') {
      this.extra = false
    }

    this.checkAmount()

  }
}
</script>

<style lang="css" scoped>
</style>
