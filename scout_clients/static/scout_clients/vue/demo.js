import Vue from 'vue/dist/vue.js';
import SpotsList from "./components/spots-list.vue";
import ButtonCounter from "./components/button-counter.vue";
require('./demo.css');

Vue.component('button-counter-literal', {
  template: `
  <div>
    <div>
      <small class="text-muted">This component is a string literal...</small>
    </div>
    <div class="my-3 p-3 bg-white rounded box-shadow">
      <h6 class="border-bottom border-gray pb-2 mb-0">Button Component</h6>
      <div class="pt-3">
        <button type="button" class="btn btn-outline-secondary btn-sm" v-on:click="count++">You clicked me {{ count }} {{ blah }} times. (string literal component)</button>
      </div>
    </div>
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

console.log("I am Vue!")

const demo = new Vue({
  delimiters: ['[[', ']]'],
  el: '#vue_demo',
  components: {
    'button-counter' : ButtonCounter,
    'spots-list' : SpotsList
  }
})
