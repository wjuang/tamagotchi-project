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
  moveRight(){
    let pet = document.querySelector('#pet')
    let horizontal = pet.style.left.replace(/\D/g,'')
    pet.style.left = (Number(horizontal) + 50) + "px"
  }
  moveLeft(){
    let pet = document.querySelector('#pet')
    let horizontal = pet.style.left.replace(/\D/g,'')
    pet.style.left = (Number(horizontal) - 50) + "px"
  }
  moveUp(){
    let pet = document.querySelector('#pet')
    let vertical = pet.style.bottom.replace(/\D/g,'')
    pet.style.bottom = (Number(vertical) + 50) + "px"
  }
  moveDown(){
    let pet = document.querySelector('#pet')
    let vertical = pet.style.bottom.replace(/\D/g,'')
    pet.style.bottom = (Number(vertical) - 50) + "px"
  }
}

const first = new Tamagotchi('Test')
first.moveRight()
first.moveDown()
first.moveDown()
first.moveLeft()
first.moveLeft()
first.moveUp()

//WORKING MOVE RIGHT COMMAND
// const moveRight = () => {
//   let pet = document.querySelector('#pet')
//   horizontal = pet.style.left.replace(/\D/g,'')
//   pet.style.left = (Number(horizontal) + 10) + "px"
// }
