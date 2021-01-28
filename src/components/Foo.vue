<template>
    <div @click="show">
        foo
        {{$store.state.name}}
        <button @click="$store.dispatch('changeName','hjj')">change</button>
    </div>
</template>

<script>
  export default {
    asyncData(store){
      return store.dispatch('changeName')
    },
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