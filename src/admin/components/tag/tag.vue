<template>
  <div v-if="!close" class="tag">{{title}}</div>
  <div v-else class="tag closed">
    <h4 class="tag__title">{{title}}</h4>
    <button class="tag__close" v-bind="$listeners" @click="$emit('remove', id)">&times;</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    close: Boolean,
    id: {
      type: Number,
      default: -1
    }
  }
}
</script>

<style lang="postcss" scoped src="./tag.pcss"></style>