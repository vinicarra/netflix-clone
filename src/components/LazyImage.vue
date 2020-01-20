<template>
  <div class="container">
    <img
      v-show="state === 'loaded'"
      v-on:load="state = 'loaded'"
      class="high"
      :class="{'fade-in': state === 'loaded'}"
      src="@/assets/videos/featured_video_cover.png"
    />
    <img
      class="low"
      :class="{'fade-out': state === 'loaded'}"
      src="@/assets/videos/featured_video_cover_lowres.png"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/core";

.container {
  position: relative;
}

.low {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  filter: blur(20px);
  -webkit-filter: blur(20px);
  @include transition(opacity, 800ms);
  object-fit: cover;
}

.high {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.1;
  @include transition(opacity, 250ms);
  object-fit: cover;
}

.fade-out {
  opacity: 0;
}

.fade-in {
  opacity: 1;
}
</style>

<script>
export default {
  name: "lazy-img",
  props: {
    src: {
      type: String,
      required: true
    },
    lowres: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      state: "loading"
    };
  }
};
</script>