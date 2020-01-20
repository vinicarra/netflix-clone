<template></template>

<style lang="scss" scoped>
</style>

<script>
export default {
  name: "search-box",
  props: {
    placeholder: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      open: false
    };
  }
};
</script>