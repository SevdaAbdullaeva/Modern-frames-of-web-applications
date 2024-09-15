<template>
    <div class="demo-container">
      <h1>Searchable Dropdown Component Demo</h1>
  
      <h2>Basic Usage</h2>
      <SearchableDropdown :options="basicOptions" @select="handleSelect" />
  
      <h2>With Custom Option Labels</h2>
      <SearchableDropdown :options="customOptions" @select="handleSelect">
        <template v-slot:option="{ option }">
          <span class="custom-option">{{ option.label }}</span>
        </template>
      </SearchableDropdown>
  
      <h2>Disabled State</h2>
      <SearchableDropdown :options="basicOptions" :disabled="true" />
  
      <h2>Empty State</h2>
      <SearchableDropdown :options="[]" />
  
    </div>
  </template>
  
  <script>
  import SearchableDropdown from '@/components/SearchableDropdown.vue';
  
  export default {
    components: { SearchableDropdown },
    data() {
      return {
        basicOptions: [
          { label: 'Option 1' },
          { label: 'Option 2' },
          { label: 'Option 3' }
        ],
        customOptions: [
          { label: 'Custom Option A' },
          { label: 'Custom Option B' },
          { label: 'Custom Option C' }
        ],
      };
    },
    methods: {
      handleSelect(option) {
        console.log('Selected option:', option);
      }
    }
  }
  </script>
  
  <style scoped>
  .demo-container {
    padding: 1rem;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  h2 {
    margin-top: 2rem;
  }
  
  .custom-option {
    color: #3490dc;
    font-weight: bold;
  }
  </style>
  