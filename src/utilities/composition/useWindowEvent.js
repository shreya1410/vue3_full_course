import {onMounted, onUnmounted} from "vue";

export default  function useWindowFunction(eventname,handleEvent){
    onMounted(()=>{
        window.addEventListener(eventname,handleEvent)
    });
    onUnmounted(() =>{
        window.removeEventListener(eventname,handleEvent);
    });
}