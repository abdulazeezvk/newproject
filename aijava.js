var menu = document.getElementById('in_up');
var icon = document.getElementById('bar');

icon.addEventListener('click',(event)=>{
    menu.classList.toggle('hide')
    event.stopPropagation()
})

document.addEventListener('click',(event)=>{
    if(menu.classList.contains('hide')){
        menu.classList.remove('hide')
    }
    event.stopPropagation()
})
