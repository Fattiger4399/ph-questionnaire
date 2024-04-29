<template>
    <div class="ph-textarea" @click="handleClick">
        <div class="setborder">
            <span>{{text}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "我是miaoshukuang组件"
        },
        
    },
    data(){
        return{
            textarea:"hhhhhh"
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    },
    
};
</script>

<style scoped>
.text-center {
    text-align: center;
}
.setborder{
    display: flex;
    flex-direction: column;
    height: 80px;
    width: auto;
    border: 10px solid transparent;
}
span {
    font-family: "Microsoft YaHei", sans-serif;
}

</style>