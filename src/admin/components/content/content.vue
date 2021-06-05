<template lang="pug">
    .content-component
        .container.container--content
            contentHeader(
                :title="title"
                :onChange="onChange"
                @add="add"
            )
            contentMain(
                :category="category"
                :onChange="onChange"
                @delete="remove"
                @addcard="addcard"
            )
</template>

<script>

export default {
    props:{
        title:{
            type: String,
            default: "Обо мне"
        },
        category:{
            type: Array,
            default: () => []
        }
    },
    components: {
        contentHeader: () => import('../content-header'),
        contentMain: () => import('../content-main')
    },
    data(){
        return{
            onChange: false
        }
    },
    methods: {
        add(){
            this.onChange = true
        },
        remove(){
            this.onChange = false
        },
        addcard(){
            this.onChange = false
        }
    }
}

</script>

<style lang="postcss" scoped src="./content.pcss"></style>