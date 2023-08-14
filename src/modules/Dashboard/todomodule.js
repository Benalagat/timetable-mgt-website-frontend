import axios from "axios";
import {onMounted, ref} from "vue";

const token=localStorage.getItem('token');
const tasks=ref([])

const headers = {
    'Authorization': `Bearer ${token}`,
};
const getTodos=async () =>{

    const res = await axios.get('https://test.kwetunyumbani.online/api/show-tasks', {
        headers
    });
    console.log(res)
    if(res.status===200){
        tasks.value=  res.data

    }
}
const deleteTask=async (id)=>{
    // alert(id)
    const response = await axios.delete(`https://test.kwetunyumbani.online/api/tasks/${id}`);
    if(response.status===200){
        console.log(response.data)
        getTodos()

    }
}

const todo = ref(null);
const todo_id = ref('');
const error = ref(null);
const showSuccess=ref(false)

function clearFields(){
    todo.value=null
}
const submitTodo = async () => {
    // alert(id)

    if(todo.value === null || todo.value.trim() === ''){
        error.value = 'Todo cannot be empty';
    }
    else{
        showSuccess.value = true
        const formData = new FormData();

        formData.append('todo', todo.value);
        formData.append('todo_id', todo_id.value);

        const res = await axios.post('https://test.kwetunyumbani.online/api/tasks', formData, { headers: headers });
        if (res.status === 200) {
            getTodos();
            clearFields()
            todo_id.value=null
            todo.value=null

        }
    }

};


function edit_Todo(id){


    todo_id.value=id

   const todo_to_edit = tasks.value.filter(tasks=>tasks.id === id)


    if (todo_to_edit.length > 0) {
        todo.value = todo_to_edit[0].todo; // Replace "name" with the desired property
    } else {
        // Handle case when no matching task is found
    }
}


export default { alert,getTodos,showSuccess,clearFields,submitTodo,deleteTask,tasks,todo,edit_Todo,todo_id,error}
