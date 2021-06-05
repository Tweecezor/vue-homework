<template lang="pug">
    .user-component
        avatar(
            v-bind="$attrs"
            :size="size"
        )
        h4(class="user__name") {{name}}
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: "3"
        },
        name:{
            type: String,
            default: 'Иван Иванов'
        }
    },
    components: {
        avatar: () => import('../avatar')
    }
}
</script>
<style lang="postcss" scoped src="./user.pcss"></style>