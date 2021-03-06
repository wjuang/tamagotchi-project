let userName = ""
const requestName = () => {
  userName = prompt("What would you like to name your Tamagotchi?")

}

class Tamagotchi {
  constructor(name){
    this.name = name
    this.age = 0
    this.hunger = 0
    this.sleep = 0
    this.boredom = 0
    this.horizontalPosition = 0
    this.verticalPosition = 0
  }
  displayName(){
    let topName = document.querySelector('h1')
    topName.textContent = userName
  }

  updateStats(){
    let age = document.querySelector('#age')
    age.textContent = `Age: ${this.age}`
    let hunger = document.querySelector('#hunger')
    hunger.textContent = `Hunger: ${this.hunger}`
    let sleep = document.querySelector('#sleep')
    sleep.textContent = `Sleep: ${this.sleep}`
    let boredom = document.querySelector('#boredom')
    boredom.textContent = `Boredom: ${this.boredom}`
  }


  feed(){
    this.hunger = 0
  }

  lightsOff(){
    this.sleep = 0
  }

  play(){
    this.boredom = 0
  }

  getOlder(){
    this.age++
  }

  getHungry(){
    let chance = Math.random()
    if (chance < 0.9){
    this.hunger += 1
    }
  }

  getSleepy(){
    let chance = Math.random()
    if (chance < 0.8){
      this.sleep += 1
    }
  }

  getBored(){
    let chance = Math.random()
    if (chance < 0.5){
      this.boredom += 1
    }
  }

  randomMove(){
    let chance = Math.random()
    if (chance <= 0.25){
      this.moveRight()
    } else if (chance > 0.25 && chance <= 0.5){
      this.moveLeft()
    } else if (chance > 0.5 && chance < 0.75){
      this.moveUp()
    } else if (chance > 0.75) {
      this.moveDown()
    }
  }

  //below are the movement commands to be used in randomMove()
  moveRight(){
    let pet = document.querySelector('#pet')
    let horizontal = pet.style.left.replace(/\D/g,'')
    if (horizontal < 280){
      pet.style.left = (Number(horizontal) + 20) + "px"
    } else {
      pet.style.left = (Number(horizontal) - 20) + "px"
    }
    // console.log('moveRight')
  }
  moveLeft(){
    let pet = document.querySelector('#pet')
    let horizontal = pet.style.left.replace(/\D/g,'')
    if (horizontal > -280){
      pet.style.left = (Number(horizontal) - 20) + "px"
    } else{
      pet.style.left = (Number(horizontal) + 20) + "px"
    }
    // console.log('moveLeft')
  }
  moveUp(){
    let pet = document.querySelector('#pet')
    let vertical = pet.style.bottom.replace(/\D/g,'')
    if (vertical < 280){
      pet.style.bottom = (Number(vertical) + 20) + "px"
    } else {
      pet.style.bottom = (Number(vertical) - 20) + "px"
    }
    // console.log('moveUp')
  }
  moveDown(){
    let pet = document.querySelector('#pet')
    let vertical = pet.style.bottom.replace(/\D/g,'')
    if (vertical > -280){
      pet.style.bottom = (Number(vertical) - 20) + "px"
    } else {
      pet.style.bottom = (Number(vertical) + 20) + "px"
    }
    // console.log('moveDown')
  }
  resetPosition(){
    let pet = document.querySelector('#pet')
    pet.style.bottom = 0
    pet.style.left = 0
  }

}


//THIS IS OUTSIDE THE CLASS
//move every x seconds
function startMoving(name) {
  return window.setInterval(function(){
    if (end == false){
    name.randomMove()
    // console.log('moved')
    }
  }, 1000)
}
//age every x seconds
function startAging(name) {
  return window.setInterval(function(){
    if (end == false){
      name.getOlder()
      // console.log('older')
    }
  }, 6000)
}
//update stats every 1 second
function startUpdating(name) {
  return window.setInterval(function(){
    if (end == false){
      name.updateStats()
    }
  }, 1000)
}
//below - every 5 seconds, hunger, sleep, and play triggered
function startHunger(name) {
  return window.setInterval(function(){
    if (end == false){
      name.getHungry()
    }
  }, 5000)
}
function startSleepy(name) {
  return window.setInterval(function() {
    if (end == false){
      name.getSleepy()
    }
  }, 5000)
}
function startBoredom(name) {
  return window.setInterval(function() {
    if (end == false){
      name.getBored()
    }
  }, 5000)
}


//FUNCTIONS TO LOAD ON PAGE START
requestName()
const first = new Tamagotchi(userName)
//condition to transform
let grown = false
//condition to end game
let end = false
first.displayName()
first.updateStats()
let moveVariable = startMoving(first)
let ageVariable = startAging(first)
let hungerVariable = startHunger(first)
let sleepVariable = startSleepy(first)
let boredVariable = startBoredom(first)
let updateVariable = startUpdating(first)
// console.log(document.querySelector('#pet').outerHTML)

//CHECK AGE FOR UPGRADE
//the interval here must be the same as the age interval
window.setInterval(function(){
    if (first.age == 15){
    let evolveSound = new Audio('evolveAlert.mp3')
    evolveSound.play()
    let petHTML = document.querySelector('#pet')
    let petStyle = petHTML.style.cssText
    petHTML.outerHTML = `<img src="upgrade.png" id="pet" style="${petStyle}">`
    grown = true
  }
}, 6000)

//EVENT LISTENERS FOR BUTTONS
//feed
const foodButton = document.querySelector('#left')
foodButton.addEventListener("click", (event) =>{
  first.feed()
  first.updateStats()
  let petHTML = document.querySelector('#pet')
  let petStyle = petHTML.style.cssText
  petHTML.outerHTML = `<img src="food.png" id="pet" style="${petStyle}">`
  let button = document.querySelector('#left')
  //THIS IS THE PRESSED BUTTON COLOR
  button.style.backgroundColor = '#8c8135'
  // console.log(document.querySelector('#pet'))
  let sound = new Audio('buttonAlert.mp3')
  sound.play();
  setTimeout(function() {
    button.style.backgroundColor = '#f2de5c'
    let petHTML2 = document.querySelector('#pet')
    let petStyle = petHTML.style.cssText
    if (grown == true){
      petHTML2.outerHTML = `<img src ="upgrade.png" id="pet" style="${petStyle}">`
    } else {
      petHTML2.outerHTML = `<img src="Kuchipatchi.png" id="pet" style="${petStyle}">`
    }
  }, 1000)
})
//sleep
const sleepButton = document.querySelector('#middle')
sleepButton.addEventListener("click", (event) => {
  first.lightsOff()
  first.updateStats()
  let back = document.querySelector('#screen')
  back.style.backgroundColor = '#101845';
  let text = document.querySelector('#screen')
  text.style.color = 'white'
  let button = document.querySelector('#middle')
  //THIS IS THE PRESSED BUTTON COLOR
  button.style.backgroundColor = '#8c8135'
  window.clearInterval(moveVariable)
  let sound = new Audio('buttonAlert.mp3')
  sound.play();
  setTimeout(function() {
    button.style.backgroundColor = '#f2de5c'
  }, 1000)
  setTimeout(function() {
    text.style.color = 'black'
    back.style.backgroundColor = '#9cd8f0';
    moveVariable = startMoving(first)
  }, 2500)
})
//play
const playButton = document.querySelector('#right')
playButton.addEventListener("click", (event) =>{
  first.play()
  first.updateStats()
  let petHTML = document.querySelector('#pet')
  //grab csstext current position of pet
  let petStyle = petHTML.style.cssText
  petHTML.outerHTML = `<img src="play.png" id="pet" style="${petStyle}">`
  //console.log(document.querySelector('#pet'))
  let button = document.querySelector('#right')
  //THIS IS THE PRESSED BUTTON COLOR
  button.style.backgroundColor = '#8c8135'
  let sound = new Audio('buttonAlert.mp3')
  sound.play();
  setTimeout(function() {
    button.style.backgroundColor = '#f2de5c'
    let petHTML2 = document.querySelector('#pet')
    let petStyle = petHTML.style.cssText
    if (grown == true){
      petHTML2.outerHTML = `<img src ="upgrade.png" id="pet" style="${petStyle}">`
    } else {
      petHTML2.outerHTML = `<img src="Kuchipatchi.png" id="pet" style="${petStyle}"">`
    }
  }, 1000)
})

//CHECK IF GAME IS OVER FUNCTION
const checkDead = window.setInterval(function(){
  if (first.age == 30 || first.hunger == 10 || first.boredom == 10 || first.sleep == 10){
    end = true
  }
  if (end == true && first.age == 30) {
    let endSound = new Audio('winAlert.mp3')
    endSound.play();
    let header = document.querySelector('h1')
    header.innerHTML = `${userName} lived a good life!`
    let endCard = document.querySelector('#bigwin')
    endCard.style.opacity = '50%'
    let removeBorder = document.querySelector('#screen')
    removeBorder.style.border = "0"
    window.clearInterval(moveVariable)
    window.clearInterval(ageVariable)
    window.clearInterval(hungerVariable)
    window.clearInterval(sleepVariable)
    window.clearInterval(boredVariable)
    let petHTML = document.querySelector('#pet')
    petHTML.outerHTML = `<img src = "death.png" id = "petDead">`
    window.clearInterval(checkDead)
  } else if (end == true && first.age !== 30) {
    let endSound = new Audio('deadAlert.mp3')
    endSound.play();
    let header = document.querySelector('h1')
    header.innerHTML = `${userName} has died.`
    let removeBorder = document.querySelector('#screen')
    removeBorder.style.border = "0"
    window.clearInterval(moveVariable)
    window.clearInterval(ageVariable)
    window.clearInterval(hungerVariable)
    window.clearInterval(sleepVariable)
    window.clearInterval(boredVariable)
    let petHTML = document.querySelector('#pet')
    petHTML.outerHTML = `<img src = "death.png" id = "petDead">`
    window.clearInterval(checkDead)
  }
}, 1000)








//WORKING MOVE RIGHT COMMAND
// const moveRight = () => {
//   let pet = document.querySelector('#pet')
//   horizontal = pet.style.left.replace(/\D/g,'')
//   pet.style.left = (Number(horizontal) + 10) + "px"
// }
