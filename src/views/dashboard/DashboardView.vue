<template>
  <div>
    <div class="container col-sm-6 col-xl-4 col-lg-6" id="padre">
      <br />
      <h1 class="mb-3" id="title">Encomiendas</h1>
      <br />
      <SidebarencoCompnent />
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarencoCompnent from "@/components/SidebarencoComponent.vue";

export default {
  name: "DashboardView",
  components: {
    SidebarencoCompnent,
  },
};
</script>

<style scoped>
#title {
  text-align: center;
}

div {
  background-color: rgb(255, 255, 255);
}
</style>