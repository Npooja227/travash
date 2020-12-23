import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Album from '@/components/Album'
import CustomerList from '@/components/CustomerList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },
    {
      path: '/customer',
      name: 'CustomerList',
      component: CustomerList
    }
  ]
})
