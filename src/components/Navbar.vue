<script setup>
    import BurgerButton from "../components/BurgerButton.vue";
</script>

<template>
    <div class="flex justify-center">
        <nav class="fixed top-0 flex justify-between items-center w-10/12 rounded-full border /*border-gray-500*/ bg-sky-500 p-2 text-gray-100 bold /*dark:bg-sky-900*/ dark:text-slate-200">
            <div class="flex justify-between gap-x-14">
                <a href="#" class="flex flex-row items-center gap-x-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-transparent bg-clip-text">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 128 128" class="w-10 h-10 text-gray-100 dark:text-slate-200">
                        <path d="M50.4 78.5a75.1 75.1 0 0 0-28.5 6.9l24.2-65.7c.7-2 1.9-3.2 3.4-3.2h29c1.5 0 2.7 1.2 3.4 3.2l24.2 65.7s-11.6-7-28.5-7L67 45.5c-.4-1.7-1.6-2.8-2.9-2.8-1.3 0-2.5 1.1-2.9 2.7L50.4 78.5Zm-1.1 28.2Zm-4.2-20.2c-2 6.6-.6 15.8 4.2 20.2a17.5 17.5 0 0 1 .2-.7 5.5 5.5 0 0 1 5.7-4.5c2.8.1 4.3 1.5 4.7 4.7.2 1.1.2 2.3.2 3.5v.4c0 2.7.7 5.2 2.2 7.4a13 13 0 0 0 5.7 4.9v-.3l-.2-.3c-1.8-5.6-.5-9.5 4.4-12.8l1.5-1a73 73 0 0 0 3.2-2.2 16 16 0 0 0 6.8-11.4c.3-2 .1-4-.6-6l-.8.6-1.6 1a37 37 0 0 1-22.4 2.7c-5-.7-9.7-2-13.2-6.2Z" />
                    </svg>
                    <div class="hidden md:flex md:flex-col md:justify-center md:items-center">
                        <span class="font-bold tracking-[.75rem] /*-mr-4*/">ARCODEV</span>
                    </div>
                </a>
            </div>
            <ul class="hidden md:flex flex-wrap gap-x-5">
                <li class="flex items-center">

                    <button id="toggle" @click="toggleTheme" data-tooltip-target="tooltip-toggle" type="button" class="relative group text-white bg-transparent font-medium rounded-lg text-sm focus:outline-none">
                        <svg v-if="dark" class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.3 5A1 1 0 0 0 5 6.2l1.4 1.5a1 1 0 0 0 1.5-1.5L6.3 5Zm12.8 1.3A1 1 0 0 0 17.7 5l-1.5 1.4a1 1 0 0 0 1.5 1.5L19 6.3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.8 17.7a1 1 0 1 0-1.5-1.5L5 17.7A1 1 0 1 0 6.3 19l1.5-1.4Zm9.9-1.5a1 1 0 0 0-1.5 1.5l1.5 1.4a1 1 0 0 0 1.4-1.4l-1.4-1.5ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"/>
                        </svg>
                        <svg v-else class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M11.7 2a10 10 0 1 0 9.8 13.3 1 1 0 0 0-1-1.3H20a8 8 0 0 1-7.6-10.6l.1-.4a1 1 0 0 0-.8-1Z" clip-rule="evenodd"/>
                        </svg>                  
                    </button>

                    <div id="tooltip-toggle" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        {{ dark ? 'Usar modo claro' : 'Usar modo oscuro' }}
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </li>
                <a href="#" class="group border-solid /*border-r-2 border-white-600*/ h-10 flex flex-wrap items-center">
                <li class="flex items-center">

                    <button data-tooltip-target="tooltip-yulyweb" type="button" class="relative group text-white bg-transparent font-medium rounded-lg text-sm focus:outline-none">
                        <svg data-tooltip-target="tooltip-yulyweb" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                        </svg>
                    </button>

                    <div id="tooltip-yulyweb" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Sitio web de Yuly
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </li>
                </a>
                <a href="#" class="group border-solid /*border-r-2 border-white-600*/ h-10 flex flex-wrap items-center">
                    <li>
                        Curriculum
                        <span class="block w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </li>
                </a>
            </ul>

            <BurgerButton class="md:hidden text-white text-xl" label=" "/>
        
        </nav>
    </div>
</template>

<!-- <script>
export default {
    methods: {
        toggleTheme() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                html.classList.add('dark');
                localStorage.theme = 'dark';
            }
        },
    },
};
</script> -->

<!-- <script>
export default {
    data() {
        return {
            dark: localStorage.getItem('theme') === 'dark', // Set based on localStorage
        };
    },
    methods: {
  toggleTheme() {
    this.dark = !this.dark;
    const html = document.documentElement;
    if (this.dark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  },
},
    mounted() {
        if (this.dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },
};
</script> -->

<!-- <script>
    export default {
    data() {
        return {
            dark: typeof window !== 'undefined' && window.localStorage.getItem('theme') === 'dark', // Set based on localStorage
        };
    },
    methods: {
        toggleTheme() {
            this.dark = !this.dark;
            const html = document.documentElement;
            if (this.dark) {
                html.classList.add('dark');
                if (typeof window !== 'undefined') {
                    window.localStorage.setItem('theme', 'dark');
                }
            } else {
                html.classList.remove('dark');
                if (typeof window !== 'undefined') {
                    window.localStorage.setItem('theme', 'light');
                }
            }
        },
    },
    mounted() {
        if (this.dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },
};
</script> -->

<!-- <script>
export default {
    data() {
        return {
            dark: true, // Set to true for dark theme by default
        };
    },
    methods: {
        toggleTheme() {
            this.dark = !this.dark;
            const html = document.documentElement;
            if (this.dark) {
                html.classList.add('dark');
                if (typeof window !== 'undefined') {
                    window.localStorage.setItem('theme', 'dark');
                }
            } else {
                html.classList.remove('dark');
                if (typeof window !== 'undefined') {
                    window.localStorage.setItem('theme', 'light');
                }
            }
        },
    },
    mounted() {
        if (typeof window !== 'undefined') {
            this.dark = window.localStorage.getItem('theme') === 'dark';
        }
        const html = document.documentElement;
            if (this.dark) {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
    },
};
</script> -->

<!-- <script>
export default {
  data() {
    return {
      dark: this.getCookie('theme') === 'dark', // Set based on cookie
    };
  },
  methods: {
    toggleTheme() {
      this.dark = !this.dark;
      const html = document.documentElement;
      if (this.dark) {
        html.classList.add('dark');
        this.setCookie('theme', 'dark', 365);
      } else {
        html.classList.remove('dark');
        this.setCookie('theme', 'light', 365);
      }
    },
    setCookie(name, value, days) {
      let expires = "";
      if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
    getCookie(name) {
      let nameEQ = name + "=";
      let ca = document.cookie.split(';');
      for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    }
  },
  mounted() {
    const html = document.documentElement;
    if (this.dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  },
};
</script> -->