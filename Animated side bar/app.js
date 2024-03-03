var nav = document.getElementsByClassName('side-nav')[0]

var btn = document.getElementById('btn-nav')

var overlay = document.getElementsByClassName('nav-overlay')[0]

btn.addEventListener('click',()=>{
    nav.classList.toggle('open')
})

overlay.addEventListener('click',()=>{
    nav.classList.remove('open')
})