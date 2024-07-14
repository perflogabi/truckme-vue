<template>
  <section class="services" id="services">
    <h2>Serviços</h2>
    <div class="services-grid">
      <div class="service-card" v-for="(service, index) in services" :key="index">
        <div class="service-content">
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
          <p class="price"><strong>Preço:</strong> {{ service.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          name: "Transporte de Carga",
          description: "Oferecemos transporte seguro e rápido para sua carga.",
          price: "R$ 150,00 por tonelada",
        },
        {
          name: "Logística Integrada",
          description: "Serviços completos de logística para sua empresa.",
          price: "R$ 300,00 por serviço",
        },
        {
          name: "Entrega Expressa",
          description:
            "Entregas rápidas e seguras para atender às suas necessidades urgentes.",
          price: "R$ 50,00 por entrega",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services {
  padding: 8rem;
  background: #f4f4f4;
  text-align: center;
  height: 75vh;
}

.services h2 {
  font-size: 2.5em;
  margin-bottom: 4rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.service-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.service-card h3 {
  font-size: 1.5em;
  margin-bottom: 8px;
  color: #525252;
}

.service-card p {
  font-size: 1em;
  margin-bottom: 8px;
  color: #6e6e6e;
}

.service-card .price {
  font-size: 1em;
  font-weight: bold;
  color: #ff5100;
}

@media (max-width: 768px) {

  .services{
    padding: 0;
    height: 140vh;
  }

  .services h2 {
    padding-top: 3rem;
    margin-bottom: 2rem;
  }

 
 .services-grid {
  padding: 0 1.5rem;
  
 }

    .service-card {
        background-color: #fff;
        border-radius: 8px;
        margin-top: 3rem;
       
    }
}
</style>
