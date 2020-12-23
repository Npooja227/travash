<template>
  <div>
    <b-col>
      <!-- Search Field -->
      <b-row class="mb-3">
        <b-col cols="12" lg="5" md="5" class="mr-auto mt-4 ml-4">
          <b-input-group class="input-group input-group-merge">
            <div class="input-group-prepend">
              <div class="input-group-text bg-white">
                <span class="fa fa-search text-muted"></span>
              </div>
            </div>
            <b-form-input id="search" v-model="search" type="text" size="md" placeholder="Search Images"
              class="form-control form-control-prepended list-search" @keyup="getAlbum()"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <hr class="py-1 mt-4" />
      <b-row class="mb-3">
        <!-- Loader -->
        <div class="spinner-border m-auto" role="status" v-if="isLoading">
          <span class="sr-only">Loading...</span>
        </div>
        <!-- Images List -->
        <template v-else>
          <div v-for="(image,index) in images" :key="index" class="p-3 center">
            <img :src="image.webformatURL" :width="image.webformatWidth" :height="image.webformatHeight"
              :alt="search.trim().length > 0 ? search : image.tags.split(',')[0]">
          </div>
        </template>
      </b-row>
    </b-col>
  </div>
</template>
<script>
import Album from '../../src/js/album'
export default {
  data () {
    return {
      isLoading: true,
      images: [],
      search: ''
    }
  },
  mounted () {
    this.getAlbum()
  },
  methods: {
    // Getting Images
    getAlbum () {
      this.isLoading = true
      Album.get(this.search).then(response => {
        console.log(response)
        this.images = response.hits
        this.isLoading = false
      })
    }
  }
}
</script>
<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
