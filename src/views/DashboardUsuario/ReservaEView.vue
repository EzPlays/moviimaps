<template>
  <div class="csss">
    <div class="container  col-sm-6 col-xl-4 col-lg-6" id="padre">
      <br />
      <br />

      <SidebarencoComponent />

      <div class="t">
      <router-view />
      </div>

    </div>
  </div>
</template>

<script>
import SidebarencoComponent from "@/components/SidebarencoComponent.vue";

export default {
  name: "ReservaEView",
  components: {
    SidebarencoComponent,
  },
};

</script>

<style scoped>





</style>