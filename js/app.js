let userName = ""
const requestName = () => {
  userName = prompt("What would you like to name your Tamagotchi?")
}

class Tamagotchi {
  constructor(name){
    this.name = name
    this.age = 0
    this.hunger = 10
    this.sleep = 10
    this.boredom = 10
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
    hunger.textContent = `Food: ${this.hunger}`
    let sleep = document.querySelector('#sleep')
    sleep.textContent = `Sleep: ${this.sleep}`
    let boredom = document.querySelector('#boredom')
    boredom.textContent = `Play: ${this.boredom}`
  }

  startGame(){
    checkAlive = window.setInterval(function(){
      console.log(end)
      if (this.age == 2){
        this.gameOver()
      }
    }, 500)

    startMove = window.setInterval(function(){
      first.randomMove()
      if (end == true){
        clearInterval(startMove)
      }
    }, 1000)
    startStats = window.setInterval(function(){
      first.updateStats()
      if (end == true){
        clearInterval(startStats)
      }
    }, 1000)
    startAge = window.setInterval(function(){
      first.getOlder()
      if (end == true){
        clearInterval(startAge)
      }
    }, 3000)
  }
  feed(){
    this.hunger = 10
  }

  lightsOff(){
    this.sleep = 10
  }

  play(){
    this.boredom = 10
  }

  getOlder(){
    this.age++
  }

  getHungry(){
    let chance = Math.random()
    if (chance < 0.9){
    this.hunger -= 1
    }
  }

  getSleepy(){
    let chance = Math.random()
    if (chance < 0.8){
      this.sleep -= 1
    }
  }

  getBored(){
    let chance = Math.random()
    if (chance < 0.5){
      this.boredom -= 1
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

  gameOver(){
    console.log('dead')
    end = true
  }
}


//FUNCTIONS TO LOAD ON PAGE START
requestName()
const first = new Tamagotchi(userName)
first.displayName()
let startMove
let startStats
let startAge
let checkAlive
let end = false
first.startGame()




//WORKING MOVE RIGHT COMMAND
// const moveRight = () => {
//   let pet = document.querySelector('#pet')
//   horizontal = pet.style.left.replace(/\D/g,'')
//   pet.style.left = (Number(horizontal) + 10) + "px"
// }
