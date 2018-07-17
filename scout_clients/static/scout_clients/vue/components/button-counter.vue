<template>
  <div>
    <div>
      <small class="text-muted">The following is a single file component...</small>
    </div>
    <div class="my-3 p-3 bg-white rounded box-shadow">
      <h6 class="border-bottom border-gray pb-2 mb-0">Button Component</h6>
      <div class="pt-3">
        <button type="button" class="btn btn-outline-secondary btn-sm blah" v-on:click="count++">You clicked me {{ count }} times. {{ blah }}. (single file component)</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0,
        blah: 'This is extra!'
      }
    }
  }
</script>

<style>
.blah { color: red; }
</style>
