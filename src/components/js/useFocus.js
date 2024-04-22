import {computed} from 'vue'

//useFocus用于处理画布中组件元素的选中
export function useFocus(data,callback){ //获取哪些元素被选中了
    const focusData = computed(() => {
        let focus = [];
        let unfocused = [];
        data.value.blocks.forEach(block => (block.focus ? focus : unfocused).push(block))
        return {focus,unfocused}
    })
    const clearBlockFocus = () => {
        data.value.blocks.forEach((block) => { block.focus = false })
    }
    const blockMousedown = (e, block) => {
        //block上我们规划一个属性focus 获取焦点后就将focus变为true
        e.preventDefault();
        e.stopPropagation();
        if (e.shiftKey) {
            block.focus = !block.focus
        } else {
            if (!block.focus) {
                clearBlockFocus();
                block.focus = true;//清空其他组件的focus属性
            } else {
                block.focus = false;
            }
        }
        console.log(e)
        callback(e)
    }
    return{
        blockMousedown,
        focusData
    }
}