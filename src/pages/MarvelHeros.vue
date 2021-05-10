<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Marvel Heros {{herosCount}}</h1>
    <ul>
      <li  class="flex justify-between" v-for="(hero,index) in marvelHeros" :key="index">
        <div> {{hero.name}}</div>
        <button v-on:click="removeHero(index)">x</button>
      </li>
    </ul>
    <form  class="mt-10" @submit.prevent="addHero">
      <input  class="border rounded" v-model="newHero"
              placeholder="enter hero"
              ref="newHeroRef"
      />
      <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"
              type="submit">Add hero</button>
    </form>
  </div>
</template>

<script>
import {onMounted, ref,computed } from "vue";
export default {
name: "MarvelHeros",
  setup(){
  const newHeroRef = ref("");
   const newHero = ref("");
    const marvelHeros = ref([
      {name : "Iron man"},
      {name : "Captain america"},
      {name : "Doctor Strange"},
      {name : "Hulk"}
    ]);
    onMounted(()=>{
     newHeroRef.value.focus();
    });
   const herosCount = computed({
     get: () => marvelHeros.value.length
   });
    function removeHero(index){
     marvelHeros.value= marvelHeros.value.filter((hero,i) => i != index )
    }
    function addHero(){
      if(newHero.value != ''){
        marvelHeros.value.push({name:newHero.value});
        newHero.value ='';
      }
      else
      {
        alert('please enter hero')
      }
    }
    return {marvelHeros , newHero ,removeHero , addHero , newHeroRef , herosCount}
  },
}
</script>

<style scoped>

</style>