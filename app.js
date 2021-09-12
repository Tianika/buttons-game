const button = document.querySelector('.button')
const buttons = document.querySelector('.buttons')

let i = 1

buttons.addEventListener('click', (event) => {
  const target = event.target
  if (target !== buttons) {
    target.remove()
    addButtons()
  }
})

buttons.addEventListener('mouseover', (event) => {
  const target = event.target
  if (target !== buttons) {
    addShadow(target)
  }
})

buttons.addEventListener('mouseout', (event) => {
  const target = event.target
  console.log(target)
  if (target !== buttons) {
    removeShadow(target)
  }
})

function addButtons() {
  setTimeout(addOneButton, 100)
  setTimeout(addOneButton, 100)
}

function addOneButton() {
  const buttonNew = document.createElement('button', 'button')

  buttons.appendChild(buttonNew)
  buttonNew.classList = 'button'
  buttonNew.style.display = 'absolute'
  buttonNew.style.backgroundColor = randomColor()
  buttonNew.style.transform = `rotate(${Math.random() / 2}turn)`
  buttonNew.style.top = `${Math.random() * 1040}px`
  buttonNew.style.left = `${Math.random() * 1980}px`

  if (i % 100 === 0) {
    buttonNew.textContent = `Wow! It's ${i}!`
    buttonNew.style.width = '500px'
    buttonNew.style.height = '140px'
    buttonNew.style.fontSize = '36px'
  } else if (i % 10 === 0) {
    buttonNew.textContent = `It's already ${i}! Don't give up!`
    buttonNew.style.width = '400px'
    buttonNew.style.height = '112px'
    buttonNew.style.fontSize = '28px'
  } else {
    buttonNew.textContent = `Button ${i}`
    buttonNew.style.width = '250px'
    buttonNew.style.height = '70px'
  }
  i++
}

function randomColor() {
  let color = ['#']
  for (let k = 0; k < 6; k++) {
    color.push(Math.floor(Math.random() * 9))
  }
  return color.join('')
}

function addShadow(target) {
  let color = target.style.backgroundColor
  target.style.boxShadow = `10px 10px 20px ${color}`
}

function removeShadow(target) {
  target.style.boxShadow = ''
}
