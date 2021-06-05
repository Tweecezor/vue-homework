<template lang="pug">
    .nav-component
        .container.container--navigation
            ul.nav__list
                li(v-for="(link,index) in links" :key="index" :class="getActive(index)").nav__item
                    a(class="nav__link" :href="link.href") {{link.title}}

</template>

<script>
export default {
    props: {
        activeIndex:{
            type: Number,
            default: 0
        },
        links:{
            type: Array,
            default: []
        }
    },
    methods:{
        getActive(index){
            return index === this.activeIndex ? 'active': ''
        }
    }
}
</script>
<style lang="postcss" scoped src="./nav.pcss"></style>

