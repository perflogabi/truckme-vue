<template>
<section id="banner">
    <div class="banner">
    <img src="@/assets/banner.jpg" alt="Banner" />
    <div class="welcome-text">
      <h1>Bem-vindo à Truckme!</h1>
      <p>Confiabilidade e eficiência no transporte e logística.</p>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner {
  height: 700px;
  position: relative;
  overflow: hidden;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.banner::before {
  content: "";
  position: absolute;
  top: 7;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(211, 211, 211, 0.5);
  z-index: 1;
}

.welcome-text {
    position: relative;
    z-index: 2;
    top: 6rem;
    color: #df5312;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.welcome-text h1 {
    font-size: 2.8em;
    color: #000000;
    display: inline-block;
    position: relative;
    font-weight: bold;
}

.welcome-text h1::after {
    content: 'me!';
    color: #df5312;
    position: absolute;
    right: 0;
}

.welcome-text p {
    color: #252525;
    font-size: 1.5em;
    font-weight: bold;
    margin-top: -1.5rem;
    
}

@media (max-width: 768px) {
  
     .banner {
        height: 400px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }
    
    .banner::before {
        position: absolute;
        top: 7;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(128, 128, 128, 0.5);
        z-index: 1;
    }

    .welcome-text h1 {
        font-size: 2em;
        margin-top: 0;
    }

    .welcome-text p {
        font-size: 1em;
        padding-left: 1.5em;
    }
}
</style>
