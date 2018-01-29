import './style/addImage.css';
let smallImg = document.createElement('img')
// 必须 require 进来
smallImg.src = require('../image/small.jpeg')
document.body.appendChild(smallImg)

let bigImg = document.createElement('img')
bigImg.src = require('../image/big.jpeg')
document.body.appendChild(bigImg)
