import Vue from 'vue/dist/vue.js';
import SpotsList from "./components/spots-list.vue";
import ButtonCounter from "./components/button-counter.vue";
require('./demo.css');

console.log("I am Vue!")

const demo = new Vue({
  delimiters: ['[[', ']]'],
  el: '#vue_demo',
  components: {
    'button-counter' : ButtonCounter,
    'spots-list' : SpotsList
  }
})
