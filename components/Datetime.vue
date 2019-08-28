<template>
  <div class="flex flex-col items-center pt-12">
    <span class="text-white text-xl">{{ time }}</span>
    <span class="text-white text-lg -mt-5">{{ day }}</span>
  </div>
</template>
<script>
export default {
  name: 'Datetime',

  data() {
    return {
      date: ''
    }
  },

  computed: {
    time() {
      const minutes = String(this.date.getMinutes()).padStart(2, '0')
      const hour = this.date.getHours()
      return `${hour}:${minutes}`
    },

    day() {
      const dayName = this.date.toLocaleDateString('es-es', { weekday: 'long' })
      const dayNumber = String(this.date.getDate()).padStart(2, '0')
      const monthName = this.date.toLocaleDateString('es-es', { month: 'long' })

      return `${dayName}, ${dayNumber} de ${monthName}`
    }
  },

  created() {
    this.date = new Date()
  }
}
</script>
