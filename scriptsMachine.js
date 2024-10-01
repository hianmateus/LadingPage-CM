const DivsMachines = document.querySelectorAll('.MachineTosa')

const MachineTosa = Array.from(DivsMachines)

const BlurSec5 = document.querySelector('.BlurSec5')
const ProductsTabel = document.querySelector('.TabSelection')
const ListMachines = document.querySelector('.ListTosaMachines')

const MCSelected = document.querySelector('.MCSelected')
const BackArrow = document.querySelector('.BackArrow')

const ProductsMachine = [
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
    {
        Tipo: 'Profissional',
        Marca: 'Andis',
        src: './images/ExampleImages/MachineExample2.png',
        Modelo: 'AGC2 Super 2-Speed',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Adicional: '',
        Potencia: '',
        Material: '',
        Velociade: '',
    },
]

let mylist = ''

/* MOSTAR MAQUINAS */

function ShowProdutcs() {
    ProductsMachine.forEach(item => {

        mylist = mylist + `
                 <div class="TosaMachine" onclick="ShowMachine()">
                        <img class="MaquinaImage" src=${item.src}
                            alt="Machine-image-example-png">

                        <div class="TosaTexts">
                            <p class="TosaMark">${item.Marca}</p>
                            <p class="TosaMachineName">${item.Modelo}</p>
                            <div class="DivPriceMachineTosa">
                                <p class="TosaMachinePrice">${item.Preço}</p>
                            </div>
                        </div>
                    </div>
        `
    })

    ListMachines.innerHTML = mylist

}

/* ABRIR E FECHAR COISAS */

async function CloseSelectMC() {
    ProductsTabel.style.overflowY = "hidden"
    ProductsTabel.style.width = '45px'
    MCSelected.style.display = 'none'
    ProductsTabel.style.alignItems = 'baseline'

    await new Promise(resolve => setTimeout(resolve, 500))
    ProductsTabel.style.height = '600px'
    ProductsTabel.style.bottom = '-800px'
    ListMachines.style.display = 'none'
    BackArrow.style.display = 'none'
    MCSelected.style.opacity = '0'
    mylist = ''
    await new Promise(resolve => setTimeout(resolve, 600))
    ListMachines.style.opacity = '2'
    BlurSec5.style.opacity = '0'
    BlurSec5.style.display = 'none'

}

MachineTosa.forEach((machine, index) => {
    machine.addEventListener('click', async function () {
        if (index === 0) {
            console.log('Profissionais')

            BlurSec5.style.display = 'flex'
            BlurSec5.style.opacity = '2'
            ShowProdutcs()

            await new Promise(resolve => setTimeout(resolve, 100))
            ProductsTabel.style.bottom = '0'
            await new Promise(resolve => setTimeout(resolve, 500))
            if (window.innerWidth < 900) {
                ProductsTabel.style.width = '370px'
            } if (window.innerWidth > 900) {
                ProductsTabel.style.width = '845px'
            }
            await new Promise(resolve => setTimeout(resolve, 500))
            ProductsTabel.style.overflowY = "scroll"
            ListMachines.style.display = 'flex'
            if (window.innerWidth < 900) {
                ListMachines.style.left = '18px'
            } if (window.innerWidth > 900) {
                ListMachines.style.left = '65px'
            }

        } if (index === 1) {
            console.log('Semi-Profissionais')

            BlurSec5.style.display = 'flex'
            BlurSec5.style.opacity = '2'
            ShowProdutcs()

            await new Promise(resolve => setTimeout(resolve, 100))
            ProductsTabel.style.bottom = '0'
            await new Promise(resolve => setTimeout(resolve, 500))
            if (window.innerWidth < 900) {
                ProductsTabel.style.width = '370px'
            } if (window.innerWidth > 900) {
                ProductsTabel.style.width = '845px'
            }
            await new Promise(resolve => setTimeout(resolve, 500))
            ProductsTabel.style.overflowY = "scroll"
            ListMachines.style.display = 'flex'
            if (window.innerWidth < 900) {
                ListMachines.style.left = '18px'
            } if (window.innerWidth > 900) {
                ListMachines.style.left = '65px'
            }

        } if (index === 2) {
            console.log('Veterinarias')

            BlurSec5.style.display = 'flex'
            BlurSec5.style.opacity = '2'
            ShowProdutcs()

            await new Promise(resolve => setTimeout(resolve, 100))
            ProductsTabel.style.bottom = '0'
            await new Promise(resolve => setTimeout(resolve, 500))
            if (window.innerWidth < 900) {
                ProductsTabel.style.width = '370px'
            } if (window.innerWidth > 900) {
                ProductsTabel.style.width = '845px'
            }
            await new Promise(resolve => setTimeout(resolve, 500))
            ProductsTabel.style.overflowY = "scroll"
            ListMachines.style.display = 'flex'
            if (window.innerWidth < 900) {
                ListMachines.style.left = '18px'
            } if (window.innerWidth > 900) {
                ListMachines.style.left = '65px'
            }

        }
    })
})

/* ABRIR E VOLTAR A MAQUINA SELECIONADA */

async function ShowMachine() {
    ListMachines.style.opacity = '0'

    await new Promise(resolve => setTimeout(resolve, 300))
    ListMachines.style.display = 'none'
    MCSelected.style.display = 'flex'
    ProductsTabel.style.overflowY = "hidden"
    await new Promise(resolve => setTimeout(resolve, 400))
    ProductsTabel.style.height = '500px'
    MCSelected.style.opacity = '2'
    BackArrow.style.display = 'flex'
}

async function BackListMachine() {
    MCSelected.style.opacity = '0'

    await new Promise(resolve => setTimeout(resolve, 300))
    BackArrow.style.display = 'none'
    MCSelected.style.display = 'none'
    ListMachines.style.display = 'flex'
    ProductsTabel.style.overflowY = "scroll"
    await new Promise(resolve => setTimeout(resolve, 400))
    ListMachines.style.opacity = '2'
    ProductsTabel.style.height = '600px'
    ProductsTabel.style.alignItems = 'baseline'

}