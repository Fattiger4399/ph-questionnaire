<template>
    <div>
      <button @click="updateModel">修改model</button>
      <div v-for="child in dsl.children" :key="child.wid">
        <div>{{ child.props.title }}</div>
        <input v-model="model.props.title" />
      </div>
      我是dsl
      {{JSON.stringify(dsl)}}
      <div>
        我是model
        {{JSON.stringify(model)}}
      </div>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        dsl: {
          children: [
            {
              wid: 1,
              component: 'ph-radio',
              props: {
                No: 1,
                title: "我是输入框",
                options_1: "选项一一",
                options_2: "选项二二"
              },
              style: { top: '300px', left: '300px', zIndex: '1', border: "2px dashed red" },
              attrs: {},
              events: {}
            }
          ]
        },
        model: null
      };
    },
    mounted() {
      this.model = this.dsl.children[0];
    },
    methods: {
      updateModel() {
        this.$set(this.dsl.children, 0, { ...this.model });
      }
    }
  };
  </script>