<template>
    <div>
      <!-- Botón de hamburguesa -->
      <button @click="isOpen = !isOpen">{{ label }}</button>
  
      <!-- Menú desplegable -->
      <ul v-if="isOpen">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre mí</a></li>
        <li><a href="#">Habilidades</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props:{
        label:{
            type: String,
            default: 'Menú',
        },
    },
    setup() {
      // Estado del menú (abierto/cerrado)
      const isOpen = ref(false);
  
      return { isOpen };
    },
  };
  </script>