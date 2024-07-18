const MenuButton = document.querySelector('.MenuHeader')
const MenuHeader = document.querySelector('.NavbarUl')

MenuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    if (MenuHeader.style.display === 'none' || MenuHeader.style.display === '') {
        MenuHeader.style.display = 'flex';
    } else {
        MenuHeader.style.display = 'none';
    }

    document.addEventListener('click', (event) => {
        if (!MenuHeader.contains(event.target) && !MenuButton.contains(event.target)) {
            MenuHeader.style.display = 'none';
        }
    })
})

//const Container = document.querySelector('.BladeMarks')
//const BladeMark = Container.querySelectorAll('.DivMark')

//BladeMark.forEach( (Div) => {
//    Div.addEventListener('click', e => {
//        Container.querySelector('.DivMarkOn').classList.remove('DivMarkOn')
//        Div.classList.add('DivMarkOn')
//    })
//})

