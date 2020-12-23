<template>
  <div id="app">
    <!-- Navbar -->
    <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">Travash</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- Customer -->
        <b-nav-item href="#/customer" :active="tab === 'customer' || $route.name === 'Customer'" @click="tab = 'customer'">Customers</b-nav-item>
        <!-- Album -->
        <b-nav-item href="#/album" :active="tab === 'album' || $route.name === 'Album'" @click="tab = 'album'">Album</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <!-- Create Customer -->
        <b-nav-item-dropdown right class="mt-2 pt-1">
          <template #button-content>
            <span class="fa fa-plus"></span>
          </template>
          <b-dropdown-item @click="$refs['create-customer'].showModal()">Create Customer</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- Profile -->
        <b-nav-item-dropdown right>
          <template #button-content>
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Profile" class="profile">
          </template>
          <b-dropdown-item href="#/profile" @click="tab = 'profile'">Profile</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <customer ref="create-customer"></customer>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Customer from './components/CustomerForm'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Customer
  },
  computed: {
    ...mapGetters([
      'getCustomers'
    ])
  },
  mounted () {
    console.log(this.getCustomers)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.profile {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.dropdown-toggle::after {
  display: none;
}

a.nav-link {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
