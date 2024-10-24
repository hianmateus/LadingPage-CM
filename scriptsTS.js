const Tesouras = [
    {
        type: 'RETA',
        Comprimento: '6 a 7 Polegadas',
        Material: 'Aço 440c',
        Angulo: '25 a 35',
        Fio: 'Navalha ou Serrilhado',
        UsoRC: 'Tosa de áreas maiores e linhas retas, ideal para cortes precisos e rápidos'
    },
    {
        type: 'CURVA',
        Comprimento: '6 a 7 Polegadas',
        Material: 'Aço 440c',
        Angulo: '20 a 30',
        Fio: 'Navalha ou Serrilhado',
        UsoRC: 'Tosa de áreas maiores e linhas retas, ideal para cortes precisos e rápidos'
    },
    {
        type: 'SEMIDENTADA',
        Comprimento: '6 a 7 Polegadas',
        Material: 'Aço 440c',
        Angulo: '30 a 35',
        Fio: 'Navalha ou Serrilhado',
        UsoRC: 'Tosa de áreas maiores e linhas retas, ideal para cortes precisos e rápidos'
    },
    {
        type: 'TUBARÃO',
        Comprimento: '6 a 7 Polegadas',
        Material: 'Aço 440c',
        Angulo: '30 a 35',
        Fio: 'Navalha ou Serrilhado',
        UsoRC: 'Tosa de áreas maiores e linhas retas, ideal para cortes precisos e rápidos'
    }
]

// ABRIR E FECHAR TESOURAS

const BlurTS = document.querySelector('.BlurTesouras')
const BoxSelect = document.querySelector('.SelectTesouras')

const AllTosa = document.querySelectorAll('.ScissorsContainer')
const ContainerTosa = Array.from(AllTosa)

async function CloseTSselect() {
    BoxSelect.style.bottom = '-800px'

    await new Promise(resolve => setTimeout(resolve, 500))
    BoxSelect.style.display = 'none'
    BlurTS.style.opacity = '0'
    await new Promise(resolve => setTimeout(resolve, 600))
    BlurTS.style.display = 'none'
}

ContainerTosa.forEach((div, index) => {
    div.addEventListener('click', async function () {
        if (index === 0) {
            console.log('TosaAcabamento')
            BlurTS.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 150))
            BlurTS.style.opacity = '2'
            BoxSelect.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 200))
            BoxSelect.style.bottom = '0px'


        } if (index === 1) {
            console.log('TosaDesbaste')
            BlurTS.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 150))
            BlurTS.style.opacity = '2'
            BoxSelect.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 200))
            BoxSelect.style.bottom = '0px'

        } if (index === 2) {
            console.log('TosaCompleta')
            BlurTS.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 150))
            BlurTS.style.opacity = '2'
            BoxSelect.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 200))
            BoxSelect.style.bottom = '0px'

        } if (index === 3) {
            console.log('TosaPadrao')
            BlurTS.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 150))
            BlurTS.style.opacity = '2'
            BoxSelect.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 200))
            BoxSelect.style.bottom = '0px'

        } if (index === 4) {
            console.log('TosaHigienica')
            BlurTS.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 150))
            BlurTS.style.opacity = '2'
            BoxSelect.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 200))
            BoxSelect.style.bottom = '0px'
        }
    })
})