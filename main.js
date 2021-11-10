console.log('JS connected')

let count = 0;

// const counterText = document.querySelector('#counter')
const counterText = document.getElementById('counter')


const minusBtn = document.querySelector('#minus-btn')
const plusBtn = document.querySelector('#plus-btn')
const resetBtn = document.querySelector('#reset-btn')
// console.log(minusBtn)


function increase(){
    count++
    counterText.textContent = count
    // console.log(count)
}

function decrease(){
    count--
    counterText.textContent = count
    // console.log(count)
}

function reset(){
    count = 0
    counterText.textContent = count
    // console.log(count)
}

minusBtn.addEventListener('click',decrease)
plusBtn.addEventListener('click',increase)
resetBtn.addEventListener('click',reset)

const themeBtns = document.querySelectorAll('.theme-buttons')
// console.log(themeBtns)

for(let i = 0;i < themeBtns.length;i++){
    themeBtns[i].addEventListener('click',selectTheme)
}

function selectTheme(event){
    const theme = event.target.textContent
    // console.log(theme)
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

    const buttons = document.querySelectorAll('button')

    for(let i = 0;i < buttons.length;i++){
        buttons[i].className = theme
    }

}


