<template>
    <div class="ph-input" @click="handleClick">
        <div class="el-input_1">
            <span>{{ text }}</span>
            <div class="el-input_2">
                <el-input v-model="inputvalue" placeholder="输入你的答案" style="width: 310px;"></el-input>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        No: {
            default: 3,
            type: Number
        },
        title: {
            default: "单行填空",
            type: String
        },
        
    },
    data() {
        return {
            inputvalue: "请输入"
        };
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    },
    computed: {
        text() {
            return this.No + '、' + this.title
        }
    }
}
</script>

<style>
.ph-input {
    height: 80px;
    width: auto;
    display: flex;
    flex-direction: column;
    border: 10px solid transparent; 
}

.el-input_1 {
    top: 10px;
    width: auto,
}

.el-input_2 {
    position:relative;
    top: 10px;
    left: 10px;
    width: 50%,
}
</style>