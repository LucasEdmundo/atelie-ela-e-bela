const menuItem = document.querySelectorAll('.item-menu');
function selectLink(){
    menuItem.forEach((item) => {
        item.classList.remove('ativo');
        this.classList.add('ativo');
    })
    
}

menuItem.forEach((item) => {
    item.addEventListener('click', selectLink);
})

//expandir menu

const btnExpandir = document.querySelector('#btn-expandir');
const menulateral = document.querySelector('.menu-lateral');

btnExpandir.addEventListener('click', () => {
    menulateral.classList.toggle('expandir');
})