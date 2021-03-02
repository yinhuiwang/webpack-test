import './css/index.css';
// import './css/index.less'
// import './css/index.scss'

/**
 * 1. logo === 图片打包之后地址
 * 2. 图片等静态文件需要放在"/src/assets"目录下
 */
import logo from './assets/images/png/LOGO.png';
const hModel = require('./js/Header.js');
const cModel = require('./js/Content.js');
const fModel = require('./js/Footed.js');

hModel.createHeaderDiv();
cModel.createContentDiv();
fModel.createFootedDiv();

let fun = () => {
    console.log('fun。。。。。');
}
fun();

Promise.resolve().then(()=> {
    console.log('Promise......');
})

let imgImg = document.createElement('img');
imgImg.src = logo;
// imgImg.setAttribute('class', 'imgSize');
// // imgImg.src = logo;
document.getElementById('root').appendChild(imgImg);