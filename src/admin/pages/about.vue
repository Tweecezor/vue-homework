<template lang="pug">
.wrapper.admin-wrapper
    .maincontent
        .wrapper
            headerComp(
            :size="user.size" 
            :src="user.src" 
            :name="user.name" 
            :title="header.title" 
            :button="header.button"
            )
            navigation(
            :links="nav.links" 
            :activeIndex="nav.activeIndex"
            )
            contents(
            :title="getTitle",
            :category="getCategory"
            )
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    headerComp: () => import('../components/header'),
    navigation: () => import('../components/nav'),
    contents: () => import('../components/content')
  },
  data() {
    return {
      user: {
        size: "3.1",
        src: "https://picsum.photos/300/300",
        name: 'Николай Назаров'
      },
      header: {
        title: 'Панель администрирования',
        button: 'Выйти'
      },
      nav:{
        activeIndex: 0,
        links: [
          {title: 'Обо мне', href: 'admin/about'},
          {title: 'Работы', href: 'admin/works'},
          {title: 'Отзывы', href: 'admin/reviews'}
        ]
      }
    }
  },
  mounted(){
      this.getUserInfo().then(() => {
        setTimeout(() => {
          this.loadCategory().then(() =>{
          this.loadSkill()
        })
        },1000)
      })
  },
  computed: {
    ...mapGetters([
      'getCategory'
    ]),
    getTitle(){
      return this.nav.links[this.activeIndex]
    }
  },
  methods:{
    ...mapActions(['loadCategory', 'getUserInfo', 'loadSkill'])
  }
}
</script>
