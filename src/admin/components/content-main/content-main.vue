<template lang="pug">
    .content__main-component
        .container.container__content--main
            ul.content__main--list
                li(v-if="onChange").content__main--item
                    card(small=true).content__main--card
                        editInput(
                            edit=true 
                            slot="title"
                            @addcard="addCard"
                            @delete="$emit('delete')"
                        )
                        .content__main--block(slot="content")
                            ul.content__main--skills
                            skillAdd(
                                @addSkill="$emit('addSkill', $event)"
                                blocked
                            )
                li(v-for="item in category" :key="item.id").content__main--item
                    category(
                        :category="item"
                    )


</template>

<script>
import { mapActions } from 'vuex'

export default {
    props:{
        category:{
            type: Array,
            default: () => []
        },
        onChange:{
            type: Boolean,
            default: false
        }
    },
    components: {
        card: () => import('../card'),
        editInput: () => import('../edit-input'),
        skills: () => import('../skills'),
        skillAdd: () => import('../skill-add'),
        category: () => import('../category')
    },
    methods: {
        ...mapActions(['saveCategory']),
        addCard(value){
            this.saveCategory(value.value)
            this.$emit('addcard', value)
        }
    }
}

</script>


<style lang="postcss" scoped src="./content-main.pcss"></style>