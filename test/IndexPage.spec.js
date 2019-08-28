import { mount } from '@vue/test-utils'
import index from '@/pages/index'

describe('index', () => {
  test('it is a vue instance', () => {
    const wrapper = mount(index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
