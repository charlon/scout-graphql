var ButtonCounterLiteral = Vue.component('button-counter-literal', {
  template: `
      <div style="margin-bottom:25px;">
          <button v-on:click="count++">You clicked me {{ count }} times. (string literal component)</button>
      </div>
  `,
  data: function () {
    return {
      count: 0
    }
  }
})
