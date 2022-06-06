const btn = document.querySelector('.arrow')
const img = document.querySelector('.item');
const arrow = document.querySelector('.fas')

const imgShow = () => {
  img.classList.toggle('hide')

  if (img.classList.contains('hide')){
    arrow.style.transform = 'rotate(180deg)'
  } else {
    arrow.style.transform = 'rotate(0)'
  }
}

btn.addEventListener('click', imgShow);

