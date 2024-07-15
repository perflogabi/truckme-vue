import { shallowMount } from '@vue/test-utils'
import About from '@/components/About.vue';

describe('About.vue', () => {
  it('renders the about message correctly', () => {
    const wrapper = shallowMount(About);

    const expectedMessage = `
      Sobre a TruckMe
      A TruckMe é uma empresa inovadora no setor de transporte e logística.
      Oferecemos soluções completas e personalizadas para atender às
      necessidades de nossos clientes, garantindo segurança, eficiência e
      pontualidade em cada entrega. Nosso compromisso é superar as expectativas
      e proporcionar uma experiência excepcional em cada serviço realizado.
    `.trim().replace(/\s+/g, ' ');
    
    expect(wrapper.text().trim().replace(/\s+/g, ' ')).toMatch(expectedMessage);
  });
});
