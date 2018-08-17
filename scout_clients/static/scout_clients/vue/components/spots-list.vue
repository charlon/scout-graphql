<template>
  <div>

    <div>
      <small class="text-muted">The following component...</small>
    </div>

    <div class="my-3 p-3 bg-white rounded box-shadow">

      <h6 class="border-bottom border-gray pb-2 mb-0">{{title}}</h6>

      <div class="pt-3" v-if="loading">
        Loading.....
      </div>
      <ul v-else class="p-0">
          <li v-for="spot in spots" class="media text-muted pt-3">
            <img src="http://via.placeholder.com/32x32" alt="" class="mr-2 rounded">
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong class="d-block text-gray-dark">{{ spot.name }}</strong>
              {{ spot.building_name }}<br/>
              {{spot.latitude }}, {{ spot.longitude }}
            </p>
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        title: 'All Spots',
        loading: true,
        spots: []
      }
    },
    mounted () {
      this.loading = true;
      axios
        .get('/spots.json')
        .then(response => {
          this.spots = response.data
          this.loading = false
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        });
    }
  }
</script>

<style>

</style>
