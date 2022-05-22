<template>

<nav-bar />
<div class="container">
    <div class="row">
      
      <div class="col-9">

         <router-view />

      </div>
       <div class="col-3">

         <side-bar />

      </div>
      

</div>
<div class="row">
  <pooter/>
</div>
</div>



 
 
</template>


<script>
import NavBar from "@/components/page/NavBar.vue";
import SideBar from "@/components/page/SideBar.vue";
import Pooter from "@/components/page/Pooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    Pooter,
  },
};
</script>