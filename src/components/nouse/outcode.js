// const fs = require('fs');

export function convertDSLToVueFile(dsl) {
  const childrenElements = dsl.children.map((child, index) => (
    `<${child.component} ${generateProps(child.props)} :style="${generateStyle(child.style)}">${child.text}</${child.component}>`
  )).join('\n');

  const template = `
<template>
  <${dsl.component} ${generateProps(dsl.props)} :style="{${generateStyle(dsl.style)}}">
    ${childrenElements}
  </${dsl.component}>
</template>
`;

  const script = `
    <script>
    export default {
      data() {
        return {
          dsl: ${JSON.stringify(dsl)}
        };
      }
    };
    </script>
    `;

  const style = `
    <style scoped>
    /* 根据需要添加样式 */
    </style>
    `;

  const vueFileContent = template + script + style;
  return vueFileContent;
  // fs.writeFileSync(`${fileName}.vue`, vueFileContent);
}

function generateProps(props) {
  if (!props || Object.keys(props).length === 0) {
    return '';
  }
  // console.log(props)

  return Object.keys(props).map(key => `${key}="${props[key]}"`).join(' ');
}

function generateStyle(style) {
  if (!style || Object.keys(style).length === 0) {
    return '{}';
  }
  return Object.keys(style).map(key => `'${key}':'${style[key]}'`).join(' , ');
}

const dsl = {
  "component": "div",
  "props": {},
  "style": {},
  "children": [{
    "component": "button",
    "props": {},
    "style": {},
    "text": "cao"
  }]
};

// convertDSLToVueFile(dsl, 'GeneratedComponent');