<template lang="pug">
    .edit__input-component
        editLine(
            placeholder="Название новой группы" 
            v-model="title" 
            :edit="edit"
            @remove="remove"
            @approve="approve"
            @mode="$emit('mode', $event)"
        ).edit__input--field
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props:{
        edit: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        id:{
            type: Number,
            default: -1
        }
    },
    components: {
        editLine: () => import('../editLine')
    },
    data(){
        return {
            title: this.value
        }
    },
    methods: {
        ...mapActions(['deleteCategory']),
        remove(){
            console.log(this.id)
            if(this.id < 0)
                this.$emit('delete')
            else 
                this.deleteCategory(this.id)
        },
        approve(value){
            if(value.trim() === "" || !value.length){
                return
            }
            else {
                this.$emit('addcard', {value, id: this.id})
            }
        }
    }
}
</script>

<style lang="postcss" scoped src="./edit-input.pcss"></style>