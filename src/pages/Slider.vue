<template>
  <div class="flex flex-wrap w-full relative">
    <div class=" absolute w-full" v-for="(color,index) in sliders" :key="color">
   <transition name="fade">
      <div v-if="currentslide===index"
         :class="color"
         style="height: 350px"></div>
   </transition>
   </div>

    <div class="w-full"  style="height: 340px">
      <div class="absolute bottom-0 flex w-full justify-center">
      <div v-for="(slider,index) in sliders" :key="slider"
           @click="makeActive(index)"
           :class="currentslide === index ? 'bg-gray-700' : 'bg-gray-300' "
          class="w-4 h-4 mx-2  rounded-full cursor-pointer shadow-md"></div>
      </div>
    </div>
<!--    <div class="my-10 flex w-full">-->
<!--      <div class="m-auto">-->
<!--        <transition name="fade">-->
<!--          <h1 v-if="isTitleShowing">Slider carousel</h1>-->
<!--        </transition>-->
<!--        <button  @click="isTitleShowing= !isTitleShowing"-->
<!--            class="px-2 rounded border">Toggle Text</button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
name: "Slider",
  data(){
  return{
    currentslide: 1,
    sliders :['bg-pink-600','bg-blue-600','bg-yellow-600'],
    interval : "",
    isTitleShowing:true,
  };
  },
  methods:{
  makeActive(index){
    this.currentslide = index;
  },
  },
  mounted() {
  this.interval = setInterval(()=>{
    this.currentslide = this.currentslide === 2 ? 0 :  this.currentslide+1;
  },2000);
  },
  beforeUnmount() {
  clearInterval(this.interval)
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active{
  transition: all 1s ease;
}
.fade-enter-from{
  opacity: 0;
  transform: translateX(-100%);
}
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
  transform: translateX(100%);
}

</style>