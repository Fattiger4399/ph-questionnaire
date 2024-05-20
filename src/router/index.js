import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Test from '../components/test.vue'
// import Checkbox from '@/material/ph-checkbox.vue'
// import Radio from '@/material/ph-radio.vue'
// import Input from '@/material/ph-input.vue'
// import button from '@/material/ph-button.vue'
// import h1 from'@/material/ph-h1.vue'
// import textarea from'@/material/ph-textarea.vue'
import workspace from '@/components/workspace.vue'
import editpage from '@/components/editpage.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'workspace',
    component: workspace
  },
  {
    path: '/editpage',
    name: 'editpage',
    component: editpage
  },
  
]

const router = new VueRouter({
  routes
})

export default router