<script setup>
import {ref} from 'vue'
import draggable from 'vuedraggable';

const meals = ref([
    'githeri',
    'maharagwe',
    'mboga',
    'chapo'
])

</script>

<template>
<p>This is the defaul page of rouuter</p>
<draggable v-model="meals" tag="ul">
<template #item="{element:meal}">
<li>{{ meal }}</li>
</template>
</draggable>


<div class="user">
    <div class="card-body">
      <!-- Button trigger Add user -->

      <button data-bs-toggle="modal" @click="assignRole('user')" data-bs-target="#admin_add_user" class="button btn mt-2 btn-success"> <i class="fas fa-plus"></i> Add User</button>

      <!-- end Add user -->


      <table class="table table-borderless datatable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">User Names</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" colspan="2">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user" draggable @end="onDragEnd">
          <th scope="row"><a href="#">#{{user.id}}</a></th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.role}}</td>
          <td>
          <span class="badge bg-success p-2" @click="editUser(user.id)" data-bs-toggle="modal" data-bs-target="#editUser">
                   Edit Role</span>
          </td>
          <td><span class="badge bg-danger p-2" @click="updateUser">Delete</span></td>
        </tr>
        </tbody>
      </table> 
    </div>
  </div>
</template>

<style scoped>

</style>