// import ph-checkbox from "@/material/ph-checkbox.vue";
// import ph-radio from "@/material/ph-radio";
// import ph-input from "@/material/ph-input";
// import ph-button from "@/material/ph-button";
function createEditorConfig() {
  const componentList = [];
  const componentMap = {};
  return {
    componentList,
    componentMap,
    register: (component) => {
      componentList.push(component);
      componentMap[component.key] = component;
    }
  };
}

export let registerConfig = createEditorConfig();
registerConfig.register({
  label: '文本',
  preview: () => '预览文本',
  render: function(h) {
    return h('div', '渲染文本');
  },
  key: 'text',
  configmap:new Map()
});
registerConfig.register({
  label: '按钮',
  preview: () => <ElButton>预览按钮</ElButton>,
  render: function(h) {
    return <ph-button></ph-button>;
  },
  key: 'ph-button',
  config:{
    text: {
        default: "按钮组件",
        type: String
    }
}

});
registerConfig.register({
  label: '单选框',
  preview: () => <ElInput placeholder="预览输入框">预览按钮</ElInput>,
  render: function(h) {
    return <ph-radio></ph-radio>;
  },
  key: 'ph-radio',
  config:{
    config: {
        default: function(){
            return{}
        },
        type: Object
    },
    No: {
        default: 1,
        type: Number
    },
    title: {
        default: "单选框",
        type: String
    },
    options_1: {
        default: "选项一",
        type: String
    },
    options_2: {
        default: "选项二",
        type: String
    },
},

});
registerConfig.register({
  label: '多选框',
  render: function(h) {
    return <ph-checkbox></ph-checkbox>;
  },
  key: 'ph-checkbox',
  config:{
    No: {
        default: 2,
        type: Number
    },
    title: {
        default: "多选框",
        type: String
    },
    options: {
        type: Array,
        default: function () {
            return [
                "选项一",
                "选项二",
                "选项三",
            ];
        }
    }
},
});
registerConfig.register({
  label: '单选填空',
  render: function(h) {
    return <ph-input></ph-input>;
  },
  key: 'ph-input',
  config:{
    No: {
        default: 3,
        type: Number
    },
    title: {
        default: "单行填空",
        type: String
    },
    
},
});

registerConfig.register({
  label: '标题',
  render: function(h) {
    return <ph-h1></ph-h1>;
  },
  key: 'ph-h1',
  config:{
    text: {
        default: "标题文本",
        type: String
    },
    
},
});

registerConfig.register({
  label: '描述文本',
  render: function(h) {
    return <ph-textarea></ph-textarea>;
  },
  key: 'ph-textarea',
  config:{
    text: {
        default: "描述文本",
        type: String
    },
    
},
});
//03.30反省,事实上,我根本不需要传值进去