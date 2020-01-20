<template>
  <div class="navbar">
    <div class="menu">
      <div class="logo">
        <img alt="Logo" src="@/assets/netflix_logo.png" />
      </div>
      <div class="items">
        <a class="text-navbar selected">Início</a>
        <a class="text-navbar">Séries</a>
        <a class="text-navbar">Filmes</a>
        <a class="text-navbar">Mais recentes</a>
        <a class="text-navbar">Minha lista</a>
      </div>
    </div>
    <div class="actions">
      <v-icon class="search-icon" :scale="1.25" name="search" />
      <a href="#" class="switch-mode">INFANTIL</a>
      <v-icon class="notification-icon" :scale="1.35" name="bell" />
      <profile-avatar />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/core.scss";
@import "../styles/typography.scss";

.navbar {
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px 15px 0px;
  background: rgb(15, 15, 15);
  background: linear-gradient(
    180deg,
    rgba(15, 15, 15, 0.8) 0%,
    transparent 100%
  );
  z-index: 10;
  .logo {
    display: flex;
    align-items: center;
    img {
      height: 25px;
      @include phone-only {
        height: 15px;
      }
    }
  }
}

.menu {
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  @include phone-only {
    padding-left: 25px;
  }
}

.items {
  display: flex;
  margin-left: 40px;
  align-items: center;
  @include phone-only {
    display: none;
  }
  @include tablet-portrait-up {
    display: none;
  }
  a {
    text-align: center;
    margin: 0px 13px;
    &:first-child {
      margin: 0px 13px 0px 0px;
    }
  }
  .selected {
    color: white;
    font-weight: bold;
  }
}

.actions {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-right: 50px;

  @include phone-only {
    display: none;
  }

  @include tablet-portrait-up {
    display: none;
  }

  .switch-mode {
    font-size: 1em;
    text-decoration: none;
    color: white;
  }

  .notification-icon,
  .search-icon {
    color: white;
  }
}

.actions > * {
  margin: 0px 18px;
}
</style>

<script>
import ProfileAvatar from "@/components/ProfileAvatar.vue";

export default {
  name: "navbar-home",
  components: {
    ProfileAvatar
  }
};
</script>