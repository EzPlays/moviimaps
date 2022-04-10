<template>
<div class="n" >


    <div class=" d-flex ">
        <SidebarComponent class="c "/>  
         <div class="rout bg-white bg-opacity-75 my-2 py-2">
            <!-- <FormularioComponent/> -->
            <router-view/>

            <div class="align-self-end">
                
            </div>

        </div>          
        </div>

  <FooterComponent/>  

    </div>




</template>

<script>


import SidebarComponent from '@/components/SidebarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
// import FormularioComponent from '@/components/FormularioComponent.vue'

export default {
    name: "DashboardView",
    components:{
    SidebarComponent,
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
.rout{
  

     width: 80%;
     margin-left:1%;
     margin-right:1%;
}
.c{
    width: 18%;
}
</style>