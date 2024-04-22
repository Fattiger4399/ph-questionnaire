<template>
    <div>
        <div v-if="dsl.props.No">
            <span>序号</span>
            <el-input v-model="dsl.props.No"></el-input>
        </div>
        <div v-if="dsl.props.title">
            <span>标题</span>
            <el-input v-model="dsl.props.title"></el-input>
        </div>
        <div v-if="dsl.props.options_1">
            <span>选项文本_1</span>
            <el-input v-model="dsl.props.options_1"></el-input>
        </div>
        <div v-if="dsl.props.options_2">
            <span>选项文本_1</span>
            <el-input v-model="dsl.props.options_2"></el-input>
        </div>
        <div v-if="dsl.props.options">
            <div v-for="(item,id) in dsl.props.options" :key="item">
                <span>选项{{id+1}}</span>
                <el-input v-model="dsl.props.options[id]"></el-input>
            </div>
        </div>

        <el-button @click="dosth">测试</el-button>

    </div>
</template>

<script>
export default {
    props: {
        dsl: {
            default: function () {
                return {}
            },
            type: Object
        }
    },
    mounted() {
        console.log(this.dsl)
    },
    methods: {
        dosth() {
            console.log(this.dsl)
        }
    },
    computed: {
        isDsl() {
            console.log(this.dsl)
            if (this.dsl) return 1;
            else return 0;
        }
    }
}
</script>

<style></style>