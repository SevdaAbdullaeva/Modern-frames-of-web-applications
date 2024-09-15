<template>
    <div class="relative custom-width mx-auto mt-4">
      <!-- Поле пошуку та відображення вибраного значення -->
      <div class="relative flex items-center border border-gray-300 rounded-lg p-2 cursor-pointer">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Виберіть..."
          class="flex-grow outline-none text-center"
          @focus="openDropdown"
          @input="filterOptions"
        />
        <button v-if="selectedOption" @click="clearSelection" class="ml-4 px-2 py-1 text-red-500 border border-red-500 rounded-lg hover:bg-red-100">
          Очистити
        </button>
      </div>
  
      <!-- Випадаючий список -->
      <ul v-if="isDropdownOpen" class="absolute left-0 mt-12 w-full border border-gray-300 rounded-lg bg-white max-h-40 overflow-y-auto z-10">
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          :class="['px-4 py-2 cursor-pointer', { 'bg-gray-100': index === focusedIndex }]"
          @click="selectOption(option)"
          @mouseover="focusedIndex = index"
        >
          <slot :option="option">{{ option.label }}</slot>
        </li>
        <li v-if="filteredOptions.length === 0" class="px-4 py-2 text-gray-500 text-center">
          Нічого не знайдено
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchableDropdown",
    props: {
      options: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        searchQuery: "", // Поле для пошуку
        isDropdownOpen: false, // Стан відкриття/закриття списку
        selectedOption: null, // Вибране значення
        focusedIndex: -1, // Для навігації через клавіатуру
      };
    },
    computed: {
      // Фільтровані опції на основі введеного пошукового запиту
      filteredOptions() {
        if (!this.searchQuery) {
          return this.options;
        }
        return this.options.filter((option) =>
          option.label.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      // Відкриваємо випадаючий список
      openDropdown() {
        this.isDropdownOpen = true;
      },
      // Закриваємо випадаючий список
      closeDropdown() {
        this.isDropdownOpen = false;
      },
      // Перемикання стану випадаючого списку
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      // Фільтруємо опції при введенні тексту
      filterOptions() {
        this.focusedIndex = -1;
      },
      // Вибір опції зі списку
      selectOption(option = this.filteredOptions[this.focusedIndex]) {
        if (option) {
          this.selectedOption = option;
          this.searchQuery = option.label; // Відображаємо вибране значення
          this.$emit("select", option); // Відправляємо вибране значення в батьківський компонент
          this.closeDropdown();
        }
      },
      // Очищення вибраного значення
      clearSelection() {
        this.selectedOption = null;
        this.searchQuery = "";
        this.$emit("clear");
        this.openDropdown();
      },
      // Навігація по списку за допомогою стрілок
      navigateDown() {
        if (this.focusedIndex < this.filteredOptions.length - 1) {
          this.focusedIndex++;
        }
      },
      navigateUp() {
        if (this.focusedIndex > 0) {
          this.focusedIndex--;
        }
      },
    },
    watch: {
      // Закриваємо випадаючий список, якщо поле пошуку втрачає фокус
      searchQuery() {
        if (this.searchQuery === "") {
          this.closeDropdown();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
  
  .custom-width {
    width: 80%; /* Задайте бажану ширину в процентах або пікселях */
    max-width: 600px; /* Максимальна ширина для великих екранів */
  }
  
  .ml-4 {
    margin-left: 1rem; /* Відстань між полем пошуку і кнопкою */
  }
  </style>
  