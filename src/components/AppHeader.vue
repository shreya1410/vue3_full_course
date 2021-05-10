<template>
<nav class="w-full bg-gradient-to-r from-blue-800
to-blue-600 text-white px-4 py-2">
  <router-link v-for="item in list"
               :key="item.to"
               class="mx-2"
               :to="item.to">{{item.title}}</router-link>

  <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
  <button v-else class="mx-2"  @click="openLogin">Login</button>

</nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
name: "AppHeader",
  data()
  {
    return{
      list:[
        {title :"Marvel heros" ,to :"/marvel-heros"},
        {title :"Calender" ,to :"/calender"},
        {title :"Markdown" ,to :"/markdown"},
        {title :"Slider" ,to :"/slider"},
        {title :"Calculator" ,to :"/calculator"},
        {title :"Modal" ,to :"/reuseable-modal"},
        {title :"Chat" ,to :"/chats"},
        {title :"User Crud" ,to :"/user-crud"},
        {title :"Tensor Flow" ,to :"/tensorflow"},
      ]
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods:{
  logout(){
    firebase
        .auth()
        .signOut();
        // .then(res =>{})
        // .catch((e)=>{})
  },
    openLogin() {
      this.$store.commit("setLoginModal", true);
    },
  },
};
</script>

<style scoped>

</style>