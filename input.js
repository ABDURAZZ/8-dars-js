let body = document.querySelector('body')
let tugma1 = document.querySelector('#btn1')
let tugma2 = document.querySelector('#btn2')
let text = document.getElementById('h3')


let num = 0


tugma1.addEventListener('click', () => {
    tugma1.style.color = 'red'
    num++
    text.innerHTML = num
})

tugma2.addEventListener('click', () => {
    tugma2.style.color = 'red'
    num-- 
    text.innerHTML = num
})