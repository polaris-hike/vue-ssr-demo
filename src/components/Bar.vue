<template>
    <div>
        <button @click="show">bar</button>
    </div>
</template>

<script>
  export default {
    name: 'Bar',
    methods:{
      show(){
        alert('bar')
      }
    }
  };
</script>

<style scoped>

</style>