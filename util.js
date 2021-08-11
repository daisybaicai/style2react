// const vscode = require("vscode");

function toHump(name) {
    return name.replace(/\-(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}

/**
 * 正则匹配转换
 * @param str 选中文本
 */
function transform(str) {
  const result = str.replace(/style="([\s\S\n]*?)"/g, function (_, s) {
    const v = s.trim();
    // debugger;
    const arr1 = v.split(";");
    const arr2 = arr1.filter(item => item).map(item => {
        let r1 = item.trim();
        const [key, value] = r1.split(":");
        const k1 = toHump(key.trim());
        const k2 = value.trim();
        return `${k1}: '${k2}'`
    }) || [];
    let res = `style={{${arr2.join(',')}}}`
    console.log('res', res);
    return res;
  });

  return result;
}

module.exports = {
  transform,
};
