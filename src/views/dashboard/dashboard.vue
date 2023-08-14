<template>


  <!-- Start of Header -->
      <Header />
  <!-- end of Header -->

  <!-- start of Sidebar -->

  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav"  v-if="role==='user'">

      <li class="nav-item">
        <div class="nav-link " href="index.html">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </div>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
          <i class="bi bi-menu-button-wide"></i><span>Tasks</span><i class="bi bi-chevron-down ms-auto"></i>

          <!--            #################################################-->
        </a>
        <ul>
          <li id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span  @click="clearFields()" style="text-align:left; color: blue;" data-bs-toggle="modal" data-bs-target="#add">
              Add task
            </span>
          </li>
          <li id="components-nav" class="nav-content collapse " >
            <i class="fa fa-eye" aria-hidden="true"></i>
            <span   style="text-align:left; color: blue;">
             View tasks
            </span>
          </li>

        </ul>
      </li>

      <li class="nav-item" >
        <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-bar-chart"></i><span>weekly Goals</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li class="ms-4 pb-1">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span class="text-decoration-underline">Add  goals</span>
          </li>
          <li class="ms-4">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span class="text-decoration-underline">View Goals</span>
          </li>

        </ul>
      </li><!-- End Charts Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-gem"></i><span>Yearly Goals</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li class="ms-4 pt-2">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span>Add Goal</span>
          </li>
          <li class="ms-4 pt-2">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span>View goals</span>
          </li>

        </ul>
      </li><!-- End Icons Nav -->

      <li class="nav-heading">Pages</li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="users-profile.html">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </a>
      </li><!-- End Profile Page Nav -->

    </ul>
    <ul class="sidebar-nav" id="sidebar-nav"  v-else-if="role==='super_admin'">
      <li class="nav-item">
        <router-link to="/" class="nav-link ">
          <i class="bi bi-grid"></i>
          <span>Admins</span>
        </router-link>
      </li><!-- End Dashboard Nav -->
  
     <!-- End Dashboard Nav -->
      <li class="nav-item">
        <router-link to="users" class="nav-link ">
          <i class="bi bi-grid"></i>
          <span>Users</span>
        </router-link>
      </li><!-- End Dashboard Nav -->
<!-- End Dashboard Nav -->
      <li class="nav-item">
        <router-link to="projects" class="nav-link ">
          <i class="bi bi-grid"></i>
          <span>Projects</span>
        </router-link>
      </li><!-- End Dashboard Nav -->




      <li class="nav-item" >
        <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Projects</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li class="ms-4 pb-1">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span class="text-decoration-underline">Create Project</span>
          </li>
          <li class="ms-4">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span class="text-decoration-underline">View Projects</span>
          </li>

        </ul>
      </li>
    </ul>
    <ul v-else>
      <li>Admin Zone</li>
    </ul>
  </aside>

  <!-- start of Sidebar -->

<!-- Start of Modal for adding and editing  to do-->
  <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header w-100">
          <h1 class="modal-title fs-5" id="exampleModalLabel" style="font-weight: bold; width: 100%; text-align: center; color:#0000FF;">Add To Do</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <label style="padding-left: 20px;">Enter your todo </label>
        <div class="modal-body">
            <textarea name="todo" v-model="todo" id="" cols="30" rows="3" class="form-control" placeholder="Enter the to do here ....."></textarea>
            <span class="text-danger" v-if="error">{{ error }}</span>
            <br>

              <div class="float-end" v-if="todo">
                <button type="button" @click="submitTodo(todo_id)" class="btn btn-secondary" data-bs-dismiss="modal">Add</button>
              </div>

                 <div class="float-end" v-else="todo">
                    <button type="button" @click="submitTodo(todo_id)" class="btn btn-secondary">Add</button>
                </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End of Modal for adding and editing  to do-->

  <!--modal for adding review -->
  <div class="modal fade" id="addreview" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header w-100">
          <h1 class="modal-title fs-5" id="exampleModalLabel" style="font-weight: bold; width: 100%; text-align: center; color:#0000FF;">Add Review</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <label style="padding-left: 20px;">Enter your Review </label>
        <div class="modal-body">
            <textarea name="description" v-model="description" id="" cols="30" rows="3" class="form-control" placeholder="Enter the review here ....."></textarea>
            <!-- <span class="text-danger" v-if="error">{{ reviewerror }}</span> -->
            <br>
            <label class="text-danger">{{ reviewerror }}</label>
              <div class="float-end" v-if="description">
                <button type="button" @click="submitReview()" class="btn btn-secondary" data-bs-dismiss="modal">Add</button>
              </div>

                 <div class="float-end" v-else="description">
                    <button type="button" @click="submitReview()" class="btn btn-secondary">Add</button>
                </div>
        </div>
      </div>
    </div>
  </div>

   <!-- End of madal for adding review -->

  <main id="main" class="main">

    <!-- End Page Title -->
    <router-view></router-view>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <Footer />
  <!-- End Footer -->


</template>
<script setup>
import todomodules from '@/modules/Dashboard/todomodule'
import weeklygoalmodule from '@/modules/Dashboard/weeklygoalmodule'
import dateupdates from '@/modules/Dashboard/dateupdate';
import todomodule from '@/modules/Dashboard/todomodule'
import reviewsmodule from "@/modules/reviews";
import {onMounted, ref} from "vue";
import Header from "@/views/includes/header.vue";
import Footer from "@/views/includes/Footer.vue";
import axios from "axios";
import {useRouter} from "vue-router";
import user from "@/modules/superadmin/user";

const selectedOption = ref(null);
const options = [
  { label: 'user', value: 'user' },
  { label: 'admin', value: 'admin' },
  { label: 'super_admin', value: 'super_admin' }
];
const users_btn = ref(null)
const admins_btn = ref(null)
const showUsers = ref(false)
const showAdmins = ref(true)
function populateUsers () {
  users_btn.value.classList.add('bg-primary','text-white')
 admins_btn.value.classList.remove('bg-primary','text-white')
  admins_btn.value.classList.remove('active')
  showUsers.value = true
  showAdmins.value = false
}
function populateAdmins () {
  users_btn.value.classList.remove('bg-primary','text-white')
  admins_btn.value.classList.add('bg-primary','text-white')
  users_btn.value.classList.remove('active')
  showUsers.value = false
  showAdmins.value = true
}

const role=localStorage.getItem('role')
const router= useRouter()
const token=localStorage.getItem('token');
if(!token){
    window.location.href = '/login';
}
const auth = {
  'Authorization': `Bearer ${token}`,
};
const headers = {
  'Authorization': `Bearer ${token}`,
}
const updateUser = async (id) =>{
  const formData = new FormData()
  formData.append('role', selectedOption.value);
  const res = await axios.post(`https://test.kwetunyumbani.online/api/users/update-user/${id}`, formData, {
    headers
  });
  // console.log(res)
  if(res.status===200){
    alert('success')
  }
}
// #######   Authenticate user
const authUser = async () => {
  const authHeader = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };

  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user-auth', authHeader);
    console.log('okay');
  } catch (error) {
    // localStorage.removeItem('token');
    // Token is invalid or expired, logout the user
    window.location.href = '/login';
  }
};

// End of Auth user


let {getRandomWeekGoals, randomWeekGoals}=weeklygoalmodule
let {currentDate,updateCurrentDate}=dateupdates
let {users,editUser,getAdmins,admins,username,email,user_id,name,assignRole,saveUser,getUsers}=user


let{getTodos,tasks,showSuccess,clearFields,deleteTask,submitTodo,error,todo,edit_Todo,todo_id,}=todomodules
let  {editreviews, reviews,editReview, markComplete, getReviews, show_single_review,showReview,submitReview,description,reviewerror, review_id }=reviewsmodule
// let {saveUser,name,email,role}=userdetails
const truncatedLength = ref(10);

const edit_id = ref('')
const edit_task=ref([]);

function editTask(id){

  edit_id.value=id
  // edit_id=id
  edit_task.value=tasks.value.filter(tasks=>tasks.id === id)
}
function truncatedDescription(description) {
  if (description.includes(reviews)) {
    return description;
  } else {
    const words = description.split(' ');
    if (words.length > truncatedLength.value) {
      return words.slice(0, truncatedLength.value).join(' ');
    } else {
      return description;
    }
  }
}

onMounted(()=>{
  authUser()
  getReviews()
  getTodos()
  getRandomWeekGoals()
  updateCurrentDate()
  getUsers()
  saveUser()
  getAdmins()
})

</script>
<style>
.addTask{

  width: 40rem;
  height: 28rem;
  position: absolute;
  top: 25%;
  left: -100%;
}
</style>