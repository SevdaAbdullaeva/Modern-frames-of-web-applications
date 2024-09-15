<template>
    <div class="demo-container">
      <div v-for="color in colors" :key="color">
        <h3>{{ color }} Buttons</h3>
        <div v-for="size in sizes" :key="size">
          <h4>{{ size }} Size</h4>
          <Button :color="color" :size="size" :icon="icon">
            {{ color }} Button
          </Button>
          <Button :color="color" :size="size" :icon="icon" disabled>
            {{ color }} Disabled
          </Button>
        </div>
      </div>
      <h2>Buttons with Icons</h2>
      <div v-for="size in sizes" :key="size">
        <h4>{{ size }} Size</h4>
        <Button :size="size" icon="fas fa-star">
          Button with Star Icon
        </Button>
      </div>
    </div>
  </template>
  
  <script>
  import Button from './Button.vue';
  
  export default {
    components: { Button },
    data() {
      return {
        colors: ['blue', 'red', 'green'],
        sizes: ['small', 'medium', 'large'],
        icon: 'fas fa-check'
      };
    }
  }
  </script>
  
  <style scoped>
  .demo-container {
    padding: 1rem;
  }
  
  h3 {
    margin-top: 1rem;
  }
  
  h4 {
    margin-top: 0.5rem;
  }
  </style>
  