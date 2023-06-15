<script setup>
import {useRoute} from "vue-router";
import axios from "axios";
import {onMounted, ref} from "vue";
const token=localStorage.getItem('token');
const headers = {
  'Authorization': `Bearer ${token}`,
};

const  route = useRoute()
const id = route.params.id
const details = ref([])

const fetchOverview = async  () =>{
  const res = await axios.get(`http://127.0.0.1:8000/api/fetch_overview/${id}`, { headers: headers });

  if(res.status === 200){
    console.log(res)
    details.value = res.data
  }
}
onMounted(()=>{
  fetchOverview()
})
</script>
<template>
  <div>
    <div class="card w-75">
      <div class="card-body" v-for="detail in details" :key="detail">
        <h5 class="card-title">
          {{detail.name}}
        </h5>
        <p class="card-text">
          {{detail.description}}
        </p>
      </div>
    </div>
  </div>
</template>


