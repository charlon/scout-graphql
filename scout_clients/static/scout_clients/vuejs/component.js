var ComponentA = Vue.component('button-counter', {
  template: `
      <div style="margin-bottom:25px;">
          <button v-on:click="count++">You clicked me {{ count }} times.</button>
      </div>
  `,
  data: function () {
    return {
      count: 0
    }
  }
})
