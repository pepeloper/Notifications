<template>
  <div
    class="bg-cover mt-10 h-500 rounded"
    :style="`background-image: url(${background})`"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: 'MobileScreen',

  computed: {
    background() {
      return 'https://images.unsplash.com/photo-1566242635312-e58f0e7fb83a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2176&q=80'
    }
  }
}
</script>
