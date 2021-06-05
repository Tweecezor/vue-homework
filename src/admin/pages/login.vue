<template lang="pug">
.wrapper.admin-wrapper
    .maincontent
        .login
            loginForm

</template>

<script>
export default {
    components:{
        loginForm: () => import('../components/login')
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="pcss" scoped>
    .login{
        width: 100%;
        height: 100%;
        background:  rgba(45, 60, 78, 0.8);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>