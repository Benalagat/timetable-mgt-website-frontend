<template>
    
 
    <div class="row d-flex mt-5 justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>
              <div v-show="message" class="error   text-white "><p style="padding: 0.2rem; font-size: 28px; background: red;" class=" text-lg-start ">{{error}}</p></div>
            <form @submit.prevent="submit">
            <div class="form-outline mb-4">
              <label>Email</label>
              <input v-model="email" type="email" id="typeEmailX-2" class="form-control form-control-lg" />
            </div>

            <div class="form-outline ">
              <label class="form-label" >Password</label>
              <input v-model="password" type="password" id="typePasswordX-2" class="form-control form-control-lg" />
            </div>
            <button type="submit" class="btn my-4 w-100 btn-primary btn-lg btn-block">Login</button>
            <div>
              <RouterLink to="/forgot-password">
                <p class="mb-0 pd-5">Forgot Password </p>
              </RouterLink>
            </div>
            <div>
                <p class="mb-0">Don't have an account? <a href="/register" >Sign Up</a>
              </p>
            </div>
            </form>
            

          </div>
        </div>
      </div>
    </div>


</template>
<script setup>
import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";


const router=useRouter()
const message=ref(false)
const email=ref('')
const password=ref('')
const error=ref('')
const submit = async  () => {
  const formData = new FormData()
  formData.append('email', email.value)
  formData.append('password', password.value)

  const res = await axios.post('http://127.0.0.1:8000/api/login', formData)
  if(res.status === 200){
    // console.log(res.data.message)
    const id_no=res.data.user.role_id;
    const role=res.data.user.role;

    if (res.data.status === 'failed') {
     error.value=res.data.message
      alert();
      message.value = true;
    }else {
      localStorage.setItem('token', res.data.token)

      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', role)
      localStorage.setItem('id', id_no)
      window.location.href = '/';
      }
  }

}
</script>