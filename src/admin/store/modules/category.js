import { getCat, savingCat, getSkills, createSkill, removeSkill, updateSkill, removeCategory, updateCategory } from '../../request';

const category = {
    state: {
        category: [],
        skills: []
    },
    mutations: {
        loadedCat(state, cat) {
            state.category = cat.map(item => ({ id: item.id, caption: item.category }))
        },
        setSkills(state, payload) {
            state.skills = payload.map(item => ({
                id: item.id,
                percent: item.percent,
                name: item.title,
                parentId: item.category
            }))
        },
        createSkillView(state, item) {
            state.skills.push({
                id: item.id,
                percent: item.percent,
                name: item.title,
                parentId: item.category
            })
        },
        updateCat(state, payload) {
            state.category = state.category.map(item => {
                if (item.id === payload.id)
                    item.caption = payload.title
                return item
            })
        },
        updateSkillValue(state, payload) {
            state.skills = state.skills.map(item => {
                if (item.id === payload.id && item.parentId === payload.category)
                    item = {
                        id: payload.id,
                        name: payload.title,
                        percent: parseInt(payload.percent),
                        parentId: payload.category
                    }
                return item
            })
        },
        delSkill(state, id) {
            state.skills = state.skills.filter(item => item.id !== id)
        },
        saveCategory(state, cat) {
            state.category.unshift({ id: cat.id, caption: cat.category })
        },
        delCategory(state, id) {
            state.category = state.category.filter(item => item.id !== id)
        }
    },
    actions: {
        loadCategory: (store) => {
            getCat().then(data => {
                store.commit('loadedCat', data.data)
            }).catch(err => {
                console.log(`Возникла ошибка: ${err.message}`)
            })
        },
        saveCategory: (store, title) => {
            savingCat(title).then(data => {
                store.commit('saveCategory', data.data)
            }).catch(err => {
                console.log(`Возникла ошибка: ${err.message}`)
            })
        },
        deleteCategory: (store, id) => {
            removeCategory(id).then(() => {
                store.commit('delCategory', id)
            }).catch(err => {
                console.log(err.message)
            })
        },
        updCategory: (store, cat) => {
            updateCategory(cat).then(() => {
                store.commit('updateCat', cat)
            }).catch(err => {
                console.log(err.message)
            })
        },
        saveSkill: (store, skill) => {
            createSkill(skill).then(data => {
                store.commit('createSkillView', data.data)
            }).catch(err => {
                console.log(err.message)
            })
        },
        loadSkill: (store) => {
            getSkills(store.getters.getId).then(skill => {
                console.log(skill.data)
                store.commit('setSkills', skill.data)
            }).catch(err => {
                console.log(err.message)
            })
        },
        deleteSkill: (store, id) => {
            removeSkill(id).then(() => {
                store.commit('delSkill', id)
            }).catch(err => {
                console.log(err.message)
            })
        },
        updSkill: (store, payload) => {
            updateSkill(payload).then(() => {
                store.commit('updateSkillValue', payload)
            }).catch(err => {
                console.log(err.message)
            })
        }
    },
    getters: {
        getCategory: (state) => {
            return state.category
        },
        getSkillsParent: (state) => (id) => {
            return state.skills.filter(skill => skill.parentId === id)
        }
    }
}

export default category