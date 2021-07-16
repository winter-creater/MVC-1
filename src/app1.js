import './app1.css'
import $ from 'jquery'
// 初始化html
const html = `
<section id="app1">
<div class="output">
  <span id="number">100</span>
</div>

<div class="actions">
  <button id="btnAdd">+1</button>
  <button id="btnMinus">-1</button>
  <button id="btnMul">x2</button>
  <button id="btnDivide">÷2</button>
</div>
</section>
`
const $element = $(html).prependTo($('body>.page'))

// 寻找重要的元素
const $button1 = $('#btnAdd')
const $button2 = $('#btnMinus')
const $button3 = $('#btnMul')
const $button4 = $('#btnDivide')
const $number = $('#number')
// 初始化数据
const n = localStorage.getItem('n')
// 将数据渲染到页面
$number.text(n || 100)

// 绑定鼠标事件
$button1.on('click', () => {
  let n = parseInt($number.text()) //获取html文件的100
  n += 1
  localStorage.setItem('n', n)
  $number.text(n)
})
$button2.on('click', () => {
  let n = parseInt($number.text()) //获取html文件的100
  n -= 1
  localStorage.setItem('n', n)
  $number.text(n)
})
$button3.on('click', () => {
  let n = parseInt($number.text()) //获取html文件的100
  n *= 2
  localStorage.setItem('n', n)
  $number.text(n)


})
$button4.on('click', () => {
  let n = parseInt($number.text()) //获取html文件的100
  n /= 2
  localStorage.setItem('n', n)
  $number.text(n)
})
