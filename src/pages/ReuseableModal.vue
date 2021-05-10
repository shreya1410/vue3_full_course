<template>
<section class="flex flex-wrap w-full">
  <div class="m-auto">
     <h1 class="text-2xl my-5">
       Re-Usable Modal</h1>
    <Modal v-if="isRedModalOpen" @close="isRedModalOpen=false">
      <template v-slot:title>
         modal 1
      </template>
      <template v-slot:body>
        <p>This is body slot</p>
      </template>
    </Modal>
    <button class="border rounded px-2 mx-3 bg-blue-600 text-white" @click="isRedModalOpen=true">Modal 1</button>

    <Modal v-if="isBlueModalOpen" @close="isBlueModalOpen=false">
      <template v-slot:title>
       modal 2
      </template>
      <template v-slot:body>
        <p>This is body slot 2</p>
      </template>
    </Modal>
    <button class="border rounded px-2 mx-3 bg-blue-600 text-white" @click="isBlueModalOpen=true"> Modal 2 </button>
  </div>

</section>
</template>

<script>
import Modal from "@/components/Modal";
import {ref} from 'vue';
export default {
name: "ReuseableModal",
  components :{Modal},
  setup(){
  const isRedModalOpen = ref(false)
  const isBlueModalOpen = ref(false)
    return{isRedModalOpen ,isBlueModalOpen}
  }
}
</script>

<style scoped>

</style>