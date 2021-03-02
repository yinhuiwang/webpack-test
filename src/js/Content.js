function createContentDiv() {
    let rDiv = document.createElement('div');
    rDiv.innerText = '我是内容';
    document.getElementById('root').appendChild(rDiv);
}
exports.createContentDiv = createContentDiv;