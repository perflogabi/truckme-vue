<template>
  <section class="about" id="about">
    <h2>Sobre a TruckMe</h2>
    <p>
      A TruckMe é uma empresa inovadora no setor de transporte e logística.
      Oferecemos soluções completas e personalizadas para atender às
      necessidades de nossos clientes, garantindo segurança, eficiência e
      pontualidade em cada entrega. Nosso compromisso é superar as expectativas
      e proporcionar uma experiência excepcional em cada serviço realizado.
      <span v-if="isExpanded">
        <br>
        <strong>Missão:</strong> Nossa missão é redefinir a logística e o transporte, oferecendo soluções inteligentes, eficientes e sustentáveis que impulsionem o crescimento dos nossos clientes. 
        <br>
        <strong>Visão:</strong> Nossa visão é ser a líder inovadora no setor de transporte e logística, reconhecida pela confiabilidade, eficiência e responsabilidade ambiental. 
      </span>
    </p>
    <button id="read-more" @click="toggleReadMore">{{ isExpanded ? 'Mostrar menos' : 'Saiba mais' }}</button>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleReadMore() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style scoped>
.about {
  color: #333;
  font-size: 1em;
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  text-align: justify;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.about h2 {
  font-size: 2.5em;
}

.about p {
  width: 60%;
}

#read-more {
  background-color: #ff5100;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 4rem;
  cursor: pointer;
  font-size: 1em;
  border-radius: 5px;
  transition: background-color 0.3s;
}

#read-more:hover {
  background-color: #e67e00;
}

@media (max-width: 768px) {
  .about {
    width: 100%;
  }
  .about p {
    width: 80%;
  }
  #about-text {
        width: 100%;
    }

    #read-more {
        margin-bottom: 4rem;
    }

    .container_about {
        padding: 2rem;
        margin-top: 4rem;
    }
}
</style>