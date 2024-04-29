export function deepCopy(obj) {
    var objClone = {};
    if (obj && typeof obj === "object") {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepCopy(obj[key]);
                } else {
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

