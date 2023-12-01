import { createApp } from 'vue';
import './styles/homepage.scss';

createApp({
  compilerOptions: {
    delimiters: ['${', '}$'],
  },
  data() {
    return {
      message: 'Bonjour',
    };
  },
}).mount('#app');
