<template>
    <div class="ph-h1" @click="handleClick">
        <div class="setborder">
            <div>
                <h1 :style="{ fontSize: fontSize }">{{ text }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextComponent',
    props: {
        text: {
            type: String,
            required: true,
            default: "我是标题组件"
        },
        size: {
            type: String,
            required: true,
            validator: (value) => ['large', 'medium', 'small'].includes(value),
            default: 'large'
        },
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    },
    computed: {
        fontSize() {
            const sizeMap = {
                large: '35px',
                medium: '25px',
                small: '10px'
            };
            return sizeMap[this.size];
        }
    },
};
</script>

<style scoped>
.text-center {
    text-align: center;
}
.setborder{
    height: 80px;
    width: auto;
    border: 10px solid transparent;
    text-align: center;
}

</style>