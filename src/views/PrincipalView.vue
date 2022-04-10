<template>
    <div class="n" >


    <div >
        <HeaderDComponent/>  
        <InformacionComponent/>
        <!-- <InformacionComponent/> -->
         <div class="rout bg-white bg-opacity-75 my-2 ">
            <!-- <FormularioComponent/> -->



        </div>          
    </div>
<div class="foote">
  <FooterComponent/>  
</div>


    </div>
</template>

<script>
// import InformacionComponent from "@/components/InformacionComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"
import HeaderDComponent from "@/components/HeaderDComponent.vue"
import InformacionComponent from "@/components/InformacionComponent.vue"
export default {
    name: "PrincipalView",
     
    components:{
    // InformacionComponent,
    FooterComponent,
    HeaderDComponent,
    InformacionComponent
}
}
</script>

<style scoped>
.n{
    background-size: cover;
    height: 100vh;
    background-image: url(/src/assets/pop.jpeg) ;
}
.foote{
  position:fixed;
  left:0px;
  bottom:22px;
  height:30px;
  width:100%;
}
.alin {
   padding-top: 10%;
}
</style>