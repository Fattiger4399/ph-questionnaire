export function removeChildrenBorder(data) {
    if (data.children && Array.isArray(data.children)) {
        data.children.forEach(child => {
            if (child.style && child.style.border) {
                child.style.border = "";
            }
        });
    }
    return data;
}

export function addChildrenBorder(data) {
    // console.log(data)
    if (data.style) {
        data.style={
            ...data.style,
            'border':'1px dashed red',
        }
    }
    return data;
}