<template lang="pug">
    .login-component
        .login__inner
            .login__exit
            form(@submit.prevent="sendUser").login__content
                h4.login__title Авторизация
                .login__row
                    label.login__label Логин
                    appInput(icon="user" v-model="user.name" :errorMessage="error.name").login__input
                .login__row
                    label.login__label Пароль
                    appInput(icon="key" type="password" v-model="user.password" :errorMessage="error.password").login__input
                .login__btns
                    appButton(title="отправить").login__btn
</template>

<script>
import {mapActions} from 'vuex';
export default {
    components: {
        appInput: () => import('../input'),
        appButton: () => import('../button')
    },
    data(){
        return {
            user:{
                name: '',
                password: ''
            },
            error:{
                name: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['getToken']),
        sendUser(){
            this.error = {
                name: '',
                password: ''
            }
            if(this.user.name.trim() === '' || this.user.password.trim() === ''){
                if(this.user.name.trim() === '')
                    this.error.name = 'Имя не может быть пустым'
                if(this.user.password.trim() === '')
                    this.error.password = 'Пароль не может быть пустым'
                return
            }
            this.getToken(this.user)
        }
    }
}
</script>

<style lang="pcss" scoped src="./login.pcss"></style>