<template>
  <div style="margin-bottom:25px;">
    <button v-on:click="count++">You clicked me {{ count }} times. (single file component)</button>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        count: 0
      }
    }
  }
</script>
<style lang="scss">
#ButtonCounter {
  // some scss rules
}
</style>
