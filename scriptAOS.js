AOS.init();

const NavBar = document.querySelector('.NavbarUl')

async function move() {
    if (NavBar.style.display === 'none' || NavBar.style.display === "") {
        NavBar.style.display = 'flex'
        await new Promise(resolve => setTimeout(resolve, 200))
        NavBar.style.right = '-130px'
    } else {
        NavBar.style.right = '-530px'
        await new Promise(resolve => setTimeout(resolve, 200))
        NavBar.style.display = 'none'

    }

}

