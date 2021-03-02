function createHeaderDiv() {
    let rDiv = document.createElement('div');
    rDiv.innerText = '我是头部';
    document.getElementById('root').appendChild(rDiv);
}
exports.createHeaderDiv = createHeaderDiv;

