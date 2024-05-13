import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test from '../components/test.vue'
import Checkbox from '@/material/ph-checkbox.vue'
import Radio from '@/material/ph-radio.vue'
import Input from '@/material/ph-input.vue'
import button from '@/material/ph-button.vue'
import h1 from'@/material/ph-h1.vue'
import textarea from'@/material/ph-textarea.vue'
import workspace from '@/components/workspace.vue'
import editpage from '@/components/index.vue'

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
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: Checkbox
  },
  {
    path: '/input',
    name: 'input',
    component: Input
  },
  {
    path: '/radio',
    name: 'radio',
    component: Radio
  },
  {
    path: '/button',
    name: 'button',
    component: button
  },
  {
    path: '/h1',
    name: 'h1',
    component: h1
  }, {
    path: '/textarea',
    name: 'textarea',
    component: textarea
  },
]

const router = new VueRouter({
  routes
})

export default router