<template>
    <div>
      <h1>Button Component Demo</h1>
      <ButtonDemo />
    </div>
  </template>
  
  <script>
  import ButtonDemo from '@src/components/ButtonDemo.vue';
  
  export default {
    components: { ButtonDemo }
  }
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  </style>
  