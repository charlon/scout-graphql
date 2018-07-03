<template>
  <div>
    <h2 class="vue-header"> {{ title }}</h2>

    <div v-if="loading">
      Loading.....
    </div>

    <ul class="media-list vue-list">
        <li v-for="spot in spots" class="media">
           <div class="media-left">
              <a href="#"><img className="media-object" src="http://via.placeholder.com/60x60" alt="..." /></a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{ spot.name }}</h4>
            <p>{{ spot.building_name }}<br/>
            {{ spot.latitude }}, {{ spot.longitude }}</p>
          </div>
       </li>
    </ul>

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
        .get('/api/v1/spots/?format=json')
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
