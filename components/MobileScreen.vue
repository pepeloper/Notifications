<template>
  <div
    class="background bg-cover bg-gray-500 mt-10 h-500 rounded"
    :style="inlineStyles"
  >
    <div
      v-if="!background.disabled"
      id="background-zone"
      class="relative"
      style="top: 100%"
    >
      <div
        class="max-w-md w-full h-52 absolute bg-transparent bottom-0 rounded cursor-pointer"
        @click="changeBackground"
      />
    </div>
    <slot />
  </div>
</template>
<script>
import ColorThief from 'colorthief/dist/color-thief.umd'

export default {
  name: 'MobileScreen',

  data() {
    return {
      categories: ['nature', 'architecture', 'travel', 'food', 'drink'],
      background: {
        image: '',
        color: '',
        disabled: false
      }
    }
  },

  computed: {
    inlineStyles() {
      return {
        backgroundImage: `url(${this.background.image})`,
        backgroundColor: this.background.color
      }
    }
  },

  created() {
    this.changeBackground()
  },

  methods: {
    unsplashUrl() {
      const baseUrl = 'https://source.unsplash.com'
      const categories = this.categories.join(',')
      const random = Math.random()
      return `${baseUrl}/400x500/?${categories}?sig=${random}`
    },

    changeBackground() {
      this.background.disabled = true
      this.background.image = this.unsplashUrl()
      this.getColors()

      setTimeout(() => {
        this.background.disabled = false
      }, 3000)
    },

    getColors() {
      const colorThief = new ColorThief()
      const img = new Image()

      img.addEventListener('load', async () => {
        const [r, g, b] = await colorThief.getColor(img)
        this.background.color = `rgb(${r}, ${g}, ${b})`
      })

      img.crossOrigin = 'Anonymous'
      img.src = this.background.image
    }
  }
}
</script>
<style>
.reload {
  top: 18px;
  left: 355px;
}
.background {
  transition: all 0.5s ease-in-out;
}
</style>
