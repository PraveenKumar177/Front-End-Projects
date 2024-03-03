var input=document.getElementById("input")
var listItems=document.getElementById("list")

function add(){
    let li =document.createElement("li")
    li.innerHTML=input.value +"<button onclick='deleteItems(event)'>delete</button>"
    listItems.append(li)
}

function deleteItems(event){
    event.target.parentElement.remove()

}