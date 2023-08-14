import axios from "axios";
import {ref} from "vue";
const reviews = ref([]);
const review=ref('')
const review_id=ref('')
const error = ref(null);
const description=ref('')
const showSuccess=ref(false)
const reviewerror=ref('')


const token=localStorage.getItem('token');
const head = {
  'Authorization': `Bearer ${token}`,
};
function clearFields(){
  review.value=null
}
function showReview(){
  reviews.value=true
}
const submitReview = async () => {

  if(description.value === null || description.value.trim() === ''){
    reviewerror.value = 'description cannot be empty';
  }
  else{
      showSuccess.value = true
      const formData = new FormData();

      formData.append('description', description.value);
      
      
      const res = await axios.post('https://test.kwetunyumbani.online/api/addReview', formData, { headers: head });
      if (res.status === 200) {
          getReviews();
          clearFields()
          review_id.value=null
          description.value=null

      }
  }

};
const getReviews = async () => {
  const response = await axios.get('https://test.kwetunyumbani.online/api/get-reviews',{headers:head});
  reviews.value = response.data
}
function show_single_review(){
  alert("hello");
}
const editreviews=ref([])

function editReview (id){
  editreviews.value = reviews.value.filter(reviews => reviews.id === id);
  // console.log(editreviews.description);

}
const  markComplete = async (id)=>{
  // alert(id)
  const res = await axios.get(`https://test.kwetunyumbani.online/api/mark_completed/${id}`,{
    headers:head
  });
  if(res.status==200) {
    alert('edited successfully')
    // console.log(taskstoedit.value)
  }
  else {
    alert('error in network')
  }
}
export  default {editreviews, markComplete, reviews,editReview, getReviews, show_single_review,showReview,submitReview,reviewerror,description,review_id };