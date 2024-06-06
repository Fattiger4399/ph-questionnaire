<template>
    <div>
        <div class="container">
            <div class="item-main">
                <!-- <FormBuild :key="key" :preview="preview" :formTemplate="formTemplate" :models="models" :config="ngConfig"
                ref="formBuild" :customComponents="customComponents" /> -->
                <FormBuild :key="key" :preview="preview" :formTemplate="formTemplate" :models="models"
                    :config="ngConfig" ref="formBuild" :customComponents="customComponents" />
            </div>
        </div>
    </div>
</template>

<script>
import FormBuild from '../packages/form-design/build.vue'
export default {
    components: {
        FormBuild
    },
    data() {
        return {
            visible: false,
            renderVisisble: false,
            previewWidth: 850,
            models: {},
            formTemplate: {},
            key: '1',

            preview: false,

            dataVisible: false,
            dataJson: ''
        };
    },
    created() {
        let jsonuserdsl = localStorage.getItem('user')
        let objectuserdsl = JSON.parse(jsonuserdsl)
        let realdsl = {
            list: []
        }
        // 遍历对象的键，这些键代表了数组索引
        for (let key in objectuserdsl.list) {
            // 使用对象的值（这里是一个对象）来构造数组元素
            const arrayItem = objectuserdsl.list[key];
            // 将对象转换为数组元素，并添加到结果数组中
            realdsl.list.push(arrayItem);
        }
        console.log(realdsl)
        // realdsl = {
        //     ...list,
        //     config: objectuserdsl.config
        // }
        realdsl.config = objectuserdsl.config

        this.formTemplate = realdsl
    }
}
</script>

<style>
.container {
    display: flex;
    justify-content: center;
    height: 100vh;
    /* 100% 视口高度 */
    width: 500px
}
</style>