const select = document.querySelector('.select')
const options_desc = document.querySelector('.options-desc')
select.addEventListener('click', () => {
  options_desc.classList.toggle('active')
  select.querySelector('.down1').setAttribute('src', './img/row2.png')
})
const select2 = document.querySelector('.select-two')
const options_desc2 = document.querySelector('.options-desc-two')
select2.addEventListener('click', () => {
  options_desc.classList.toggle('active')
  select2.querySelector('.down1').setAttribute('src', './img/row2.png')
})
const select3 = document.querySelector('.select-three')
const options_desc3 = document.querySelector('.options-desc-three')
select3.addEventListener('click', () => {
  options_desc.classList.toggle('active')
  select3.querySelector('.down1').setAttribute('src', './img/row2.png')
})
const select4 = document.querySelector('.select-four')
const options_desc4 = document.querySelector('.options-desc-four')
select3.addEventListener('click', () => {
  options_desc.classList.toggle('active')
  select4.querySelector('.down1').setAttribute('src', './img/row2.png')
})
