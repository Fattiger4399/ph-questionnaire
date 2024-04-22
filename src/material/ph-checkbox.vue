<template>
    <div class="ph-checkbox" @click="handleClick">
        <div class="checkbox_1">
            <span>{{ text }}</span>
            <div class="checkbox_2">
                <el-checkbox class="el-cleckbox" v-for="item in options" :label="item" :key="item">{{ item
                    }}</el-checkbox>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
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
    data() {
        return {
            checkList: []
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
};
</script>
<style>
.checkbox_1 {
    display: grid;
    grid-template-columns: 1fr;
    width: 325px;
    height: auto;
    border: 10px solid transparent;
}

.el-checkbox {
    width: 325px;
    top: px;
    left: 15px;
    /* white-space: pre-wrap; */
}
</style>