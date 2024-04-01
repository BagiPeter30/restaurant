<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const peoples = ref([]);
onMounted(() =>
{
    axios.get('http://localhost:3000/reservations')
    .then(resp => peoples.value = resp.data);
});




</script>

<template>
    <button type="button" class="btn btn-warning lh-md fw-bold mx-3">
        Foglalások
    </button>
<div class="container mt-3">
    <div class="row d-flex flex-column">
        <div class="col mb-3" v-for="p in peoples">
            <div class="card border-primary text-white bg-dark lh-sm" style="width: 19rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-dark lh-sm">A foglalást leadó személy: {{ p.prsonname }} </li>
                <li class="list-group-item text-white bg-dark lh-sm">Érkezés dátuma: {{ p.datetime }}  </li>
                <li class="list-group-item text-white bg-dark lh-sm">Érkezés órája: {{ p.starthour }} óra.</li>
            </ul>
            <div class="card-footer">
                {{ p.prsonname }} és további {{ p.pnum }} személy részére.
            </div>
            </div>
        </div>
    </div>
</div>
</template>

