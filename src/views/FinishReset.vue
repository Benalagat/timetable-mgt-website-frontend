<script setup>
import axios from "axios"
import {onMounted, ref} from 'vue'
import {useRoute} from "vue-router";
const success=ref('')
const password=ref('')
const c_password=ref('')
const otp= ref('')
const route =useRoute()
// alert(otp.value)
otp.value=route.params.id
const resetPassword = async()=>{
  const formData = new FormData()
  formData.append('password',password.value)
  const res=await axios.post(`http://127.0.0.1:8000/api/change_password/${otp.value}`,formData)
  if(res.status===200){
    if(res.data.status==='success'){
      success.value=res.data.message
    }
    else{
      error.value=res.data.message
    }
  }
}

</script>

<template>
  <section class="vh-100">
    <div class="container reset">
      <div class=" d-flex align-content-center justify-content-center align-items-center h-100">
        <form @submit.prevent="resetPassword">
          <h3> Reset password here</h3>
          <div class="form-group">
            <div v-if="error" style="background: red; padding:0.4rem;" class="error">{{error}}</div>
            <div v-if="success" style="background: blue; color:white; padding:0.4rem;" class="error">{{success}}</div>
          <label>Password</label>
            <input type="text" class="form-control" v-model="password">
            <label for="">Confirm Password</label>
            <input type="text" class="form-control" v-model="c_password">
            <button class="btn mt-2 w-100 btn-primary btn-block" type="submit">Reset</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<style>
.reset{
  height: 100vh;
}
</style>