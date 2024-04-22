import { computed, defineComponent, inject, ref } from "vue";
import './editor.scss'
import EditorBlock from "./editor-block";
import deepcopy from "deepcopy";
import { useMenuDragger } from "./useMenuDragger";
import { useFocus } from "./useFocus";
export default defineComponent({
    props: {
        modelValue: { type: Object }
    },
    emits: ['update:modelValue'],//触发事件
    setup(props, ctx) {
        const data = computed({
            get() {
                return props.modelValue
            },
            set(newValue) {
                ctx.emit('update:modelValue', deepcopy(newValue))
            }
        })

        const containerStyles = computed(() => ({
            width: data.value.container.width + 'px',
            height: data.value.container.height + 'px'
        }))

        const config = inject('config')

        const containerRef = ref(null);
        console.log(containerRef)
        //1.实现菜单拖拽功能
        const { dragstart, dragend } = useMenuDragger(containerRef, data)

        //2.实现获取焦点
        let dragState = {
            startX: 0,
            startY: 0
        }
        let { blockMousedown, focusData } = useFocus(data, (e) => {
            mousedown(e)
        });
        const mousemove = (e) => {
            let { clientX: moveX, clientY: moveY } = e;
            let endX = moveX - dragState.startX;
            let endY = moveY - dragState.startY;

            focusData.value.focus.forEach((block, idx) => {
                // console.log(dragState)
                block.top = dragState.startPos[idx].top + endY;
                block.left = dragState.startPos[idx].top + endX;
            })
        }
        const mouseup = (e) => {
            document.removeEventListener('mousemove', mousemove)
            document.removeEventListener('mouseup', mouseup)
        }
        const mousedown = (e) => {
            dragState = {
                startX: e.clientX,
                startY: e.clientY,
                startPos: focusData.value.focus.map(({ top, left }) => ({ top, left }))
            }
            console.log(dragState)
            document.addEventListener('mousemove', mousemove)
            document.addEventListener('mouseup', mouseup)
        }


        //3.实现拖拽多个元素的功能


        const clearBlockFocus = () => {
            data.value.blocks.forEach((block) => { block.focus = false })
        }
        const containerMousedown = () => {
            clearBlockFocus(); //点击容器让选中的失去焦点
        }
        return () => <div>
            <div class="editor-left">
                {/* 根据注册列表 渲染对应的内容 可以实现h5的拖拽*/}
                {config.componentList.map(component => (
                    <div class="editor-left-item"
                        draggable
                        onDragstart={e => dragstart(e, component)}
                        onDragend={dragend}
                    >
                        <span>{component.label}</span>
                        <div>{component.preview()}</div>
                    </div>
                ))}
            </div>

            <div class="editor-top">菜单栏</div>
            <div class="editor-right">属性控制栏目</div>
            <div class="editor-container">
                <div class="editor-container-canvas">
                    {/* 产生内容 */}
                    <div class="editor-container-canvas__content"
                        style={containerStyles.value}
                        ref={containerRef}
                        onMousedown={containerMousedown}>
                        {
                            (data.value.blocks.map(block => (
                                <EditorBlock
                                    class={block.focus ? 'editor-block-focus' : ''}
                                    block={block}
                                    onMousedown={(e) => blockMousedown(e, block)}
                                ></EditorBlock>
                            )))
                        }
                    </div>
                </div>
            </div>

        </div>
    }
})