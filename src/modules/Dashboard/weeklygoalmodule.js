import axios from "axios";
import {ref} from "vue";
const randomWeekGoals = ref('');

async function getRandomWeekGoals() {
  try {
    const response = await axios.get('https://test.kwetunyumbani.online/api/getRandomWeekGoal');
    if (response.status === 200) {
      randomWeekGoals.value = response.data;
    } else {
      console.error('Error fetching random week goals:', error);
    }
  } catch (error) {
    console.error('Error fetching random week goals:', error);
  }
}
export default {getRandomWeekGoals, randomWeekGoals}