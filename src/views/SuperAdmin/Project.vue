
<script setup>
import router from "@/router";
import axios from "axios"
import {onMounted, ref} from "vue";
const projects=ref([])
const name = ref([])
const description = ref([])

const token=localStorage.getItem('token');
const headers = {
    'Authorization': `Bearer ${token}`,
};
const edited_project_id = ref(null)
async function createProject (event) {
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('description', description.value);
    let url = 'http://127.0.0.1:8000/api/addprojects'
    if (edited_project_id !== null) {
      url = url + '/' + edited_project_id.value
    }
    const res = await axios.post(url, formData,{ headers: headers })

    if(res.status === 200){
        alert('Created successfully')
      getProject()
    }
}
async function getProject(event){
    const response= await axios.get('http://127.0.0.1:8000/api/getprojects',{ headers: headers })  
    if(response.status == 200){
        // console.log('DKJNDJBJKDNXNDJN')
        projects.value=response.data.data
        // console.log()
    }
   
}
onMounted(()=>{
    getProject()
})
let modal_title= ref(null)
function editProject(project) {
  if (project !=null) {
    name.value = project.name
    edited_project_id.value = project.id
    description.value = project.description
    modal_title.value = 'Edit Project'
  } else {

    name.value = null,
    modal_title.value = 'Create Project'
    description.value = null
    edited_project_id.value = null
  }
  

}
</script>

<template>
  <!-- Button trigger modal -->

  <button type="button" @click="editProject(null)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Create New Project <span> <i class="fa fa-plus" aria-hidden="true"></i></span>

  </button>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ modal_title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createProject">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="text" v-model="name" class="form-control" id="name" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Description</label>
              <textarea type="description" v-model="description" class="form-control" id="exampleInputPassword1" />
            </div>  
            <button type="submit" data-bs-dismiss="modal"  class="btn btn-primary">Submit</button>
          </form>
        </div>
    
      </div>
    </div>
  </div>
  <div class="project">
    <div class= "card-body">
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th colspan="2">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="project in projects" :key="project">      
      <td>{{project.name}}</td>
      <td>{{project.description}}</td>
      <td><button @click="editProject(project)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button></td>
      <td>
        <router-link :to="`/projects/overview/${project.id}`" class="btn btn-success">Manage</router-link>
</td>

    </tr>
  </tbody>
</table>


</div>
</div>
</template>

<style scoped>

</style>
