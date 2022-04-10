<template>
     <div class="n" >


    <div >
        <HeaderDComponent/>  


         <div class="rout bg-white bg-opacity-75 py-3 my-2 mx-3 ">

            <router-view/>


        </div>          
    </div>
<div class="foote">
  <FooterComponent/>  
</div>


    </div>
</template>


<script>
import HeaderDComponent from "@/components/HeaderDComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
// import InicioSesionView from "@/views/DashboardUsuario/InicioSesionView.vue";
export default {
    name: "InicioSesionPView",
    components:{
    HeaderDComponent,
    FooterComponent,
    // InicioSesionView
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