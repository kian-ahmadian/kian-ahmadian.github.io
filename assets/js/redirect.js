function getAllUrlParams(url) {

    let queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    const obj = {};

    if (queryString) {
        queryString = queryString.split('#')[0];
        const arr = queryString.split('&');

        for (let i = 0; i < arr.length; i++) {
            const a = arr[i].split('=');

            let paramName = a[0];
            let paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
            if (paramName.match(/\[(\d+)?\]$/)) {
                const key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];
                if (paramName.match(/\[\d+\]$/)) {
                    const index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else obj[key].push(paramValue);
            } else {
                if (!obj[paramName]) obj[paramName] = paramValue;
                else if (obj[paramName] && typeof obj[paramName] === 'string'){
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);

                } else obj[paramName].push(paramValue);
            }
        }
    }

    return obj;
}


window.onload = () => {
    const paramsDict = getAllUrlParams(window.location.href);
    document.location.href = document.head.children[2].content + (paramsDict.href || "");
}