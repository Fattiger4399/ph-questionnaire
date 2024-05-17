<script>

const generator = (h, dsl) => {
    //h(tagName，props，children)
    return h(dsl.component, generateProps(h, dsl), generateChildren(h, dsl));
}
const generateProps = (h, dsl) => {
    let result = {
    }
    result.props = {
        ...dsl.props
    }
    result.attrs = {
        ...dsl.attrs
    }
    result.style = { ...dsl.style }

    if (dsl.events) {
        result.on = {};
        for (let key in dsl.events) {
            let event = dsl.events[key];
            result.on[key] = event;


        }
    }
    console.log(result);
    return result;
}
/**
 * 该函数用于生成child节点
 * @param {*} h 
 * @param {*} dsl 
 */
const generateChildren = (h, dsl) => {

    let result = dsl.children &&
        dsl.children.map((child) => generator(h, child))
        || [];

    // (A&&B)||C

    // true&&true=true
    // false&&false=false
    // true&&false=false
    // 数学的 & 并且，  当小红三岁且小黄三岁时，我们给她们糖果。此时小红三岁为假（false）。

    //递归不是一个好的实现，建议使用循环。


    if (dsl.text) result.push(dsl.text)
    return result;
}
export default {
    data() {
        return {
            // dsl: {
            //     component: 'div',
            //     props: {
            //     },
            //     style: { width: '200px', height: '150px', background: 'black' },
            //     children: [
            //         {
            //             component: 'el-button',
            //             props: {
            //                 size: 'mini',
            //             },
            //             attrs: {

            //             },
            //             text: '123123',
            //             events: {
            //                 'click': (e) => {
            //                     alert(1123);
            //                 }
            //             }
            //         }
            //     ]
            // }
        }
    },

    props: ['dsl'],
    render(h) {
        let dsl = this.dsl;
        return generator(h, dsl);
    },
}
</script>
