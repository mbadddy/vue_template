<template>
 <div class="page-container">
  <SidebarView/>
  <div  class="page-content">
   <TopbarView/>
  <router-view/>
  <FooterView/>
  </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SidebarView from './components/SidebarView.vue'
import TopbarView from './components/TopbarView.vue'
import FooterView from './components/FooterView.vue'


export default {
  name: 'App',
  components: {
    SidebarView,
    TopbarView,
    FooterView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
