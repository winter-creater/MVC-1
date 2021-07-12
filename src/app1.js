import './app1.css'
import $ from 'jquery'

const $button1 = $('#btnAdd')
const $button2 = $('#btnMinus')
const $button3 = $('#btnMul')
const $button4 = $('#btnDivide')
const $number = $('#number')
const n = localStorage.getItem('n')
$number.text(n || 100)

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
