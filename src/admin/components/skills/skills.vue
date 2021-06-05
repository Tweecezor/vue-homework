<template lang="pug">
    .skills-content
        appInput(v-model="title" noSidePaddings :blocked="blocked" :errorMessage="errorMessage.title").skills__name
        appInput(v-model="percentage" :blocked="blocked" :errorMessage="errorMessage.percent").skills__percent
        .skills__actions
            template(v-if="blocked")
                icon(grayscale symbol="pencil" @click="unBlocked").skills__action
                icon(grayscale symbol="trash" @click="delSkill").skills__action
            template(v-else)
                icon(symbol="tick" @click="saveSkill").skills__action
                icon(symbol="cross" @click="oldValue").skills__action
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        name:{
            type: String,
            default: ''
        },
        percent:{
            type: Number,
            default: 0
        },
        id:{
            type: Number,
            default: -1
        },
        parentId:{
            type: Number,
            default: -1
        }
    },
    components: {
        appInput: () => import('../input'),
        icon: () => import('../icon')
    },
    data(){
        return{
            title: this.name,
            percentage: this.percent,
            oldPercent: this.percent,
            oldTitle: this.name,
            blocked: true,
            errorMessage: {
                title: null,
                percent: null 
            }
        }
    },
    methods: {
        ...mapActions(['deleteSkill', 'updSkill']),
        unBlocked(){
            this.blocked = false
        },
        saveSkill(){
            this.errorMessage = {
                title: null,
                percent: null
            }
            if(this.title.length < 2 || this.percentage < 0 || this.percentage > 100 || !this.percentage.toString().length){
                if(this.title.length < 2){
                    this.errorMessage.title = 'Минимальная длина 2 символа'
                }
                if(this.percentage < 0 || this.percentage > 100 || !this.percentage.toString().length){
                    this.errorMessage.percent = 'Не может быть < 0 и > 100'
                }
                return
            }

            this.blocked = true
            this.oldPercent = this.percentage
            this.oldTitle = this.title
            this.updSkill({
                    id: this.id,
                    title: this.title,
                    percent: this.percentage,
                    category: this.parentId,
                })
        },
        delSkill(){
            this.deleteSkill(this.id)
        },
        oldValue(){
            this.blocked = true
            this.percentage = this.oldPercent
            this.title = this.oldTitle
        }
    }
}

</script>

<style lang="postcss" scoped src="./skills.pcss"></style>