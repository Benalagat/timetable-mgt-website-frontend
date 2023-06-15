import axios from "axios"
import {ref} from "vue";
const users = ref([])
const admins = ref([])

const token=localStorage.getItem('token');
const headers = {
    'Authorization': `Bearer ${token}`,
};
const getAdmins=async () =>{
    const res = await axios.get('http://127.0.0.1:8000/api/show_admins', {
        headers
    });
    // console.log(res)
    if(res.status===200){
        admins.value =  res.data
    }
}
const getUsers=async () =>{
    const res = await axios.get('http://127.0.0.1:8000/api/show_users', {
        headers
    });
    console.log(res)
    if(res.status===200){
        users.value =  res.data
        console.log()
    }
}
// fetching from db ends here

// finding single user
const username = ref('')
const name = ref('')
const user_id = ref('')
const email = ref('')
const role = ref('user')

function editUser(id){

// alert(id)
    user_id.value=id

    const user_to_edit = users.value.filter(users=>users.id === id)
    // console.log(user_to_edit)

    if (user_to_edit.length > 0) {
        username.value = user_to_edit[0].name; // Replace "name" with the desired property
        email.value = user_to_edit[0].email; // Replace "name" with the desired property
    } else {
        // Handle case when no matching task is found
    }
    // console.log(user)
}
function assignRole(value){
    role.value=value
}

const saveUser = async () => {
    // alert('creating new user')

    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('role', role.value);

    const res = await axios.post('http://127.0.0.1:8000/api/create_users', formData,{ headers: headers });
    if(res.status === 200){
        getUsers()
    }
}



export default {getUsers,assignRole,users,admins,name,getAdmins,editUser,saveUser,role,username,email,user_id}