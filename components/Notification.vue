<template>
  <div
    class="notification w-full bg-gray-400 min-h-65 rounded px-4 py-2"
    @click="focusNotification"
  >
    <div class="flex justify-between">
      <div class="flex items-center">
        <span class="whatsapp"></span>
        <span class="uppercase text-gray-300 text-xs ml-2">
          whatsapp
        </span>
      </div>
      <div class="flex items-center">
        <span class="text-gray-300 text-xs">ahora</span>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="font-bold text-black text-sm">.</span>
      <input
        ref="notification"
        type="text"
        class="text-gray-500 placeholder-gray-500 text-sm bg-transparent outline-none"
        :value="text"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Notification',

  data() {
    return {
      text: '',
      placeholder: 'Te he hecho croquetas'
    }
  },

  methods: {
    focusNotification() {
      this.$refs.notification.focus()
    }
  }
}
</script>
