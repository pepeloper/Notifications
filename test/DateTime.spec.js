import { shallowMount } from '@vue/test-utils'
import Datetime from '@/components/Datetime'

describe('Datetime', () => {
  test('it has a name', () => {
    const wrapper = shallowMount(Datetime)
    expect(wrapper.name()).toBe('Datetime')
  })

  test('it displays current time', () => {
    jest
      .spyOn(global.Date.prototype, 'getHours')
      .mockImplementationOnce(() => 21)
    jest
      .spyOn(global.Date.prototype, 'getMinutes')
      .mockImplementationOnce(() => 15)

    const wrapper = shallowMount(Datetime)

    expect(wrapper.vm.time).toBe('21:15')
  })

  test('it displays current day', () => {
    jest
      .spyOn(global.Date.prototype, 'toLocaleDateString')
      .mockImplementationOnce(() => 'viernes')
    jest
      .spyOn(global.Date.prototype, 'getDate')
      .mockImplementationOnce(() => 10)
    jest
      .spyOn(global.Date.prototype, 'toLocaleDateString')
      .mockImplementationOnce(() => 'septiembre')

    const wrapper = shallowMount(Datetime)

    expect(wrapper.vm.day).toBe('viernes, 10 de septiembre')
  })
})
