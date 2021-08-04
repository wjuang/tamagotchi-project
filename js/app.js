class Tamagotchi {
  constructor(name){
    this.name = name
    this.age = 0
    this.hunger = 100
    this.sleep = 100
  }
  moveRight(){
    let pet = document.querySelector('#pet')
    pet.style.left = pet.style.left - "px" + 100 + "px"
  }
}

const first = new Tamagotchi('Test')
first.moveRight()

//WORKING MOVE RIGHT COMMAND
const moveRight = () => {
  let pet = document.querySelector('#pet')
  console.log(pet)
  horizontal = pet.style.left.replace(/\D/g,'')
  console.log(horizontal)
  pet.style.left = (Number(horizontal) + 10) + "px"
}
