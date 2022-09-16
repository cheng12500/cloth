<template >
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
    </keep-alive>
      <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
  </router-view>
    <main-tab-bar></main-tab-bar>
</template>

<script>
import MainTabBar from './components/common/maintabbar.vue';

export default {
  name: 'App',
  components: {
   MainTabBar
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }


</style>
