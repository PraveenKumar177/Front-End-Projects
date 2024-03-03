//select container
let container= document.querySelector('.container')

let newDocument = document.querySelector('#new')
let open = document.querySelector('.open')
let popup = document.querySelector('#popup')

newDocument.addEventListener('click',()=>{
    open.style.display='block'
    popup.style.display='block'
})

popup.addEventListener('click',(event)=>{
    event.preventDefault()
})

//selecting cancel and add buttons 
let cancel = document.querySelector('#cancel')
let add = document.querySelector('#add')

cancel.addEventListener('click',()=>{
    popup.style.display='none';
    open.style.display='none'
})

//selecting form elements
let title = document.getElementById('title')
let text = document.getElementById('text')
let des = document.getElementById('des')
add.addEventListener('click',()=>{
    var div = document.createElement('div')
    div.setAttribute('id','content')
    div.innerHTML=`<h2>${title.value}</h2>
                    <p>${text.value}</p>
                    <p>${des.value}</p>
                    <button id="del"> Delete</button>`
                    open.style.display='none'
                    popup.style.display='none'
    container.append(div)
})
//selecting delete button
let del=document.getElementById('del')
del.addEventListener('click',(event)=>{
    event.target.parentElement.remove()
})


