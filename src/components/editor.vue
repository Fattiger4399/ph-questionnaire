<script>
export default {
    data() {
        return {
            a: true
        }
    },
    props: ['dsl', 'model'],
    render(h) {
        let dsl = this.dsl;
        return this.generator(h, dsl);
    },
    methods: {
        adddraggable() {

        },
        select(e) {
            console.log(e);
        },
        generator(h, dsl) {
            //h(tagName，props，children)
            //当前元素，元素属性，子元素
            return h(dsl.component, this.generateProps(h, dsl), this.generateChildren(h, dsl));
        },
        generateProps(h, dsl) {
            let self = this;
            let result = {
            }
            result.props = {
                ...dsl.props
            }
            result.attrs = {
                ...dsl.attrs
            }
            result.style = { ...dsl.style }

            // if (self.model.selected) {
            //     if (self.model.selected.wid == dsl.wid) {
            //         // 获取所有的按钮元素
            //         const allElements = document.getElementsByTagName("div");
            //         // console.log(allElements)

            //     }
            // }
            if (dsl.events) {
                result.on = {
                    click: function (e) {
                        // console.log(e, dsl.wid, this);
                        e.preventDefault();
                        self.$emit('select', { e, dsl });
                    },
                };

            }
            return result;
        },/**
 * 该函数用于生成child节点
 * @param {*} h 
 * @param {*} dsl 
 */
        generateChildren(h, dsl) {

            let result = dsl.children &&
                dsl.children.map((child) => this.generator(h, child))
                || [];

            // (A&&B)||C

            if (dsl.text) result.push(dsl.text)
            // console.log(result)
            return result;
        }
    },
    mounted() {
    }
}
</script>
