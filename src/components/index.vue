<!--
<template>
    
    <div>
        <!-- 工具 -->
        <div class="toolbar">
            <el-button @click="showalldom">schema</el-button>
            <div>
                <!-- 组件工具操作 -->
                <div>
                    <el-button-group>
                        <el-button icon="el-icon-delete-solid" @click="deletenode"></el-button>
                        <el-button icon="el-icon-document-copy" @click="copynodefunc"></el-button>
                        <el-button icon="el-icon-document-checked" @click="affixnode"></el-button>
                        <el-button icon="el-icon-bottom" @click="bottomnode"></el-button>
                        <el-button icon="el-icon-top" @click="topnode"></el-button>
                    </el-button-group>
                </div>
            </div>
            <div>
                <el-button @click="drawer_1 = true" type="primary" style="margin-left: 16px;">
                    预览
                </el-button>
                <el-drawer title="我是标题" :visible.sync="drawer_1" :with-header="false" size="90%">
                    <div class="renderpage">
                        <lcRender :dsl="dsl"></lcRender>
                    </div>
                </el-drawer>
            </div>
        </div>
        <!-- 左侧组件区域 -->
        <div class="component">
            组件区
            <div class="material" v-for="(component, key) in registerConfig.componentMap" :key="component.key"
                @dragstart="dragstart(component)" @dragend="dragend(component)" draggable>
                <span>{{ key }}</span>
                <component :is="component"></component>
            </div>
            <!-- <Material></Material> -->
        </div>
        <div class="editPart">
            <!-- 选中层 -->
            <!-- <div v-if="model.selected" :style="beselected"></div> -->
            <!-- 中间编辑器区域 -->
            <div id="editPart" @dragover.prevent @drop="drop">
                <lc-editor ref="editor" :dsl="dsl" :model="model" @select="select" class="lc-editor"></lc-editor>
                <!-- 事件层 -->
                <!-- 连线层 -->
                <!-- handle层 -->
            </div>
        </div>

        <div>
            <div></div>
            <div></div>
        </div>
        <!-- 右侧设置器 -->
        <div class="setter">
            <Setter :dsl="model.selected"></Setter>
        </div>
        <div class="test">
            <test :dsl="dsl"></test>
            <div>
                当前选中：{{ JSON.stringify(model.selected) }}
            </div>
            <!-- <el-button @click="dosth"></el-button> -->
        </div>
    </div>
</template>
-->


<script>
// import dsl from './dsl.json';
// import lcEditor from './editor.vue'
// import lcRender from './render.vue'
// import Material from './material.vue'
// import test from './test.vue'
// import Setter from './setter.vue'

// import { deepCopy } from '../utils/deepCopy'
// import { registerConfig } from '../utils/register'
// import { removeChildrenBorder, addChildrenBorder } from '../utils/changeBorder'
// export default {
//     components: {
//         lcEditor, lcRender, test, Material, Setter,
//         component: {
//             functional: true,
//             render(h, { data }) {
//                 return h(registerConfig.componentMap[data.key]);
//             }
//         }
//     },
//     data() {
//         return {
//             component_id: 1,
//             registerConfig: registerConfig,
//             drawer_1: false,
//             drawer: false,
//             copynode: null,
//             text: "sss",
//             model: {
//                 selected: null,
//             },
//             dsl: {}
//         }
//     },
//     created() {
//         this.dsl = dsl
//     },

//     methods: {
//         handleDragStart(e) {
//             // console.log(e)
//         },
//         handleDragEnd(e) {
//             // console.log("Drag end");
//         },
//         handleDragOver(event) {
//             event.preventDefault();
//         },
//         handleDrop(event) {
//             event.preventDefault();
//             event.target.innerText = data;
//         },
//         //节点工具方法
//         deletenode() {
//             console.log(this.model.selected);
//             const id = this.model.selected.wid - 1;
//             this.dsl.children.splice(id, 1);
//             //重置序号
//             this.numberreset();

//         },
//         copynodefunc() {
//             this.copynode = this.model.selected
//         },
//         affixnode() {
//             const id = this.model.selected.wid - 1;
//             const goodnode = deepCopy(this.copynode)
//             this.dsl.children.splice(id, 0, goodnode);
//             this.numberreset();
//         },
//         bottomnode() {
//             const id = this.model.selected.wid;
//             if (id < this.dsl.children.length) {

//                 const goodnode = deepCopy(this.model.selected)
//                 this.dsl.children.splice(id + 1, 0, goodnode)
//                 this.dsl.children.splice(id - 1, 1)
//                 this.model.selected = this.dsl.children[id]
//                 this.numberreset();
//             } else {
//                 alert("不能再下了")
//             }

//         },
//         topnode() {
//             const id = this.model.selected.wid;
//             if (id > 1) {
//                 const goodnode = deepCopy(this.model.selected)
//                 this.dsl.children.splice(id - 2, 0, goodnode)
//                 this.dsl.children.splice(id, 1)
//                 this.model.selected = this.dsl.children[id - 2]
//                 this.numberreset();
//             } else {
//                 alert("不能再上了")
//             }

//         },
//         numberreset() {
//             this.dsl.children.forEach((currentvalue, index) => {
//                 currentvalue.wid = index + 1;
//                 currentvalue.props.No = currentvalue.wid
//             })
//         },
//         //选中方法
//         select(config) {
//             // 去除所有选中样式
//             this.dsl = removeChildrenBorder(this.dsl);
//             // 添加选中样式
//             config.dsl = addChildrenBorder(config.dsl);
//             this.model.selected = config.dsl;

//             // 组件拖拽处理
//             const editorElement = this.$refs.editor.$el;
//             // const node = `div.${this.model.selected.component}`;
//             const allElements = editorElement.querySelectorAll('div');
//             // const childElements = editorElement.querySelectorAll(node);
//             // 在添加新的监听器之前，先移除旧的监听器
//             // console.log(childElements)
//             allElements.forEach((item) => {
//                 item.removeEventListener('dragstart', this.dragStartHandler)
//                 item.removeEventListener('dragend', this.dragEndHandler)
//             })
//             // 在添加新的监听器之前，先移除旧的监听器
//             // if (childElements[sameid]) {
//             //     childElements[sameid].removeEventListener('dragstart', this.dragStartHandler);
//             //     childElements[sameid].removeEventListener('dragend', this.dragEndHandler);
//             // }
//             let sameid = this.model.selected.wid - 1;
//             // 筛选出以 ph- 开头的 div 元素
//             const phElements = Array.from(allElements).filter(div => {
//                 // 获取元素的类名数组
//                 const classList = div.classList;
//                 // 检查是否有任何类名以 'ph-' 开头
//                 return Array.from(classList).some(className => className.startsWith('ph-'));
//             });
//             let phoffsetTopbox = []
//             let phoffsetHeightbox = []
//             // 打印出所有匹配的元素
//             phElements.forEach((item) => {
//                 phoffsetTopbox.push(item.offsetTop)
//                 phoffsetHeightbox.push(item.offsetHeight)
//             })
//             // 定义事件处理函数，并保存引用
//             this.dragStartHandler = (e) => {
//             };

//             this.dragEndHandler = (e) => {
//                 // 注意：这里不需要移除事件监听器，因为它们会在select方法开始时被移除
//                 // console.log(e);
//                 // console.log("mouseupY轴   " + e.offsetY);
//                 //进行位置交换操作
//                 let newdsl;
//                 if (e.offsetY) {
//                     const arraylength = this.dsl.children.length;
//                     //将一号位组件拖拽到三号位上方
//                     //拖拽大约为范围为150-250px
//                     let i, j;
//                     let overdragid;
//                     let using_id = this.model.selected.wid;
//                     //phoffsetTopbox
//                     //phoffsetHeightbox
//                     const mouseupY = phoffsetTopbox[using_id - 1] + e.offsetY;
//                     const childlength = this.dsl.children.length
//                     //向下
//                     if (e.offsetY > 0) {
//                         for (i = using_id; i <= this.dsl.children.length;) {
//                             // console.log(i)
//                             // console.log(phoffsetTopbox[i], phoffsetHeightbox[i])
//                             //向下
//                             if (mouseupY > phoffsetTopbox[i] + 0.5 * phoffsetHeightbox[i] && mouseupY < phoffsetTopbox[i + 1] + 0.5 * phoffsetHeightbox[i + 1]) {
//                                 i++;
//                                 console.log(666)
//                                 break;
//                             } else if (mouseupY > 0 && mouseupY < phoffsetTopbox[i] + 0.5 * phoffsetHeightbox[i]) {
//                                 break;

//                             } else if (mouseupY > phoffsetTopbox[childlength - 1] + 0.5 * phoffsetHeightbox[childlength - 1]) {
//                                 i = childlength;
//                                 break;
//                             }
//                             else {
//                                 i++;
//                             }
//                         }
//                         console.log(" i is  " + i)
//                         //选中组件与目标位置不同
//                         if (this.model.selected.wid != i) {
//                             //复制
//                             let copied_element = this.dsl.children[this.model.selected.wid - 1]
//                             // //插入
//                             this.dsl.children.splice(i, 0, copied_element)
//                             //删除
//                             this.dsl.children.splice(using_id - 1, 1)
//                         }
//                     } else {
//                         //向上
//                         for (i = using_id; i > 0;) {
//                             // console.log(i)
//                             console.log(mouseupY)
//                             if (mouseupY > phoffsetTopbox[i - 2] - 0.5 * phoffsetHeightbox[i - 2] && mouseupY < phoffsetTopbox[i - 1] - 0.5 * phoffsetHeightbox[i - 1]) {
//                                 i = i - 2;
//                                 break;
//                             }
//                             //上半部分
//                             else if (mouseupY < phoffsetTopbox[i] && mouseupY > phoffsetTopbox[i - 2] + 0.5 * phoffsetHeightbox[i - 2]) {
//                                 break;
//                             } else if (mouseupY < phoffsetTopbox[0] + 0.5 * phoffsetHeightbox[0]) {
//                                 i = 0;
//                                 break;
//                             } else {
//                                 i--;
//                             }
//                         }
//                         if (this.model.selected.wid != i) {
//                             //复制
//                             let copied_element = this.dsl.children[this.model.selected.wid - 1]
//                             // //插入
//                             this.dsl.children.splice(i, 0, copied_element)
//                             //删除
//                             this.dsl.children.splice(using_id, 1)
//                         }
//                     }
//                     //重置序号
//                     this.dsl.children.forEach((currentvalue, index) => {
//                         currentvalue.wid = index + 1;
//                         currentvalue.props.No = currentvalue.wid
//                     })
//                 }
//             };

//             // 添加新的监听器
//             console.log(phElements)
//             phElements[sameid].setAttribute("draggable", "true");
//             phElements[sameid].addEventListener('dragstart', this.dragStartHandler);
//             phElements[sameid].addEventListener('dragend', this.dragEndHandler);

//             //更新视图
//             this.$refs.editor.$forceUpdate();
//         },
//         torenderpage() {
//             this.$router.push("/renderpage");
//         },
//         update() {
//             // console.log(this.model.selected.text)
//             // console.log(this.text)
//             if (this.text)
//                 this.model.selected.text = this.text

//         },
//         drop() {
//             // console.log(this.dsl)
//         },
//         showalldom() {
//         },
//         dragstart(com) {
//             // console.log(com.key)
//         },
//         //拖拽后添加元素的方法
//         dragend(com) {
//             // console.log(com.config)
//             const mydsl = this.dsl
//             function hasSamecomponent(dsl) {
//                 let samecomponent_id = 1
//                 dsl.children.forEach(child => {
//                     if (child.component === com.key) {
//                         samecomponent_id++;
//                     }
//                 });
//                 return samecomponent_id
//             }
//             this.component_id = this.component_id + 1;
//             //1.对拖入编辑器的组件元素基本配置项进行初始化
//             const newElInputNode = {
//                 component: com.key,
//                 wid: this.component_id,
//                 samecomponent_id: hasSamecomponent(mydsl),
//                 events: {
//                 },
//                 style: {},
//                 props: {},
//             }
//             //2.组件数据接口初始化
//             for (let key in com.config) {
//                 if (typeof com.config[key].default === 'function') {
//                     newElInputNode.props[key] = com.config[key].default()
//                 }
//                 else {
//                     newElInputNode.props[key] = com.config[key].default
//                 }
//             }
//             newElInputNode.props.No = newElInputNode.wid;
//             const updatedDsl = {
//                 ...this.dsl,
//                 children: [
//                     ...this.dsl.children,
//                     newElInputNode
//                 ]
//             };
//             this.dsl = updatedDsl
//         }
//     },
//     computed: {
//         canusedata() {
//             // let componentObj = JSON.parser(this.model.selected)
//             // return componentObj;
//         },
//         beselected() {
//             // 访问组件的根 DOM 元素
//             if (this.$refs.editor) {
//                 console.log(this.$refs.editor)
//             }
//             else return {}
//             console.log(this.model.selected.component)
//             const editorElement = this.$refs.editor.$el;
//             console.log(editorElement)
//             // let node = `div.${this.model.selected.component}`;
//             // console.log(node)
//             // // 找出所有所有子元素节点
//             // const allElements = editorElement.querySelectorAll('div');
//             // console.log(allElements)
//             // //找到对应元素节点
//             // const childElements = editorElement.querySelectorAll(node);

//             // // 打印子元素节点
//             // console.log(childElements);
//             // let sameid
//             // if (this.model.selected.samecomponent_id) {
//             //     sameid = this.model.selected.samecomponent_id - 1;
//             // }
//             // else {
//             //     sameid = 0
//             // }
//             // console.log(sameid)
//             // return {
//             //     'top': `${childElements[sameid].offsetTop}px`,
//             //     'left': 'px',
//             //     'height': `${childElements[sameid].clientHeight}px`,
//             //     'width': `${childElements[sameid].clientWidth - 5}px`,
//             //     'border': '3px dashed red',
//             //     'position': 'absolute',
//             //     'box-sizing': 'border-box',
//             //     'z-index': 2,
//             //     'background-color': 'transparent'
//             // }
//         },

//     },
//     mounted() {
//         // console.log(registerConfig)
//     }
// }
</script>

<style scoped>
.toolbar {
    width: 100%;
    height: 5.5%;
    border: 1px solid lightblue;
    display: flex;
    justify-content: space-between;
    /* 让子元素在容器中均匀分布，推动右侧内容到最右侧 */
    align-items: center;
    /* 垂直居中 */
}

.component {
    width: 28%;
    height: 80%;
    border: 1px solid lightcoral;
    position: absolute;
    left: 0%;
    top: 6%;
    display: flex;
    flex-direction: column;
    /* 设置子元素垂直排列 */
}

.renderpage {
    position: relative;
    top: 20px;
    left: 20px;
    height: 1000px;
    width: 375px;
    border: 2px solid black;
    border-radius: 10px 10px 10px 10px;
    overflow-y: auto;
}

.editPart {
    width: 375px;
    height: 655px;
    border: 1px solid lightblue;
    position: absolute;
    left: calc((100% - 375px) / 2);
    /* 计算水平居中位置 */
    top: 6%;
    overflow-y: auto;
    overflow-x: hidden;
    /* 垂直滚动 */
}

.setter {
    width: 28%;
    height: 80%;
    border: 1px solid lightblue;
    position: absolute;
    right: 0;
    top: 6%;
}

.preview {
    width: 45%;
    height: 60%;
    border: 1px solid lightcoral;
    position: absolute;
    right: 0;
    top: 0;
}

.test {
    width: 100%;
    height: 13%;
    border: 1px solid lightblue;
    position: absolute;
    right: 0;
    bottom: 0;
}

.material {

    width: 99%;
    height: auto;
    border: 1px solid black;
    margin-bottom: 10px;
}

.lc-editor {
    z-index: 0;
}
</style>