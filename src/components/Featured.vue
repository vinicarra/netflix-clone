<template>
  <div class="featured-block">
    <div class="video-block">
      <lazy-img v-show="!playing" class="cover" src="@/assets/videos/featured_video_cover.png" />
      <video v-show="playing" v-on:ended="videoEnds" muted id="player">
        <source type="video/mp4" src="@/assets/videos/featured_video.mp4" />
      </video>
      <div class="video-content">
        <div class="info">
          <h1 class="title1">Your Name (Kimi no na wa)</h1>
          <p class="text-body">
            Two teenagers share a profound, magical connection upon discovering they are swapping bodies.
            But things become even more complicated when the boy and girl decide to meet in person.
          </p>
        </div>
        <div class="actions">
          <div class="buttons">
            <p>hey</p>
            <p>hey</p>
            <p>hey</p>
          </div>
          <div class="controls">
            <div class="video-action" @click="toogleVideo">
              <v-icon
                class="icon"
                :name="playing ? (muted ? 'volume-mute' : 'volume-up') : 'redo'"
              />
            </div>
            <div class="classification">
              <img alt="14" src="@/assets/age_rating14.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/core";
@import "../styles/typography";

.featured-block {
  position: relative;

  .video-block {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    height: 90vh;

    .cover {
      height: 100%;
      width: 100%;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .video-content {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .info {
    display: flex;
    flex-direction: column;
    margin: 10% 50% 50px 50px;
    @include phone-only {
      margin: 15% 25px 50px 25px;
    }
    @include tablet-portrait-up {
      margin: 10% 50px 50px 50px;
    }
    h1 {
      margin-bottom: 0px;
    }
    p {
      font-size: 1.2rem;
      margin-top: 1%;
      @include phone-only {
        font-size: 0.9em;
      }
      @include tablet-portrait-up {
        font-size: 1em;
      }
    }
  }

  .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 0px 25px 50px;

    @include phone-only {
      margin: 0px 0px 50px 25px;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      background-color: green;
    }

    .controls {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 0px 0px 10px;

      .video-action {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25px;
        width: 25px;
        padding: 5px;
        margin-right: 18px;
        border-radius: 50%;
        border: 1px solid rgba($color: #ffffff, $alpha: 0.5);
        background-color: rgba($color: #000000, $alpha: 0.5);
        -webkit-transition: border 150ms linear, text-shadow 0.2s linear;
        -moz-transition: border 150ms linear, transform 150ms linear;
        -o-transition: border 150ms linear, transform 150ms linear;
        transition: border 150ms linear, transform 150ms linear;
        cursor: pointer;
        &:hover {
          border-color: #fff;
          @include transform(scale(1.1));
        }
        .icon {
          color: white;
          user-select: none;
        }
      }

      .classification {
        display: flex;
        align-items: center;
        padding: 2px 40px 2px 10px;
        border-left: 3px solid whitesmoke;
        background-color: rgba($color: #000000, $alpha: 0.5);

        img {
          height: 30px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "featured",
  data: () => {
    return {
      playing: false,
      muted: true
    };
  },
  methods: {
    toogleVideo() {
      const player = document.getElementById("player");
      if (this.playing) {
        this.muted = !this.muted;
        player.muted = this.muted;
      } else {
        player.play();
        this.playing = !this.playing;
      }
    },
    videoEnds() {
      this.playing = false;
    }
  }
};
</script>

