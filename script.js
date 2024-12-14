let input = document.getElementById('input-todo')
let list = document.getElementById('list')
let mode = document.getElementById("mode")

function addItem() {
    let li = document.createElement('li')
    li.innerHTML = input.value
    list.appendChild(li)
    input.value = ''

    let span = document.createElement("span")
    span.innerHTML = '&#215;'
    li.appendChild(span)
}

list.addEventListener("click", function(go){
    if (go.target.tagName === "LI"){
        go.target.classList.toggle("check")
        save()
    }else if (go.target.tagName === "SPAN"){
        go.target.parentElement.remove()
    }
})


mode.addEventListener("click", function(){
    document.getElementById("modechange").style.cssText= "background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);"
})