<template lang="pug">
    .content__header-component
        .container.container__content--header
            h4(class="content__header--title") Блок «{{title}}»
            iconed-btn(
                v-if="onChange===false"
                type="iconed" 
                title="Добавить группу"
                @click="$emit('add', $event)"
            ).content__header--add
</template>

<script>
    export default {
        props:{
            title: {
                type: String,
                default: 'Обо мне'
            },
            onChange:{
                type: Boolean,
                default: false
            }
        },
        components: {
            'iconed-btn': () => import('../button')
        }
    }
</script>
<style lang="postcss" scoped src="./content-header.pcss"></style>