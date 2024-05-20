<template>
    <div class="document-interface">
        <el-container>

            <!-- 左侧菜单栏 -->
            <el-aside width="300px" class="menu-aside">
                <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :default-openeds="openeds"
                    @select="handleMenuItemClick">
                    <el-submenu index="0">
                        <template slot="title">
                            <i class="el-icon-monitor" style="color: #409EFF ;font-size: 30px;padding-right: 13px;"></i>
                            <span>工作台</span>
                        </template>
                    </el-submenu>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-question"
                                style="color: #409EFF ;font-size: 30px;padding-right: 13px;"></i>
                            <span>问卷模板</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                分组一</template>

                            <el-menu-item index="1-1">
                                <template>
                                    <i class="el-icon-edit"></i>
                                    饮食偏好调查问卷
                                </template>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <template>
                                    <i class="el-icon-edit"></i>
                                    学业完成情况调查问卷
                                </template>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location" style="color: brown ;font-size: 30px;padding-right: 13px;"></i>
                            <span>订单模板</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                分组一</template>

                            <el-menu-item index="2-1">
                                <template>
                                    <i class="el-icon-edit"></i>
                                    汽车销售订单
                                </template>
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <template>
                                    <i class="el-icon-edit"></i>
                                    文具销售订单
                                </template>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-document"
                                style="color: #409EFF ;font-size: 30px;padding-right: 15px;"></i>
                            <span>报表模板</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                分组一</template>

                            <el-menu-item index="3-1">
                                <template>
                                    <i class="el-icon-edit"></i>
                                    公司财务统计报表
                                </template>
                            </el-menu-item>
                            <el-menu-item index="3-2">
                                <template>
                                    <i class="el-icon-edit"></i>
                                    耗材报销模板
                                </template>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-document"
                                style="color: #409EFF ;font-size: 30px;padding-right: 15px;"></i>
                            <span>用户登录注册模板</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                分组一</template>

                            <el-menu-item index="3-1">
                                <template>
                                    <i class="el-icon-edit"></i>
                                    新用户注册信息表
                                </template>
                            </el-menu-item>
                            <el-menu-item index="3-2">
                                <template>
                                    <i class="el-icon-edit"></i>
                                    用户登录模板
                                </template>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>

            </el-aside>

            <el-container>
                <!-- 右侧上方工具栏 -->
                <el-header class="tool-header">
                    <div class="tool-header-left">
                        <div>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    选项<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>菜单项1</el-dropdown-item>
                                    <el-dropdown-item>菜单项2</el-dropdown-item>
                                    <el-dropdown-item>菜单项3</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <div>
                            <span class="divider">|</span>
                        </div>
                        <div>
                            <el-button type="text" icon="el-icon-edit" class="white-button"
                                @click="toeditpage">编辑</el-button>
                        </div>
                        <div>
                            <el-button type="text" icon="el-icon-data-analysis" class="white-button">数据管理</el-button>
                        </div>
                    </div>
                    <div>
                        <el-button icon="el-icon-search">搜索</el-button>
                    </div>
                    <div>
                        <el-button type="success" icon="el-icon-check" circle></el-button>
                    </div>
                    <div>
                        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                    </div>
                    <div>
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    </div>
                    <div>
                        <el-button type="danger" icon="el-icon-check" circle></el-button>
                    </div>
                    <div>
                        <el-button type="primary" :loading="true">加载中</el-button>
                    </div>
                    <div>
                        <el-button type="primary" icon="el-icon-plus">添加</el-button>
                    </div>
                </el-header>

                <!-- 右侧下方空白 -->
                <el-main class="content-main">
                    <!-- 渲染 -->
                    <div class="document-content">
                        <ContainerPanel :formTemplate="formTemplate" @handleSelectItem="handleSelectItem"
                            :selectItem="selectItem" :arrow="arrow">
                        </ContainerPanel>

                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>


import HeaderPanel from '../packages/form-design/panel-header/index.vue'
import DragPanel from '../packages/form-design/panel-drag/index.vue'
import ContainerPanel from '../packages/form-design/panel-container/index.vue'
import PropertiesPanel from '../packages/form-design/panel-properties/index.vue'
import { use } from '../packages/locale/index'
import { getUUID } from '../packages/utils/index'
import cloneDeep from 'lodash/cloneDeep'
import LocalMixin from '../packages/locale/mixin.js'
import { deepCopy } from '@/utils/deepCopy'

export default {
    mixins: [LocalMixin],
    name: 'DocumentInterface',
    components: {
        HeaderPanel,
        DragPanel,
        ContainerPanel,
        PropertiesPanel
    },
    data() {
        return {
            // 可以在这里定义数据
            dsl: {},
            openeds: ['1', '2', '3'],
            selectItem: {},
            arrow: false,
            activeIndex: '1-1',
            formTemplate: this.template || {
                list: [
                ],
                config: {
                    labelPosition: 'left',
                    labelWidth: 100,
                    size: 'mini',
                    outputHidden: true, //  是否输出隐藏字段的值 默认打开,所有字段都输出
                    hideRequiredMark: false,
                    syncLabelRequired: false,
                    labelSuffix: '', // 标签后缀
                    customStyle: ''
                }
            },
        };
    },
    props: {
        template: {
            type: Object,
            default: () => {
                return {
                    list: [
                        {
                            type: "text",
                            event_: false,
                            listen_: false,
                            options: {
                                size: "mini",
                                type: "primary",
                                align: "left",
                                control: "",
                                eventName: "",
                                script: "",
                                plain: false,
                                circle: false,
                                round: false,
                                disabled: false
                            },
                            label: "左侧选择相应模板以展示",
                            labelWidth: 0,
                            width: "100%",
                            span: 24,
                            model: "button_17158490712962",
                            key: "button_17158490712962",
                            dynamicLabel: false
                        },
                        {
                            type: "button"
                        }
                    ],
                    config: {
                        labelPosition: 'top',
                        labelWidth: 80,
                        size: 'mini',
                        outputHidden: true, //  是否输出隐藏字段的值 默认打开,所有字段都输出
                        hideRequiredMark: false,
                        syncLabelRequired: false,
                        labelSuffix: '', // 标签后缀
                        customStyle: ''
                    }
                }
            }
        },

    },
    created: {
    },
    watch: {
        httpConfig: {
            handler(newVal) {
                window.nghttpConfig = newVal
            },
            deep: true,
            immediate: false
        },
        formTemplate: {
            handler(newVal) {
                this.$emit('update:template', newVal)
            },
            deep: true,
            immediate: false
        }
    },
    provide() {
        return {
            customC: this.components,
            configC: () => this.templateConfig,
            //dictsC: this.dicts,
            httpConfigC: this.httpConfig,
            ngConfig: this.config
        }
    },
    created() {
        if (this.formTemplate == null) {
            this.formTemplate = {
                list: [],
                config: {
                    labelPosition: 'left',
                    labelWidth: 100,
                    size: 'mini',
                    outputHidden: true, //  是否输出隐藏字段的值 默认打开,所有字段都输出
                    hideRequiredMark: false,
                    syncLabelRequired: false,
                    customStyle: ''
                }
            }
        }

        if (this.httpConfig) {
            window.nghttpConfig = this.httpConfig
        }
        const index =localStorage.getItem('userindex')
        if (index) {
            this.activeIndex = index
            const map = require('./examplejson/map.js')
            let __dirname = './examplejson/'
            let path = map.default[index]
            const jsonData = require(`${__dirname + path}`);
            this.formTemplate = jsonData
        }
    },
    methods: {
        //获取菜单栏点击项 index
        handleMenuItemClick(index) {
            localStorage.setItem('userindex', index)

            const map = require('./examplejson/map.js')
            let __dirname = './examplejson/'
            let path = map.default[index]
            const jsonData = require(`${__dirname + path}`);
            this.formTemplate = jsonData
            const dsl = deepCopy(this.formTemplate)
            console.log(this.formTemplate)
            console.log(dsl)

            localStorage.setItem('user', JSON.stringify(dsl));
            // const dsldata = localStorage.getItem('user')
            // console.log(JSON.parse(dsldata))

        },
        handleSelectItem(record) {
            console.log(record)
            this.selectItem = record
        },

        useLocale(val) {
            use(val)
            this.i18nkey = getUUID()

            this.$ngform_bus.$emit('i18nRefresh')
        },
        // 返回编辑好的模板
        getModel() {
            const model = cloneDeep(this.formTemplate)

            return model
        },
        // 初始化模板
        initModel(formTemplate) {
            const modelData = cloneDeep(formTemplate)

            this.importData(modelData)
        },
        // 从模板处导入json表单模板
        importData(formTemplate = {}) {
            this.formTemplate.list = formTemplate.list
            for (let k in formTemplate.config) {
                this.template.config[k] = formTemplate.config[k]
            }
            //this.formTemplate.config = formTemplate.config;
        },
        toeditpage() {
            this.$router.push('./editpage')
        }
    }
};
</script>

<style scoped>
.document-interface {
    height: 100%;
    overflow: hidden;
}

.menu-aside {
    border-right: 2px solid black;
    /* 设置右侧边框为1像素宽的黑色实线 */
    height: 100vh;
    background-color: #fff;
    color: #fff;
}

.tool-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.tool-header-left {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 300px
}

.content-main {
    padding: 14px 12px 0px 12px;
    background-color: #d6d6d6;
    overflow: auto;
}

.document-content {
    width: 100%;
    height: calc(100vh - 75px);
    overflow: auto;
    border: 1px solid #ddd;
    background-color: #ffffff;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px 5px 0px 0px;
}
</style>
<style>