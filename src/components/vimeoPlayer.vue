<template>
  <div v-bind:id="player" class="player-block" allowfullscreen="true"></div>
</template>

<script>
import Player from '@vimeo/player'
export default {
  props: {
    id: Number
  },
  data () {
    return {
      player: 'player' + this.id
    }
  },
  mounted () {
    var options = {
      id: this.id,
      responsive: 1,
      title: 0,
      controls: 0,
      quality: '320p',
      muted: 1,
      autoplay: 1,
      loop: 1,
      autopause: 0,
      background: 1,
      allow: 'autoplay'
    }
    const player = new Player(this.player, options)
  }
}
</script>

<style lang="scss">
</style>
