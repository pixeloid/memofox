<template>
  <main class="admin has-aside-left has-aside-right" v-bind:class="{hasLeftAsideExpanded, hasRightAsideExpanded}">

    <header>

      <div class="header-functions">
        <button class="button is-white aside-toggle is-small" type="button" name="button" @click="asideLeftToggle">
          <span class="material-icons-round" v-if="hasLeftAsideExpanded">menu_open</span>
          <span class="material-icons-round" v-if="!hasLeftAsideExpanded">menu</span>
        </button>
        <div class="field">
          <div class="control">
            <input class="input input-disabled-border-color" type="text" name="" value="" placeholder="Keress rá valamire...">
          </div>
        </div>
      </div>

      <nav class="navbar is-fixed-top">
        <div class="nav-items is-right navbar-end">
          <div class="dropdown" :class="{ active: isActive }" @click="isActive = !isActive">
            <div class="dropdown-trigger">
              <button class="button is-white" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Admin</span>
                <span class="icon is-small">
                  <i class="material-icons-round" aria-hidden="true">keyboard_arrow_down</i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  Settings
                </a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item" @click="logout">
                  Log out
                </a>
              </div>
            </div>
          </div>

          <button class="button is-white is-small" type="button" name="button" @click="asideRightToggle">
            <span class="material-icons-round">notifications</span>
          </button>
        </div>
      </nav>

    </header>

    <aside class="aside is-placed-left" v-bind:class="{hasLeftAsideExpanded}">
      <div class="menu-wrapper">
        <div class="header-brand">
          <a href="/admin" class="">
            <img src="../assets/svg/memofox-emblema-color.svg" alt="" />
          </a>
        </div>
        <div class="menu" ref="menu">
          <div class="sidebar-content">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li><router-link :to="{ name: 'Secret', params: {} }">Dashboard</router-link></li>
              <li><router-link :to="{ name: 'Overview', params: {} }">Overview</router-link></li>
              <li><router-link :to="{ name: 'secretCategories', params: {} }">Termék kategóriák</router-link></li>
              <li><router-link :to="{ name: 'secretProducts', params: {} }">Termékek</router-link></li>
              <li><router-link :to="{ name: 'Orders', params: {} }">Megrendelések</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </aside>

    <section class="section">
      <router-view />
    </section>

    <aside class="aside is-placed-right" v-bind:class="{hasRightAsideExpanded}">
      <div class="">
        notifikaciok
      </div>
    </aside>

    <footer>
      <div class="container-fluid content has-text-centered">
        <p>
          footer
        </p>
      </div>
    </footer>

  </main>
</template>

<script>

import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: function() {
    return {
      isActive: false,
      hasLeftAsideExpanded: true,
      hasRightAsideExpanded: false
    }
  },
  methods: {
    asideLeftToggle() {
      this.hasLeftAsideExpanded = !this.hasLeftAsideExpanded
    },
    asideRightToggle() {
      this.hasRightAsideExpanded = !this.hasRightAsideExpanded
    },
    async logout() {
      try {
        const data = await firebase.auth().signOut()
        this.$route.replace({name: "Home"})
      } catch(err) {
        console.log(err)
      }
    }

  }
}

</script>
