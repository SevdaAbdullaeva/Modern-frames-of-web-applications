<template>
    <div class="relative w-64 mx-auto mt-4">
        <button
        :class="buttonClasses"
        @click="handleClick"
        >
        <span v-if="icon" class="mr-2">
            <img :src="icon" alt="icon" class="w-5 h-5 inline" />
        </span>
        {{ label }}
        </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Button',
    props: {
      label: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: 'blue', // Default color if not provided
      },
      size: {
        type: String,
        default: 'medium', // Default size if not provided
      },
    },
    computed: {
      buttonClasses() {
        const baseClasses = 'rounded font-bold focus:outline-none';
        const sizeClasses = {
          small: 'px-3 py-1 text-sm',
          medium: 'px-4 py-2 text-base',
          large: 'px-6 py-3 text-lg',
        };
        const colorClasses = {
          blue: 'bg-blue-500 text-white hover:bg-blue-600',
          red: 'bg-red-500 text-white hover:bg-red-600',
          green: 'bg-green-500 text-white hover:bg-green-600',
          yellow: 'bg-yellow-500 text-black hover:bg-yellow-600',
        };
        return `${baseClasses} ${sizeClasses[this.size]} ${colorClasses[this.color]}`;
      },
    },
    methods: {
      handleClick(event) {
        this.$emit('click', event); // Emit click event to parent component
      },
    },
  };
  </script>
  
  <style scoped>
  /* Додаткові стилі можна додати за потреби */
  </style>
  