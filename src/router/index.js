import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test from '../components/test.vue'
import Checkbox from '@/material/ph-checkbox.vue'
import Radio from '@/material/ph-radio.vue'
import Input from '@/material/ph-input.vue'
import button from  '@/material/ph-button.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  
]

const router = new VueRouter({
  routes
})

export default router
