<template>
  <div id="playerBlock"></div>
</template>

<script>
import Player from '@vimeo/player'
export default {
  props: {
    id: String
  },
  mounted() {
    var options = {
      id: this.id,
      autoplay: true,
      loop: true,
      responsive: true,
      title: false,
      controls: false,
      quality: '320p',
      width: '100%',
      muted: true
    }
    const player = new Player('playerBlock', options)
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
</style>
