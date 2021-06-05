<template lang="pug">
    .header-component
        .container.container--header
            .header__block--left
                user(
                    :size="size" 
                    :src="src" 
                    :name="name"
                )
                button(class="header__exit header__exit--second") {{button}}
                a(class="header__title") {{title}}
            .header__block--right
                button(class="header__exit" @click="logout") {{button}}

</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props: {
        size: {
            type: String,
            default: "3"
        },
        name:{
            type: String,
            default: 'Иван Иванов'
        },
        src: {
            type: String,
            default: ""
        },
        title:{
            type: String,
            default: ""
        },
        button:{
            type: String,
            default: ""
        }
    },
    components: {
        user: () => import('../user')
    },
    methods: {
        ...mapMutations(['logout'])
    }
}
</script>
<style lang="postcss" scoped src="./header.pcss"></style>