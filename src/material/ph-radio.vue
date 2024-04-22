<template>
    <!-- <div class="ph-radio" @click="handleClick" @mousedown="down_1" @mouseup="up_1" @mousemove="move_1"> -->
    <div class="ph-radio" @click="handleClick">

        <div class="container">
            <span class="title">{{ text }}</span>
            <div class="item">
                <el-radio class="item_1" v-model="radio" label="1">{{ options_1 }}</el-radio>
                <el-radio class="item_2" v-model="radio" label="2">{{ options_2 }}</el-radio>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        config: {
            default: function () {
                return {}
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
    data() {
        return {
            radio: '1'
        };
    },
    computed: {
        text() {
            return this.No + '、' + this.title
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        },
        // down_1(evt){
        //     this.$emit('mousedown', evt);
        // },
        // up_1(evt){
        //     this.$emit('mouseup', evt);
        // },
        // move_1(evt){
        //     // this.$emit('mousemove', evt);
        // }

    }
}
</script>

<style>
.ph-radio {}

.container {
    display: flex;
    flex-direction: column;
    height: 80px;
    width: auto;
    border: 10px solid transparent;
}

.title {
    display: flex;
    flex-direction: column;
}

.item {
    display: flex;
    flex-direction: column;
    position: relative;
    left: 15px;
}

.item_1 {
    position: relative;
    top: 12px;
}

.item_2 {
    position: relative;
    top: 20px;
}
</style>