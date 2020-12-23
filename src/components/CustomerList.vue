<template>
  <div class="ml-auto mr-auto row container justify-content-center mt-5">
    <!-- Loader -->
    <div class="spinner-border" role="status" v-if="isLoading">
      <span class="sr-only">Loading...</span>
    </div>
    <template v-else>
      <div v-for="(customer, index) in customers" :key="index" class="border rounded col-md-3 m-2 p-2"
        @click="showDetails(index)">
        <p>{{ customer.name }}</p>
        <p>{{ customer.email }}</p>
      </div>
    </template>
    <b-modal id="customerDetails" title="Customer Details" hide-footer no-close-on-backdrop no-close-on-esc>
      <p v-for="(value, key) in customerDetails" :key="key" class="ml-2">
        <template v-if="key != 'id' && key != 'address' && key != 'company'">
          <span class="text-capitalize">{{ key }}</span> : {{ value }}
        </template>
        <template v-else-if="key == 'company'">Company : {{ value.name }}</template>
      </p>
      <p v-if="Object.keys(customerDetails).length > 0" class="ml-2">
        Address : {{ customerDetails.address.street }},
        {{ customerDetails.address.city }} -
        {{ customerDetails.address.zipcode }}
      </p>
    </b-modal>
  </div>
</template>
<script>
// import CustomerAPI from '../../src/js/customer'
export default {
  data () {
    return {
      isLoading: true,
      customers: [],
      customerDetails: {}
    }
  },
  mounted () {
    // this.getCustomers()
    this.customers = this.$store.state.customers
    this.isLoading = false
  },
  methods: {
    // getCustomers () {
    //   CustomerAPI.get().then(response => {
    //     this.customers = response
    //     this.isLoading = false
    //   })
    // },
    showDetails (index) {
      // this.customerDetails = Object.assign({}, this.customerDetails, this.customers[index])
      this.customerDetails = this.customers[index]
      this.$bvModal.show('customerDetails')
    }
  }
}
</script>
<style scoped></style>
