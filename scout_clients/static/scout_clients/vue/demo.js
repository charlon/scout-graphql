import Vue from 'vue/dist/vue.js';
import SpotsList from "./components/spots-list.vue";
import ButtonCounter from "./components/button-counter.vue";
require('./demo.css');

Vue.component('button-counter-literal', {
  template: `
      <div style="margin-bottom:25px;">
          <button v-on:click="count++">You clicked me {{ count }} {{ blah }} times. (string literal component)</button>
      </div>
  `,
  data: function () {
    return {
      count: 0,
      blah: 'badsfj assadflkj'
    }
  }
})

Vue.component('button-counter-inline', {
  data: function () {
    return {
      count: 0,
      blah: 'balskdfjalkjsda'
    }
  }
})

const demo = new Vue({
  delimiters: ['[[', ']]'],
  el: '#vue_demo',
  components: {
    'button-counter' : ButtonCounter,
    'spots-list' : SpotsList
  }
})
