<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>


      <nav>
        <RouterLink to="/">Étterem</RouterLink>
        <RouterLink to="/Reservation">Foglalás</RouterLink>
      </nav>
   

  <RouterView />
</template>

<style scoped>
nav
{
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
}
nav a
{
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;

}

</style>
