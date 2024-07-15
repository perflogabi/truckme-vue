import { shallowMount } from '@vue/test-utils'
import Services from '@/components/Services.vue';


describe('Services.vue', () => {
  it('renders all services correctly', () => {
    const wrapper = shallowMount(Services);


    const expectedServices = [
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
        description: "Entregas rápidas e seguras para atender às suas necessidades urgentes.",
        price: "R$ 50,00 por entrega",
      },
    ];

    
    expectedServices.forEach(service => {
      expect(wrapper.text()).toContain(service.name);
      expect(wrapper.text()).toContain(service.description);
      expect(wrapper.text()).toContain(service.price);
    });
  });
});