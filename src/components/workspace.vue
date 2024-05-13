<template>
    <div class="document-interface">
        <el-container>
            <!-- 左侧菜单栏 -->
            <el-aside width="300px" class="menu-aside">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                    :default-openeds="openeds">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-question" style="color: #409EFF ;font-size: 30px;padding-right: 13px;"></i>
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
                    <div class="document-content">
                        <lc-editor ref="editor" :dsl="dsl" class="lc-editor"></lc-editor>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import lcEditor from './editor.vue'

import dsl from './dsl.json'
export default {
    name: 'DocumentInterface',
    components: {
        lcEditor
    },
    data() {
        return {
            // 可以在这里定义数据
            dsl: {},
            openeds: ['1', '2', '3']
        };
    },
    created() {
        this.dsl = dsl
    },
    methods: {
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