const foods = document.querySelectorAll('.foods')
const foodDetail = document.querySelector('.food-detail')
const closeButton = document.querySelector('.close')

function open() {
  foodDetail.classList.add('active')
}

function close() {
  foodDetail.classList.remove('active')
}

foods.forEach(food => food.addEventListener('click', open))

closeButton.addEventListener('click', close)

