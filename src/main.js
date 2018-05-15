import Vue from 'vue/dist/vue'
import { VuePlugin } from 'vuera'
import Button from './ReactButton'
// import Button from './dnb-button.vue'
import './main.css'

Vue.use(VuePlugin)

// global component
// Vue.component('dnb-button', button)

new Vue({
  el: '#app',
  components: {
    'dnb-button': Button
  },
  methods: {
    greet: e => {
      console.log('event', e)
    },
    handleClick: e => {
      console.log('handleClick', e)
    }
  },
  template: `
    <div id="app">
      <h1>Hello 📦 🚀</h1>
      <dnb-button text="My Button 1" @click="handleClick" />
      <dnb-button text="My Button 2" v-on:click="greet"  />
      <button v-on:click="greet">Greet</button>
    </div>
  `
})

module.hot && module.hot.accept()
