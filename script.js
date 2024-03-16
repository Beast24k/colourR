const box = document.querySelector('.box');
const input = document.querySelector('input');


const changeTheColour = () => {
  box.style.background = input.value;  
}


input.addEventListener('input',changeTheColour);
