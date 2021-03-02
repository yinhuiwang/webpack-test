function createFootedDiv() {
    let rDiv = document.createElement('div');
    rDiv.innerText = '我是尾部';
    document.getElementById('root').appendChild(rDiv);
}
exports.createFootedDiv = createFootedDiv;