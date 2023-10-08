<template>
    <div>
      <button title="button" type="button" :class="{ open: isOpen, rotateClose: !isOpen}" @click="handleClick" class="z-50 relative flex items-center justify-center w-5 h-5">
        <span class="base">{{ isOpen ? '' : label }}</span>
      </button>

  
      <!-- Menú desplegable -->
      <ul id="test" v-bind:class="{ hidden: !isOpen }" class="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm h-screen flex items-center justify-center flex-col">
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
    // Crea una variable reactiva para controlar si la lista está abierta o no
      const isOpen = ref(false);

      // Actualiza el valor de isOpen cuando se hace clic en el botón
      const handleClick = () => {
        isOpen.value = !isOpen.value;
        if (isOpen.value) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      };

      return {
        isOpen,
        handleClick,
      };
    },
  };
  </script>

<style>
/* Define una transición CSS para animar al botón */
  span.base{
    width: 25px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
  }
  span.base::before,
  span.base::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
  }
  span.base::before {
    transform: translate(-10px, -7px);
  }
  span.base::after {
    transform: translate(-10px, 7px);
  }
  button.open span.base{
    transform: translateX(-10px);
    background: transparent;
    box-shadow: none;
  }
  button.open span.base::before {
    transform: rotate(45deg) translate(0px,  0px);
  }
  button.open span.base::after {
    transform: rotate(-45deg) translate(0px, 0px);
  }
</style>