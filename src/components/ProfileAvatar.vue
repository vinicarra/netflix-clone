<template>
  <div class="avatar-container">
    <div
      class="avatar"
      :class="{'small': size === 'small',
      'medium': size === 'medium',
      'large': size === 'large'}"
    ></div>
    <v-icon v-if="icon" :scale="1.25" class="dropdown-icon" name="sort-down" />
  </div>
</template>

<style lang="scss" scoped>
.avatar-container {
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  align-items: center;
  cursor: pointer;

  .dropdown-icon {
    margin-top: -8px;
    margin-left: 10px;
    color: white;
  }
}

.avatar {
  position: relative;
  background-color: red;
  padding: 3px;
}

.small {
  $size: 30px;
  width: $size;
  height: $size;
}

.medium {
  $size: 60px;
  width: $size;
  height: $size;
}

.large {
  $size: 200px;
  width: $size;
  height: $size;
}
</style>

<script>
export default {
  name: "profile-avatar",
  props: {
    size: {
      type: String,
      default: "small"
    },
    icon: {
      type: Boolean,
      default: true
    }
  }
};
</script>