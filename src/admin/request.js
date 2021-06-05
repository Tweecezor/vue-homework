import axios from 'axios'
import { store } from './store'

axios.defaults.baseURL = 'https://webdev-api.loftschool.com'

axios.defaults.headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
}

axios.interceptors.response.use(function(response) {
    return response
}, function(error) {
    if (error.response.data.error === 'token_expired') {
        axios.post('/refreshToken').then(data => {
            localStorage.setItem('token', data.data.token)
            axios.defaults.headers = {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
            store.commit('setToken', localStorage.getItem('token'))
        })
    }
    return Promise.reject(error)
})

export const getCat = (id = null) => {
    axios.defaults.headers = { Authorization: `Bearer ${localStorage.getItem('token')}` }
    if (id) {
        return axios.get(`/categories/${id}`)
    } else {
        return axios.get('/categories')
    }
}

export const removeCategory = (payload) => {
    return axios.delete(`/categories/${payload}`)
}

export const updateCategory = (payload) => {
    console.log(payload)
    return axios.post(`/categories/${payload.id}`, { title: payload.title })
}

export const getUser = () => {
    axios.defaults.headers = { Authorization: `Bearer ${localStorage.getItem('token')}` }
    return axios.get('/user')
}

export const getSkills = (userId) => {
    return axios.get(`/skills/${userId}`)
}

export const createSkill = (payload) => {
    return axios.post('/skills', payload)
}

export const removeSkill = (payload) => {
    return axios.delete(`/skills/${payload}`)
}

export const updateSkill = (payload) => {
    const { id, title, category, percent } = payload
    return axios.post(`/skills/${id}`, {
        title,
        category,
        percent
    })
}

export const savingCat = (title) => {
    return axios.post('/categories', {
        title
    })
}

export const login = (user) => {
    return axios.post('/login', user)
}