window.addEventListener('scroll', function () {
    const header = document.querySelector('.Header');
    const LogoHeader = document.querySelector('.LogoIcon')

    const li1 = document.getElementById('li1')
    const li2 = document.getElementById('li2')
    const li3 = document.getElementById('li3')
    const li4 = document.getElementById('li4')
    const li5 = document.getElementById('li5')


    if (window.scrollY > 500) {
        LogoHeader.src = "./images/ModeloLogo3.png"
        header.classList.add('header1');
        li1.style.color = "#ffca00"
        li2.style.color = "#ffca00"
        li3.style.color = "#ffca00"
        li4.style.color = "#ffca00"
        li5.style.color = "#ffca00"

    } else {
        header.classList.remove('header1');
        LogoHeader.src = "./images/ModeloLogo.png"
        li1.style.color = "#ffff"
        li2.style.color = "#ffff"
        li3.style.color = "#ffff"
        li4.style.color = "#ffff"
        li5.style.color = "#ffff"
    }

    if (window.scrollY > 2900) {
        LogoHeader.src = "./images/ModeloLogo2.png"
        header.classList.add('header2');
        li1.style.color = "black"
        li2.style.color = "black"
        li3.style.color = "black"
        li4.style.color = "black"
        li5.style.color = "black"
    } else {
        header.classList.remove('header2');
        
    }

    if (window.scrollY > 5800) {
        header.classList.add('header3');
        LogoHeader.src = "./images/ModeloLogo3.png"
        li1.style.color = "#ffca00"
        li2.style.color = "#ffca00"
        li3.style.color = "#ffca00"
        li4.style.color = "#ffca00"
        li5.style.color = "#ffca00"
    } else {
        header.classList.remove('header3');
    }
});