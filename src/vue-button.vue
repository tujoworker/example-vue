<template>
  <button v-on:click="count++">{{ text }}</button>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      text: 'Button'
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
