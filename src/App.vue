<template>
    <div id="app">
        <router-link to="/">Foo</router-link>
        <router-link to="/bar">Bar</router-link>
        <router-view />
        <!--<Foo/>
        <Bar/>-->
    </div>
</template>

<script>
  import Foo from './components/Foo.vue';
  import Bar from './components/Bar.vue';

  export default {
    name: 'App',
    components: {
      Foo, Bar
    }
  };
</script>

<style scoped>

</style>