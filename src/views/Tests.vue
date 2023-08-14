<template>
  <div>
    <table>
      <tbody>
        <draggable v-model="meals" tag="tbody">
          <template #item="{ element: meal }">
            <tr :key="meal">
              <td>{{ meal }}</td>
            </tr>
          </template>
        </draggable>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';

const meals = ref(['githeri', 'maharagwe', 'mboga', 'chapo']);
</script>

<style scoped>

</style>
