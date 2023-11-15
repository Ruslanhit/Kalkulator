const resultElement = document.getElementById('resultWin')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const submit = document.getElementById('submit')
const delenie = document.getElementById('delenie')
const umnogenie = document.getElementById('umnogenie')


const clickPlus = plus.onclick = plusFunc
const clickMinus = minus.onclick = minusFunc
const clickDelenie = delenie.onclick = delenieFunc
const clickUmnogenie = umnogenie.onclick = umnogenieFunc
submit.onclick = result


let onclick
let sum 


function plusFunc() {
    onclick = '+'
}
function minusFunc() {
    onclick = '-'
}
function delenieFunc() {
    onclick = '/'
}
function umnogenieFunc() {
    onclick = '*'
}




console.log(onclick)
function result(sum) {
    if(onclick == '+'){
        sum = Number(input1.value) + Number(input2.value)
        console.log(sum)
        return resultElement.textContent = sum
    } else if(onclick == '-'){
        sum = Number(input1.value) - Number(input2.value)
        console.log(sum)
        return resultElement.textContent = sum
    }else if(onclick == '/'){
        sum = Number(input1.value)/Number(input2.value)
        console.log(sum)
        return resultElement.textContent = sum
    }else if(onclick == '*'){
        sum = Number(input1.value) * Number(input2.value)
        console.log(sum)
        return resultElement.textContent = sum
    }
}