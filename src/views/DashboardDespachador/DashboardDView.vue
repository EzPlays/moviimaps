<template>
<div class="n">

    <div class="d-flex">
        <SidebarDComponent class="c  my-2"/>  
         <div class="rout bg-white bg-opacity-75 my-2">
            <router-view/>
        </div>          
        </div>

           <FooterComponent />

    </div>


</template>

<script>


import SidebarDComponent from '@/components/SidebarDComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    name: "DashboardDView",
    components:{
    SidebarDComponent,
    FooterComponent
}
}
</script>

<style scoped>

.n{
    background-size: cover;
    height: 100%;
    background-image: url(/src/assets/pop.jpeg) ;

    
}

.c{
    width: 18%;
}
.rout{
  

     width: 80%;
     margin-left:1%;
     margin-right:1%;
}
</style>