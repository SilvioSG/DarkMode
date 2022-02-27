let btn = document.querySelector('.btn')
let bg = document.querySelector('.bg')
let res = document.querySelector('.res')
    
btn.onclick = function() {
    bg.classList.toggle('ativo')
    if (bg.classList.contains("ativo")){
        res.innerHTML= 'Dark Mode'
    } else {
        res.innerHTML='Light Mode'
    }
}