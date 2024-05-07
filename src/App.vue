<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <h3 class="navbar-brand">
        <span>
          <router-link to="/digiquran" class="custom-link">
            Digital Al-Quran</router-link>
        </span>
      </h3>
    </nav>
    <RouterView />
  </div>
</template>

<script>
  import {RouterView} from 'vue-router'
  export default{
    data() {
      return {
        
      }
    },
    methods: {
      //
    },
  }
</script>