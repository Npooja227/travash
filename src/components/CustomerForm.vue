<template>
  <!-- Create Customer Modal -->
  <b-modal title="Create Customer" no-close-on-backdrop no-close-on-esc ref="create-customer" @ok="add()"
    @cancel="closeModal()" @hidden="closeModal()">
    <b-form-group class="form-group" v-for="(value, key) in form" :key="key">
      <label class="text-capitalize">{{ key }}</label>
      <!-- Input field -->
      <b-form-input :id="key" v-model="form[key]" type="text" size="md" :placeholder="'Enter ' + key"
        class="form-control" v-if="key != 'company' && key != 'address'" required></b-form-input>
      <!-- Company Field -->
      <b-form-input :id="key" v-model="form.company.name" type="text" size="md" :placeholder="'Enter ' + key"
        class="form-control" v-else-if="key == 'company'" ></b-form-input>
      <!-- Address Field -->
      <template v-else-if="key == 'address'">
        <div v-for="(value, item) in form.address" :key="item" class="mt-2">
          <label class="text-capitalize">{{ item }}</label>
          <b-form-input :id="item" v-model="form.address[item]" size="md" :placeholder="'Enter ' + item"
            type="text" class="form-control"></b-form-input>
        </div>
      </template>
    </b-form-group>
  </b-modal>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        username: '',
        email: '',
        phone: '',
        company: {
          name: ''
        },
        website: '',
        address: {
          street: '',
          city: '',
          zipcode: ''
        }
      }
    }
  },
  methods: {
    // Open Modal
    showModal () {
      this.$refs['create-customer'].show()
    },
    // Close Modal & Resetting form
    closeModal () {
      this.$refs['create-customer'].hide()
      for (let key in this.form) {
        if (key !== 'company' && key !== 'address') this.form[key] = ''
        else if (key === 'company') this.form.company.name = ''
        else if (key === 'address') {
          for (let item in this.form.address) this.form.address[item] = ''
        }
      }
    },
    // Add customer
    add () {
      let form = { ...this.form }
      form.company = { ...this.form.company }
      form.address = { ...this.form.address }
      this.$store.state.customers.push(form)
      this.closeModal()
    }
  }
}
</script>
