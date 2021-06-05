<template lang="pug">
    card(small=true).category--card
        editInput(
            edit=false
            slot="title" 
            :value="category.caption"
            :id="category.id"
            @addcard="updateCard"
            @mode="changeMode"
        ).category--edit
        .category--block(slot="content")
            ul.category--skills
                li(v-for="skill in getSkillsParent(category.id)" :key="skill.id").category--skill
                    skills(
                        :parentId="category.id"
                        :id="skill.id"
                        :name="skill.name"
                        :percent="skill.percent"
                    )
            skillAdd(
                :parentId="category.id"
                :blocked="edit"
            )
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: {
        category: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    computed: {
        ...mapGetters(['getSkillsParent'])
    },
    components:{
        card: () => import('../card'),
        editInput: () => import('../edit-input'),
        skills: () => import('../skills'),
        skillAdd: () => import('../skill-add')
    },
    data(){
        return {
            edit: false
        }
    },
    methods: {
        ...mapActions(['updCategory']),
        changeMode(value){
            this.edit = value
        },
        updateCard(event){
            console.log(event)
            this.updCategory({id: event.id, title: event.value})
        }
    }
}
</script>

<style lang="postcss" src="./category.pcss"></style>