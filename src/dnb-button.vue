<template>
  <div>
    <my-button :text="text" @click="handleClick" @reset="reset" />
  </div>
</template>

<script>
import MyButton from './ReactButton'

export default {
  // data: () => {
  //   return {
  //     text: 'Default text'
  //   }
  // },
  props: {
    text: {
      type: String,
      default: 'Default text'
    }
  },
  methods: {
    reset() {
      this.text = ''
    },
    handleClick(e) {
      console.log('handleClick', e)
    }
  },
  components: { 'my-button': MyButton }
}
</script>

<style scoped>
button {
  color: #42b983;
}
</style>
