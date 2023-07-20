<script setup>
    import axios from "axios"
    import{ref} from 'vue'
    const email=ref('')
    const error=ref('')
    const success=ref('')
    const handleForgotPassword = async()=>{
      const formData = new FormData()
      formData.append('email',email.value)
        const res=await axios.post('http://127.0.0.1:8000/api/reset_password',formData)
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
          <form @submit.prevent="handleForgotPassword">
              <h3> Forgot password</h3>
              <div class="form-group">
                <div v-if="error" style="background: red; padding:0.4rem;" class="error">{{error}}</div>
                <div v-if="success" style="background: blue; color:white; padding:0.4rem;" class="error">{{success}}</div>
                  <label>Email</label>
                  <input type="email" v-model="email" class="form-control" placeholder="email"/>
                  <button class="btn mt-2 w-100 btn-primary btn-block" type="submit">Submit</button>
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
