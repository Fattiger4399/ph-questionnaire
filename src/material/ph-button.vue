<template>
    <div class="ph-button" @click="handleClick">
        <el-button>{{ text }}</el-button>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            default: "按钮组件",
            type: String
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>

<style>
.ph-button {
    display: flex;
    position:relative;
    width: 375px;
    justify-content: center;
    border: 5px solid transparent;
}
</style>