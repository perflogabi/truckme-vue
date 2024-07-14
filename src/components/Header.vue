<template>
  <header id="header">
    <nav class="container">
      <div class="container_menu" :class="{ hide: menuActive }">
        <div class="img">
          <img src="@/assets/logo_truckme.png" alt="logo TruckMe">
        </div>
        <div class="toggle icon-menu" @click="toggleMenu">
          <Menu />
        </div>
      </div>
      <div class="menu" :class="{ active: menuActive }">
        <ul class="grid">
          <li><a href="#banner">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Menu from 'vue-material-design-icons/Menu.vue'

export default {
  name: 'Header',
  components: {
    Menu
  },
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 0.8rem;
 
}

.container {
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 6rem;
}

.container_menu {
  display: flex;
  align-items: center;
}

.container_menu.hide {
  display: none;
}

.img img {
  width: 150px;
  height: auto;
}

.menu ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu ul li {
  margin-left: 20px;
}

.menu ul li a {
  text-decoration: none;
  color: #ff4800;
  font-weight: 600;
}

.toggle {
  display: none;
}

.menu.active {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20vh;
  background: #fff;
  justify-content: center;
}

@media (max-width: 768px) {
  nav .container {
    flex-direction: column;
    align-items: flex-start;
  }

  nav .container_menu {
    width: 100%;
    justify-content: space-between;
    padding: 0 1.5rem;
  }

  nav .img {
    margin: 0;
  }

  nav .menu {
    display: none;
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }

  nav .menu.active {
    display: block;
  }

  nav .menu ul {
    flex-direction: column;
    margin-left: 0;
  }

  nav .menu ul li {
    margin-left: 0;
    margin-bottom: 10px;
  }

  nav .toggle {
    display: block;
    text-align: end;
    padding-top: 0.5rem;
  }
}
</style>
