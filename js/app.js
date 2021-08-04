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

  moveRight(){
    let pet = document.querySelector('#pet')
    let horizontal = pet.style.left.replace(/\D/g,'')
    pet.style.left = (Number(horizontal) + 10) + "px"
  }
  moveLeft(){
    let pet = document.querySelector('#pet')
    let horizontal = pet.style.left.replace(/\D/g,'')
    pet.style.left = (Number(horizontal) - 10) + "px"
  }
  moveUp(){
    let pet = document.querySelector('#pet')
    let vertical = pet.style.bottom.replace(/\D/g,'')
    pet.style.bottom = (Number(vertical) + 10) + "px"
  }
  moveDown(){
    let pet = document.querySelector('#pet')
    let vertical = pet.style.bottom.replace(/\D/g,'')
    pet.style.bottom = (Number(vertical) - 10) + "px"
  }
  resetPosition(){
    let pet = document.querySelector('#pet')
    pet.style.bottom = 0
    pet.style.left = 0
  }
}


//FUNCTIONS TO LOAD ON PAGE START
requestName()
const first = new Tamagotchi(userName)
first.displayName()
first.getOlder()
first.updateStats()

//WORKING MOVE RIGHT COMMAND
// const moveRight = () => {
//   let pet = document.querySelector('#pet')
//   horizontal = pet.style.left.replace(/\D/g,'')
//   pet.style.left = (Number(horizontal) + 10) + "px"
// }
