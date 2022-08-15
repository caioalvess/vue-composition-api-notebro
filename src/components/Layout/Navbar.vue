<template>
  <nav
    class="navbar has-background-link-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop pl-2">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item is-size-4 is-family-monospace">
          Notebro
        </RouterLink>

        <a
          @click.prevent="showMobileMenu = !showMobileMenu"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileMenu }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileMenu }"
      >
        <div class="navbar-end">
          <RouterLink
            @click="showMobileMenu = false"
            to="/"
            class="navbar-item"
            active-class="is-active"
          >
            Notes
          </RouterLink>
          <RouterLink
            @click="showMobileMenu = false"
            to="/stats"
            class="navbar-item"
            active-class="is-active"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/*
    IMPORTS
*/
import { ref } from "vue";

/*
    MOBILE NAV
*/
const showMobileMenu = ref(false);
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
