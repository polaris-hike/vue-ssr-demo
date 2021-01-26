<template>
    <div @click="show">
        foo
    </div>
</template>

<script>
  export default {
    name: 'Foo',
    methods:{
      show(){
        alert('foo')
      }
    }
  };
</script>

<style scoped>
  div {
      color: red;
  }
</style>