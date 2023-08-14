

<template>
<div class="register d-flex justify-content-center align-items-center">
        <div style="width: 34%;" class="content ">
          <form @submit.prevent="submit">
            <div>
              <ul>
                <li class="bg-danger-light p-2" v-for="(error, key) in errors" :key="key">
                  {{ key }}: {{ error }}
                </li>
              </ul>
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Username</label>
              <input type="text" v-model="name" class="form-control"  aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Email address</label>
              <input type="email" v-model="email" class="form-control"  aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Password</label>
              <input type="password" v-model="password" class="form-control" >
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Confirm Password</label>
              <input type="password" v-model="c_password" class="form-control" >
            </div>

            <button type="submit" class="btn btn-primary w-100">Register</button>
          </form>
          <br>
          <p>Dont have an account ? </p>
          <a href="/login" class="btn btn-success">click here</a>
        </div>
</div>
</template>
<script setup>

import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const router=useRouter()
const errors=ref([])
const name=ref('')
const email=ref('')
const password=ref('')
const c_password=ref('')


const submit = async () => {
  // alert('gfhjkl')/**/
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('password', password.value);
    formData.append('c_password', c_password.value);

    const res = await axios.post('https://test.kwetunyumbani.online/api/register', formData);

  if (res.status === 200) {
    const id_no=res.data.user.role_id;
    const role=res.data.user.role;
    if(res.data.status === 'success'){

      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', role)
      localStorage.setItem('id', id_no)
      window.location.href = '/';
    }
    else {
      errors.value=res.data.error
    }

  }else {


    alert('error in network')
  }

};



</script>



<style scoped>
.register{
  margin-top: 3rem;
  min-height: 100vh;
  max-height: 150vh;
}
</style>