import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Generate from '../../src/components/Generate.vue';

describe('Generate.vue', () => {
  const wrapper = shallowMount(Generate);

  it('sets the correct default data', () => {
    expect(typeof Generate.data).toBe('function');
    const defaultData = Generate.data();
    expect(defaultData.numbers).toEqual([]);
    expect(defaultData.items).toEqual(['Ascending', 'Descending']);
  });

  it('correctly sets the number of generated phone numbers when mounted', () => {
    const vm = new Vue(Generate).$mount();
    expect(vm.numbersLeft).toEqual(10000);
  });

  it('correctly generates the number of phone numbers given', () => {
    wrapper.vm.range = 10;
    wrapper.vm.generateNumbers();
    expect(wrapper.vm.numbers.length).toEqual(10);
  });

  it('correctly sorts a list of phone numbers generated in ascending order', () => {
    wrapper.vm.numbers = ['0999999999', '0123456789', '0987654321', '0000000000'];
    wrapper.vm.sortNumbers('Ascending');
    expect(wrapper.vm.numbers).toEqual(['0000000000', '0123456789', '0987654321', '0999999999']);
  });

  it('correctly sorts a list of phone numbers generated in descending order', () => {
    wrapper.vm.numbers = ['0999999999', '0123456789', '0987654321', '0000000000'];
    wrapper.vm.sortNumbers('Descending');
    expect(wrapper.vm.numbers).toEqual(['0999999999', '0987654321', '0123456789', '0000000000']);
  });

  it('correctly returns an error message when the 10000 limit is exceeded', () => {
    wrapper.vm.numbers = [];
    wrapper.vm.range = 20000;
    wrapper.vm.generateNumbers();
    expect(wrapper.vm.numbers.length).toEqual(0);
  });
});
