import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from 'components/login/login'
import Main from 'components/main/main'
import UploadPic from 'components/uploadPic/uploadPic'
import picManguage from 'components/picManguage/picManguage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: HelloWorld,
      component: HelloWorld
    },
    {
      path: '/login',
      name: Login,
      component: Login
    },
    {
      path: '/main',
      name: Main,
      component: Main
    },
    {
      path: '/uploadPic',
      name: UploadPic,
      component: UploadPic
    },
    {
      path: '/picManguage',
      name: picManguage,
      component: picManguage
    }
  ]
})
