<template>
  <div class="notification w-full bg-gray-400 min-h-65 rounded px-4 py-2">
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
      <span class="text-gray-500 text-sm">
        Te he hecho croquetas
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Notification',

  props: {},

  data() {
    return {}
  },

  computed: {},

  methods: {}
}
</script>
