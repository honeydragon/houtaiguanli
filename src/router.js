import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import Editor from './views/Editor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    }
  ]
})
