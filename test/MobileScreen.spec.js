import { shallowMount } from '@vue/test-utils'
import MobileScreen from '@/components/MobileScreen'

describe('MobileScreen', () => {
  test('it has a name', () => {
    const wrapper = shallowMount(MobileScreen)
    expect(wrapper.name()).toBe('MobileScreen')
  })

  test('calls changeBackground on created hook', () => {
    const changeBackground = jest.fn()
    shallowMount(MobileScreen, {
      methods: { changeBackground }
    })
    expect(changeBackground).toHaveBeenCalledTimes(1)
  })

  test('changeBackground is called when click on the background-zone', () => {
    const changeBackground = jest.fn()
    const wrapper = shallowMount(MobileScreen, {
      methods: { changeBackground }
    })
    wrapper.find('div#background-zone > div').trigger('click')
    expect(changeBackground).toHaveBeenCalledTimes(2)
  })

  test('background disabled is false by default', () => {
    const changeBackground = jest.fn()
    const wrapper = shallowMount(MobileScreen, {
      methods: { changeBackground }
    })
    expect(wrapper.vm.background.disabled).toBe(false)
  })

  test('background disabled is true after created', () => {
    const wrapper = shallowMount(MobileScreen)
    expect(wrapper.vm.background.disabled).toBe(true)
  })

  test('html for change background is not rendered when background.disabled is true', () => {
    const wrapper = shallowMount(MobileScreen)
    wrapper.setData({ background: { disabled: true } })
    expect(wrapper.find('div#background-zone').exists()).toBe(false)
  })

  test('html for change background is rendered when background.disabled is false', () => {
    const wrapper = shallowMount(MobileScreen)
    wrapper.setData({ background: { disabled: false } })
    expect(wrapper.find('div#background-zone').exists()).toBe(true)
  })

  test('categories data contains desired categories', () => {
    const wrapper = shallowMount(MobileScreen)
    const categories = ['nature', 'architecture', 'travel', 'food', 'drink']
    expect(wrapper.vm.categories).toStrictEqual(categories)
  })
})
