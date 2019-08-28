import { shallowMount } from '@vue/test-utils'
import Notification from '@/components/Notification'

describe('Notification', () => {
  test('it has a name', () => {
    const wrapper = shallowMount(Notification)
    expect(wrapper.name()).toBe('Notification')
  })

  test('Notification placeholder has a default value', () => {
    const wrapper = shallowMount(Notification)
    expect(!!wrapper.vm.placeholder.length).toBe(true)
  })

  test('When click on notification focusNotification is called once', () => {
    const focusNotification = jest.fn()
    const wrapper = shallowMount(Notification, {
      methods: { focusNotification }
    })
    wrapper.find('div.notification').trigger('click')

    expect(focusNotification).toHaveBeenCalledTimes(1)
  })

  test('Input is focused when clicking on the notification section', () => {
    const wrapper = shallowMount(Notification)
    wrapper.find('div.notification').trigger('click')
    expect(wrapper.find('input').element).toBe(document.activeElement)
  })
})
