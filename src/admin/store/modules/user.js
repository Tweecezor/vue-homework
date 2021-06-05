import { login, getUser } from '../../request'
import router from '../../router'

const user = {
    state: {
        token: localStorage.getItem('token'),
        id: -1
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
            router.push({ path: '/' })
        },
        logout(state) {
            state.token = ''
            localStorage.setItem('token', '')
            router.push({ path: '/login' })
        },
        saveId(state, id) {
            state.id = id
        }
    },
    actions: {
        getToken: (store, user) => {
            login(user).then(data => {
                store.commit('setToken', data.data.token)
            }).catch(err => {
                console.log(err.message)
            })
        },
        getUserInfo: (store) => {
            getUser().then(data => {
                store.commit('saveId', data.data.user.id)
            }).catch(err => {
                console.log(err.message)
            })
        }
    },
    getters: {
        isLoggedIn: (state) => {
            return !!state.token
        },
        getId: (state) => {
            return state.id
        }
    }
}

export default user