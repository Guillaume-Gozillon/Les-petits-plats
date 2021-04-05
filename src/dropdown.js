const btnIngredient = document.getElementById('btn-ingredients')

btnIngredient.addEventListener('click', () => {
    const arrowBtn = document.getElementById('arrow')
    arrowBtn.classList.toggle('open')
})