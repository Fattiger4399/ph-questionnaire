export function movefunction(selected, dsl) {
    let currentComponent = null;
    const dragenter = (e) => {
        e.dataTransfer.dropEffect = 'move'; //h5的拖动图标
    }

    const dragover = (e) => {
        e.preventDefault();
    }

    const dragleave = (e) => {
        e.dataTransfer.dropEffect = 'none';
    }

    // const drop = (e) => {
    //     //先留在这
    //     console.log(e.offsetY)
    //     console.log(e.offsetX)
    //     let blocks = data.value.blocks;//内部已渲染的组件
    //     data.value = {
    //         ...data.value, blocks: [
    //             ...blocks,
    //             {
    //                 top: e.offsetY,
    //                 left: e.offsetX,
    //                 zIndex: 1,
    //                 key: currentComponent.key,
    //                 alignCenter: true //松手时剧中 
    //             }
    //         ]
    //     }
    //     currentComponent = null
    // }
    const drop = (e) => {
        console.log(e.offsetY);
        console.log(e.offsetX);
    }
    const dragstart = (e, component) => {
        //dragenter进入元素中
        // containerRef.value.addEventListener('dragover', dragover)
        // containerRef.value.addEventListener('drop', drop)
        // currentComponent = component
        const editPartElements = document.querySelectorAll('.editPart button');
        console.log(editPartElements[0])
        editPartElements[0].addEventListener('drop', drop)
    }
    const dragend = (e) => {
        // containerRef.value.removeEventListener('dragenter', dragenter)
        // containerRef.value.removeEventListener('dragover', dragover)
        // containerRef.value.removeEventListener('dragleave', dragleave)
        // containerRef.value.removeEventListener('drop', drop)
        console.log(selected, dsl)

    }
    return {
        dragstart,
        dragend
    }
}