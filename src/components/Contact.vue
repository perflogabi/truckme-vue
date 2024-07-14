<template>
  <section class="section" id="contact">
    <div class="container_contact">
      <div class="text">
        <h2>Contato</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nome:</label>
            <input type="text" id="name" v-model="form.name">
            <p v-if="errors.name"  class="error-message">{{ errors.name }}</p>
          </div>
          <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" v-model="form.email">
            <p v-if="errors.email"  class="error-message">{{ errors.email }}</p>
          </div>
          <div class="form-group">
            <label for="message">Mensagem:</label>
            <textarea id="message" v-model="form.message" rows="5"></textarea>
            <p v-if="errors.message" class="error-message">{{ errors.message }}</p>
          </div>
          <button type="submit">Enviar</button>
        </form>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      errors: {},
      successMessage: ''
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.form.name) {
        this.errors.name = 'Nome é obrigatório.';
      }
      if (!this.form.email) {
        this.errors.email = 'E-mail é obrigatório.';
      } else if (!this.validEmail(this.form.email)) {
        this.errors.email = 'E-mail inválido.';
      }
      if (!this.form.message) {
        this.errors.message = 'Mensagem é obrigatória.';
      }
      return Object.keys(this.errors).length === 0;
    },
    validEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
    handleSubmit() {
      if (this.validateForm()) {
        this.successMessage = 'Formulário enviado com sucesso!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  }
};
</script>

<style scoped>
.container_contact {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem;
  background: #f4f4f4;
}

.text {
  width: 100%;
  max-width: 600px;
}

.text h2 {
  text-align: center;
  font-size: 2.5em;
}

form {
  padding-top: 2rem;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
    background-color: #ff5100; 
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1em;
    border-radius: 5px;
    transition: background-color 0.3s;
    
}

button:hover {
    background-color: #e67e00; 
}

.success-message {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.error-message {
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  margin-top: 5px;
  border-radius: 5px;
  text-align: left;
  font-size: 14px;
  width: 100%;
}


@media (max-width: 768px) {
  .container_contact {
    padding: 2rem;
  }
}
</style>
