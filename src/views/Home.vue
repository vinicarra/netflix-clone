<template>
  <div>
    <navbar-home />
    <featured />
  </div>
</template>

<style lang="scss">
</style>

<script>
import Featured from "@/components/Featured.vue";
import NavbarHome from "@/components/NavbarHome.vue";

export default {
  name: "home",
  components: {
    Featured,
    NavbarHome
  }
};
</script>
