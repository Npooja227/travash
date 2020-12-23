<template>
    <div class="border rounded m-5 row">
      <!-- Profile -->
        <div class="col-4">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Profile" class="m-3 user">
            <h4 class="mt-1">{{user.name}}</h4>
            <p class="text-muted mb-0">{{user.email}}</p>
            <p class="text-muted mb-0">{{user.role}}</p>
            <p class="text-muted">{{user.location}}</p>
        </div>
        <div class="col-8">
            <div class="mt-3 px-3 border-bottom d-flex user" v-for="(value, key) in user" :key="key">
                <b class="text-capitalize col-3" :class="!show[key]?'mt-2':''">{{key}}</b>
                <template v-if="show[key]" class="col-9">
                    <p>{{value}}</p>
                    <span class="fa fa-edit pl-2 pt-1" @click="edit(key)"></span>
                </template>
                <template v-else class="col-9">
                    <input type="text" v-model="user[key]" class="form-control mb-3 col-6">
                    <b-button variant="primary" class="mx-2 mb-3" @click="update(key)">Edit</b-button>
                    <b-button variant="light" class="mb-3 btn-outline-secondary" @click="cancel(key)">Cancel</b-button>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        name: 'Pooja',
        email: 'pooja.naraharisetty@gmail.com',
        phone: '9705831214',
        company: 'Travash',
        role: 'Full Stack Developer',
        location: 'Kondapur, Hyderabad',
        website: 'https://www.linkedin.com/in/pooja-naraharisetty-059105115'
      },
      show: {
        name: true,
        email: true,
        phone: true,
        company: true,
        role: true,
        location: true,
        website: true
      }
    }
  },
  mounted () {
    // Assigning user details to local storage
    for (let key in this.user) {
      localStorage.setItem(key, this.user[key])
    }
  },
  methods: {
    // Showing edit field
    edit (type) {
      this.show[`${type}`] = false
    },
    // Removing edit field
    cancel (type) {
      this.show[`${type}`] = true
    },
    // Updating field value in local storage
    update (type) {
      localStorage.setItem(type, this.user[type])
      this.cancel(type)
    }
  }
}
</script>
<style scoped>
img.user {
    height: 200px;
    border-radius: 50%;
}
.user span{
  visibility:hidden;
}
.user:hover span{
 visibility:visible;
}
</style>
