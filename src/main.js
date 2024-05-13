import Vue from 'vue'
import App from './App.vue'
import test from './test.vue';
import Index from './components/index.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import router from './router'
import phcheckbox from "@/material/ph-checkbox.vue";
import phradio from "@/material/ph-radio";
import phinput from "@/material/ph-input";
import phbutton from "@/material/ph-button";
import phh1 from './material/ph-h1.vue';
import phtextarea from './material/ph-textarea.vue';


Vue.component('ph-checkbox', phcheckbox)
Vue.component('ph-radio', phradio)
Vue.component('ph-input', phinput)
Vue.component('ph-button', phbutton)
Vue.component('ph-h1', phh1)
Vue.component('ph-textarea', phtextarea)

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Antd)

new Vue({
  router,
  render: h => h(App)
  // render: h => h(Index)
}).$mount('#app')

// Vue.component('DraggableComponent', {
//   data() {
//     return {
//       top: 0,
//       left: 0,
//       isDragging: false,
//       startX: 0,
//       startY: 0
//     };
//   },
//   methods: {
//     handleMouseDown(event) {
//       this.isDragging = true;
//       this.startX = event.clientX - this.left;
//       this.startY = event.clientY - this.top;
//     },
//     handleMouseUp() {
//       this.isDragging = false;
//     },
//     handleMouseMove(event) {
//       if (this.isDragging) {
//         this.left = event.clientX - this.startX;
//         this.top = event.clientY - this.startY;
//       }
//     }
//   },
//   render(h) {
//     return h('div', {
//       on: {
//         mousedown: this.handleMouseDown,
//         mouseup: this.handleMouseUp,
//         mousemove: this.handleMouseMove
//       },
//       style: {
//         position: 'absolute',
//         top: this.top + 'px',
//         left: this.left + 'px',
//         border: '1px solid #000',
//         padding: '10px',
//         cursor: 'move'
//       }
//     }, 'Drag me');
//   }
// });

// new Vue({
//   el: '#app',
//   render(h) {
//     return h('DraggableComponent');
//   }
// });
