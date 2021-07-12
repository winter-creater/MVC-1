import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
$tabBar.on('click', "li", (e) => {
    // console.log(e.currentTarget);
    // console.log(e.target);
    const $li = $(e.currentTarget)
    const index = $li.index()
    console.log(index);
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
    $li.addClass('selected')
        .siblings().removeClass('selected')
})