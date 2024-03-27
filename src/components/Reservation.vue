<script setup>
import axios from 'axios';
import { reactive, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const newreservation = () =>
{
  axios.post('http://localhost:3000/reservations', reserv)
  .then(() => 
  {
    router.push("/")
    alert('A foglalás sikeres!')
  });
};

const reserv = reactive(
  {
    prsonname:'',
    telephone:'',
    pnum:'',
    datetime:'',
    starthour:'',
   
  }
);


const hours = ref([]);
onMounted(() => 
{
  for(let i = 11; i < 22; i++)
  {
    hours.value.push(i);
  };
});


</script>

<template>
<div class="container bg-secondary text-ehite fw-bold rounded mt-3">
  <div class=" form-control-sm">
    <form @submit.prevent="newreservation">
      <div class="mb-3">
        <label for="name" class="form-label text-dark">Név</label>
        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" v-model="reserv.prsonname">
      </div>
      <div class="mb-3">
        <label for="tel" class="form-label text-dark">Telefonszám</label>
        <input type="text" class="form-control" id="tel" v-model="reserv.telephone">
      </div>
      <div class="mb-3">
        <label for="peoplenum" class="form-label text-dark">Létszám</label>
        <input type="number" class="form-control" id="peoplenum" placeholder="Létszám (fő)" v-model="reserv.pnum">
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Érkezés dátuma</label>
        <input type="date" class="form-control" id="date" v-model="reserv.datetime">
      </div>
      <label for="hour" class="form-label">Érkezés órája</label>
      <select class="form-select" aria-label="Default select example" v-model="reserv.starthour" id="hour">
        <option v-for="h in hours">{{ h }}</option>
      </select>
      <button type="submit" class="btn btn-warning fw-bold my-3">Foglalás</button>
    </form>
 </div>
</div>
</template>

