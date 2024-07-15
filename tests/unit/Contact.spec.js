import { shallowMount } from '@vue/test-utils';
import Contact from '@/components/Contact.vue';

describe('Contact.vue', () => {
  it('renders form fields and validates form submission', async () => {
    const wrapper = shallowMount(Contact);

    expect(wrapper.find('#name').exists()).toBe(true);
    expect(wrapper.find('#email').exists()).toBe(true);
    expect(wrapper.find('#message').exists()).toBe(true);

    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.find('.error-message').exists()).toBe(true);

    await wrapper.find('#name').setValue('Gabriela');
    await wrapper.find('#email').setValue('gabriela@example.com');
    await wrapper.find('#message').setValue('Teste de mensagem');

    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.find('.success-message').exists()).toBe(true);
  });
});
