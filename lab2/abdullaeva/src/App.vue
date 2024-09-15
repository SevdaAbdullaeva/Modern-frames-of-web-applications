<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Button from './components/Button.vue';
import SearchableDropdown from './components/SearchableDropdown.vue'; // Додаємо імпорт компонента SearchableDropdown

// Створюємо масив варіантів для компонента SearchableDropdown
const dropdownOptions = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' }
];

// Функція для обробки вибору елементу з випадаючого списку
function handleSelect(option) {
  console.log('Selected option:', option);
}

// Функція для обробки очищення вибору
function handleClear() {
  console.log('Selection cleared');
}

// Функція для обробки кліку на кнопку
function handleButtonClick(event) {
  console.log('Button clicked!', event);
}
</script>

<template>
  <div>
    <!-- Лого і посилання -->
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <!-- Виводимо компонент HelloWorld -->
  <HelloWorld msg="Vite + Vue" />

  <!-- Додаємо компонент Button -->
  <Button
    label="Click Me"
    color="green"
    size="medium"
    @click="handleButtonClick"
  />

  <!-- Додаємо компонент SearchableDropdown -->
  <SearchableDropdown
    :options="dropdownOptions"
    @select="handleSelect"
    @clear="handleClear"
  >
    <!-- Кастомізація відображення варіантів через слот -->
    <template #default="{ option }">
      <span>{{ option.label }}</span>
    </template>
  </SearchableDropdown>
</template>

<style scoped>
/* Існуючі стилі */
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
