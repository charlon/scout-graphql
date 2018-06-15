import Vue from 'vue/dist/vue.js';
import axios from 'axios';
import ButtonCounterVue from "./components/button-counter.vue";

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
    'button-counter-vue' : ButtonCounterVue
  },
  data: {
    title: 'All Spots',
    loading: true,
    spaces: null
  },
  mounted () {
    this.loading = true;
    axios
      .get('/api/v1/spots/?format=json')
      .then(response => {
          this.spaces = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
