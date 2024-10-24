

const BoxFilter = document.querySelector('.BoxFilter')
const BlurSec7 = document.querySelector('.BlurSec7')
const MachinesFilter = document.querySelector('.MachinesFilter')

const BlurSec6 = document.querySelector('.BlurSec6')
const MachinesSelect = document.querySelector('.MachinesSelect')
const EquipamentContainer = document.getElementsByName('EquipamentContainer')
const DivEquips = Array.from(EquipamentContainer)

const Equipements = [
    {
        Marca: 'Kyklon',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Nome: 'Secador1000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 70,
        Peso: 6.0,
        Potencia: 1.800,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'PlásticosResistente'

    },
    {
        Marca: 'Kyklon',
        Preço: 'R$ 1.300,00 - R$ 2.300,00',
        Nome: 'Secador2000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 60,
        Peso: 6.0,
        Potencia: 2.800,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'PlásticosResistente'

    },
    {
        Marca: 'Kyklon',
        Preço: 'R$ 1.000,00 - R$ 2.200,00',
        Nome: 'Secador3000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 76,
        Peso: 4.0,
        Potencia: 2.800,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'AçoInoxidavel'

    },
    {
        Marca: 'Kyklon',
        Preço: 'R$ 1.100,00 - R$ 2.100,00',
        Nome: 'Secador4000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 80,
        Peso: 5.0,
        Potencia: 5.500,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'AçoInoxidavel'

    },
    {
        Marca: 'Kyklon',
        Preço: 'R$ 1.400,00 - R$ 1.800,00',
        Nome: 'Secador5000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 78,
        Peso: 70.0,
        Potencia: 1.800,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'AçoInoxidavel'

    },
    {
        Marca: 'Kyklon',
        Preço: 'R$ 1.000,00 - R$ 1.900,00',
        Nome: 'Secador6000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 80,
        Peso: 5.0,
        Potencia: 2.200,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'AçoInoxidavel'

    },
    {
        Marca: 'Kyklon',
        Preço: 'R$ 1.500,00 - R$ 2.000,00',
        Nome: 'Secador7000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 75,
        Peso: 4.0,
        Potencia: 2.200,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'AçoInoxidavel'

    },
    {
        Marca: 'Kyklon',
        Preço: 'R$ 900,00 - R$ 1.000,00',
        Nome: 'Secador8000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 78,
        Peso: 70.0,
        Potencia: 3.000,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'PlásticosResistente'

    },
    {
        Marca: 'Kyklon',
        Preço: 'R$ 1.800,00 - R$ 2.100,00',
        Nome: 'Secador9000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 80,
        Peso: 80.0,
        Potencia: 3.000,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'PlásticosResistente'

    },
    {
        Marca: 'Kyklon',
        Preço: 'R$ 1.400,00 - R$ 2.300,00',
        Nome: 'Secador10000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 80,
        Peso: 4.0,
        Potencia: 6.000,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'PlásticosResistente'

    },
    {
        Marca: 'Kyklon',
        Preço: 'R$ 1.700,00 - R$ 2.200,00',
        Nome: 'Secador11000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 75,
        Peso: 80.0,
        Potencia: 6.000,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'PlásticosResistente'

    },
    {
        Marca: 'Kyklon',
        Preço: 'R$ 1.200,00 - R$ 1.900,00',
        Nome: 'Secador11000',
        src: './images/Marcas/Kyklon/SecadorKyklon.png',
        Ruido: 75,
        Peso: 80.0,
        Potencia: 6.000,
        AjusteTemp: 'sim (3 níveis)',
        AjusteSpeed: 'sim (3 velocidades)',
        Diferencial: 'Alta durabilidade e eficiência energética; Design ergonômico para uso prolongado; Reconhecido pela robustez',
        Material: 'PlásticosResistente'

    }
]

/*
const EquipImage = document.querySelector('.ImageSelect')
const EquipLogo = document.querySelector('.LogoMachineSelect')
*/
const Blur2Sec6 = document.querySelector('.Blur2Sec6')
const MarksInfo = document.querySelector('.MarksInfo')
const DivMarks = document.querySelectorAll('.EquipamentMark')
const Marks = Array.from(DivMarks)

const EquipPrice = document.querySelector('.SelectPrice2')
const EquipPotencia = document.getElementById('Potencia')
const EquipPeso = document.getElementById('Peso')
const EquipRuido = document.getElementById('Ruido')
const EquipTemp = document.getElementById('Temperatura')
const EquipSpeed = document.getElementById('Velocidade')
const EquipDiffe = document.getElementById('Diferencial')

let Cindex = -1

function ShowEquip() {
    Cindex++
    console.log(Equipements[Cindex])

    EquipPrice.innerHTML = Equipements[Cindex].Preço
    EquipPotencia.innerHTML = `<b class="SelectBtext">Potencia:</b> ${Equipements[Cindex].Potencia.toFixed(3)} watts`
    EquipPeso.innerHTML = `<b class="SelectBtext">Peso:</b> ${Equipements[Cindex].Peso.toFixed(1)} kg`
    EquipRuido.innerHTML = `<b class="SelectBtext">Nivel de Ruido:</b> ${Equipements[Cindex].Ruido} watts`
    EquipTemp.innerHTML = `<b class="SelectBtext">Ajuste de Temperatura:</b> ${Equipements[Cindex].AjusteTemp}`
    EquipSpeed.innerHTML = `<b class="SelectBtext">Ajuste de Velocidade:</b> ${Equipements[Cindex].AjusteSpeed}`
    EquipDiffe.innerHTML = `<b class="SelectBtext">Diferenciais:</b> ${Equipements[Cindex].Diferencial}`
}

function NextEquip() {
    if (Cindex < Equipements.length - 1) {
        Cindex++

        EquipPrice.innerHTML = Equipements[Cindex].Preço
        EquipPotencia.innerHTML = `<b class="SelectBtext">Potencia:</b> ${Equipements[Cindex].Potencia.toFixed(3)} watts`
        EquipPeso.innerHTML = `<b class="SelectBtext">Peso:</b> ${Equipements[Cindex].Peso.toFixed(1)} kg`
        EquipRuido.innerHTML = `<b class="SelectBtext">Nivel de Ruido:</b> ${Equipements[Cindex].Ruido} watts`
        EquipTemp.innerHTML = `<b class="SelectBtext">Ajuste de Temperatura:</b> ${Equipements[Cindex].AjusteTemp}`
        EquipSpeed.innerHTML = `<b class="SelectBtext">Ajuste de Velocidade:</b> ${Equipements[Cindex].AjusteSpeed}`
        EquipDiffe.innerHTML = `<b class="SelectBtext">Diferenciais:</b> ${Equipements[Cindex].Diferencial}`

    }
}

function BackEquip() {
    if (Cindex > 0) {
        Cindex--

        EquipPrice.innerHTML = Equipements[Cindex].Preço
        EquipPotencia.innerHTML = `<b class="SelectBtext">Potencia:</b> ${Equipements[Cindex].Potencia.toFixed(3)} watts`
        EquipPeso.innerHTML = `<b class="SelectBtext">Peso:</b> ${Equipements[Cindex].Peso.toFixed(1)} kg`
        EquipRuido.innerHTML = `<b class="SelectBtext">Nivel de Ruido:</b> ${Equipements[Cindex].Ruido} watts`
        EquipTemp.innerHTML = `<b class="SelectBtext">Ajuste de Temperatura:</b> ${Equipements[Cindex].AjusteTemp}`
        EquipSpeed.innerHTML = `<b class="SelectBtext">Ajuste de Velocidade:</b> ${Equipements[Cindex].AjusteSpeed}`
        EquipDiffe.innerHTML = `<b class="SelectBtext">Diferenciais:</b> ${Equipements[Cindex].Diferencial}`


    }
}


/* Abrindo e fechando marcas*/

const LogoMarkMC = document.querySelector('.LogoMarkMC')
const MCExample = document.querySelector('.MCExample')
const TextMark1 = document.querySelector('.Text1')
const TextMark2 = document.querySelector('.Text2')
const TextMark3 = document.querySelector('.Text3')
const TextMark4 = document.querySelector('.Text4')
const TextMark5 = document.querySelector('.Text5')
const Icon1 = document.querySelector('.Icon1')
const Icon2 = document.querySelector('.Icon2')
const Icon3 = document.querySelector('.Icon3')

Marks.forEach((mark, index) => {
    mark.addEventListener('click', async function () {
        if (index === 0) {
            console.log('kyklon')
            Blur2Sec6.style.opacity = '2'
            Blur2Sec6.style.display = 'flex'
            LogoMarkMC.src = './images/Marcas/Kyklon/LogoKyklon_1.png'
            MCExample.src = './images/ExampleImages/MarkExample.png'
            TextMark1.innerHTML = 'A Kyklon é uma marca reconhecida no mercado pet por oferecer sopradores de alta potência e durabilidade. Seus produtos são conhecidos pela robustez, garantindo um fluxo de ar consistente e eficiente'
            TextMark2.innerHTML = 'Estrutura em materiais resistentes como alumínio, garantindo durabilidade'
            TextMark3.innerHTML = 'Alta potência e durabilidade'
            TextMark4.innerHTML = 'Modelos com ajuste de velocidade'
            TextMark5.innerHTML = 'Design ergonômico'
            Icon1.src = './images/Icons/IconPower.png'
            Icon2.src = './images/Icons/IconSpeed.png'
            Icon3.src = './images/Icons/iconDesign.png'

            await new Promise(resolve => setTimeout(resolve, 100))
            MarksInfo.style.bottom = '0'

        } if (index === 1) {
            console.log('minag')
            Blur2Sec6.style.opacity = '2'
            Blur2Sec6.style.display = 'flex'
            LogoMarkMC.src = './images/Marcas/Minag/LogoMinag_1.png'
            MCExample.src = './images/ExampleImages/MarkExample2.png'
            TextMark1.innerHTML = 'Minag é uma marca que se destaca por produzir sopradores compactos e fáceis de manusear. Seus produtos são ideais para profissionais que precisam de eficiência em um equipamento leve e portátil'
            TextMark2.innerHTML = 'Produzidos com plásticos de alta resistência e motores com eficiência energética'
            TextMark3.innerHTML = 'Compactos e portáteis'
            TextMark4.innerHTML = 'Bom custo-benefício'
            TextMark5.innerHTML = 'Modelos com baixo nível de ruído'
            Icon1.src = './images/Icons/IconCompact.png'
            Icon2.src = './images/Icons/IconBenefic.png'
            Icon3.src = './images/Icons/iconNoRuid.png'

            await new Promise(resolve => setTimeout(resolve, 100))
            MarksInfo.style.bottom = '0'

        } if (index === 2) {
            console.log('plenitude')
            Blur2Sec6.style.opacity = '2'
            Blur2Sec6.style.display = 'flex'
            LogoMarkMC.src = './images/Marcas/Plenitude/LogoPlenitude_1.png'
            MCExample.src = './images/ExampleImages/MarkExample3.png'
            TextMark1.innerHTML = ' A Plenitude foca em inovação e qualidade, oferecendo sopradores que combinam potência e tecnologia avançada. Os produtos da marca são populares por sua durabilidade e design moderno'
            TextMark2.innerHTML = 'Produzidos com plásticos de alta resistência e motores com eficiência energética'
            TextMark3.innerHTML = 'Tecnologia avançada'
            TextMark4.innerHTML = 'Alta durabilidade'
            TextMark5.innerHTML = 'Design moderno e funcional'
            Icon1.src = './images/Icons/iconTecnology.png'
            Icon2.src = './images/Icons/iconDurability.png'
            Icon3.src = './images/Icons/iconDesign.png'

            await new Promise(resolve => setTimeout(resolve, 100))
            MarksInfo.style.bottom = '0'

        } if (index === 3) {
            console.log('graçapet')
            Blur2Sec6.style.opacity = '2'
            Blur2Sec6.style.display = 'flex'
            LogoMarkMC.src = './images/Marcas/GraçaPet/LogoGraçaPet.png'
            MCExample.src = './images/ExampleImages/MarkExample4.png'
            TextMark1.innerHTML = 'Graçapet é uma marca que busca oferecer sopradores que equilibram potência e eficiência energética. Seus produtos são conhecidos por serem eco-friendly e econômicos'
            TextMark3.innerHTML = 'Eficiência energética'
            TextMark4.innerHTML = 'Modelos com diversas opções de velocidade'
            TextMark5.innerHTML = 'Eco friendly(amigável ao meio ambiente)'
            Icon1.src = './images/Icons/IconPower.png'
            Icon2.src = './images/Icons/IconEcofamily.png'
            Icon3.src = './images/Icons/IconSpeed.png'

            await new Promise(resolve => setTimeout(resolve, 100))
            MarksInfo.style.bottom = '0'

        } if (index === 4) {
            console.log('hardwind')
            Blur2Sec6.style.opacity = '2'
            Blur2Sec6.style.display = 'flex'
            LogoMarkMC.src = './images/Marcas/HardWind/LogoHardWind_1.png'
            MCExample.src = './images/ExampleImages/MarkExample5.png'
            TextMark1.innerHTML = 'A HardWind é uma marca que se destaca pelo desenvolvimento de sopradores extremamente potentes e adequados para grandes volumes de trabalho, sendo uma escolha comum entre groomers profissionais'
            TextMark2.innerHTML = 'Construção em aço inoxidável, garantindo resistência ao desgaste'
            TextMark3.innerHTML = 'Potência extrema'
            TextMark4.innerHTML = 'Projetado para uso profissional'
            TextMark5.innerHTML = 'Alta resistência ao uso contínuo'
            Icon1.src = './images/Icons/IconPower.png'
            Icon2.src = './images/Icons/IconProfissional.png'
            Icon3.src = './images/Icons/IconResistence.png'

            await new Promise(resolve => setTimeout(resolve, 100))
            MarksInfo.style.bottom = '0'

        } if (index === 5) {
            console.log('atacama')
            Blur2Sec6.style.opacity = '2'
            Blur2Sec6.style.display = 'flex'
            LogoMarkMC.src = './images/Marcas/Atacama/LogoAtacama.png'
            MCExample.src = './images/ExampleImages/MarkExample6.png'
            TextMark1.innerHTML = 'A Atacama oferece sopradores que se destacam pela resistência e desempenho em ambientes exigentes. A marca é reconhecida pela confiabilidade de seus equipamentos em operações prolongadas'
            TextMark2.innerHTML = 'Equipamentos construídos com componentes reforçados para durabilidade prolongada'
            TextMark3.innerHTML = 'Alta resistência'
            TextMark4.innerHTML = 'Desempenho consistente'
            TextMark5.innerHTML = 'Ideal para condições exigentes'
            Icon1.src = './images/Icons/IconResistence.png'
            Icon2.src = './images/Icons/IconPerformance.png'
            Icon3.src = './images/Icons/IconExigents.png'

            await new Promise(resolve => setTimeout(resolve, 100))
            MarksInfo.style.bottom = '0'

        }
    })
})

async function CloseMark() {
    MarksInfo.style.bottom = '-800px'

    await new Promise(resolve => setTimeout(resolve, 400))
    Blur2Sec6.style.opacity = '0'
    await new Promise(resolve => setTimeout(resolve, 400))
    Blur2Sec6.style.display = 'none'
}

/* Selecionando Equipamento*/

DivEquips.forEach((equip, index) => {

    equip.addEventListener('click', async function () {

        if (index === 0) {
            console.log('Secadores')
            ShowEquip()


            BlurSec6.style.display = 'flex'
            BlurSec6.style.opacity = '2'

            await new Promise(resolve => setTimeout(resolve, 100))
            MachinesSelect.style.bottom = '0px'

        } if (index === 1) {
            console.log('Secadoras')
            BlurSec6.style.display = 'flex'
            BlurSec6.style.opacity = '2'

            await new Promise(resolve => setTimeout(resolve, 100))
            MachinesSelect.style.bottom = '0px'

        } if (index === 2) {
            console.log('Soprador1')
            BlurSec6.style.display = 'flex'
            BlurSec6.style.opacity = '2'

            await new Promise(resolve => setTimeout(resolve, 100))
            MachinesSelect.style.bottom = '0px'

        } if (index === 3) {
            console.log('Soprador2')
            BlurSec6.style.display = 'flex'
            BlurSec6.style.opacity = '2'

            await new Promise(resolve => setTimeout(resolve, 100))
            MachinesSelect.style.bottom = '0px'

        } if (index === 4) {
            console.log('Soprador3')
            BlurSec6.style.display = 'flex'
            BlurSec6.style.opacity = '2'

            await new Promise(resolve => setTimeout(resolve, 100))
            MachinesSelect.style.bottom = '0px'

        }
    })
})


window.addEventListener('scroll', async function () {
    const filterBox = document.getElementById("FilterBox")
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (window.innerWidth < 900) {
        if (scrollPosition > 8300) {
            filterBox.style.bottom = "40px";

        } if (scrollPosition < 8300) {
            filterBox.style.bottom = "-200px";
            BoxFilter.style.right = "-500px"

            MachinesFilter.style.bottom = '-800px'


            await new Promise(resolve => setTimeout(resolve, 300))
            BlurSec7.style.opacity = '0'
            await new Promise(resolve => setTimeout(resolve, 400))
            BlurSec7.style.display = 'none'

        }
    } else {
        if (scrollPosition > 3700) {
            filterBox.style.bottom = "40px";
        } if (scrollPosition < 3700) {
            filterBox.style.bottom = "-200px";
            BoxFilter.style.right = "-500px"

            MachinesFilter.style.bottom = '-800px'


            await new Promise(resolve => setTimeout(resolve, 300))
            BlurSec7.style.opacity = '0'
            await new Promise(resolve => setTimeout(resolve, 400))
            BlurSec7.style.display = 'none'

        }
    }


})

/* PERCORRER PARA TELA FILTRO */

function scrollToPosition() {
    if (window.innerWidth < 900) {
        window.scrollTo({
            top: 8500,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo({
            top: 4100,
            behavior: 'smooth'
        });
    }

}


/* ABRIR&Fechar FILTRO DE EQUIPAMENTOS */

function OpenFilter() {
    BoxFilter.style.opacity = "2"

    if (window.innerWidth < 900) {
        BoxFilter.style.right = "20px"
    } else {
        BoxFilter.style.right = "30px"
    }

}

function CloseFilter() {
    BoxFilter.style.right = "-500px"
}

/* Abrir&Fechar Maquinas do filtro e Equipamentos*/
async function OpenFilterSelect() {
    ShowEquip()
    BlurSec7.style.display = 'flex'
    BlurSec7.style.opacity = '2'

    BoxFilter.style.right = "-500px"


    await new Promise(resolve => setTimeout(resolve, 100))
    MachinesFilter.style.bottom = '0'

}

async function CloseFilterSelect() {
    MachinesFilter.style.bottom = '-800px'


    await new Promise(resolve => setTimeout(resolve, 300))
    BlurSec7.style.opacity = '0'
    await new Promise(resolve => setTimeout(resolve, 400))
    BlurSec7.style.display = 'none'
}

async function CloseSelectEquip() {
    MachinesSelect.style.bottom = '-700px'


    await new Promise(resolve => setTimeout(resolve, 300))
    BlurSec6.style.opacity = '0'
    await new Promise(resolve => setTimeout(resolve, 400))
    BlurSec6.style.display = 'none'
}

/* Mostrar itens & Filtrados */

let mylist = ''
const UlEquips = document.querySelector('.EquipamentsList')


ShowProdutcs()
function ShowProdutcs() {
    Equipements.forEach(item => {

        mylist = mylist + `
                 <li class="MachineProduct" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" onclick="OpenFilterSelect()">
                   <img class="MachineImage" src=${item.src}
                   alt="Product-Image-Example-png">
    
                   <div class="TextsMachinePD">
                     <h3 class="MarkMachine">${item.Marca}</h3>
                     <h3 class="NameMachine">${item.Nome}</h3>
                   </div>
                 </li>
        `
    })

    UlEquips.innerHTML = mylist

}

function ShowFilteredProducts(filteredItems) {

    let mylist = ''; // Inicializa a variável para evitar acumulação de itens anteriores

    filteredItems.forEach(item => {
        mylist += `
            <li class="MachineProduct" onclick="OpenFilterSelect()">
                <img class="MachineImage" src=${item.src}
                alt="Product-Image-Example-png">

                <div class="TextsMachinePD">
                    <h3 class="MarkMachine">${item.Marca}</h3>
                    <h3 class="NameMachine">${item.Nome}</h3>
                </div>
            </li>
        `;
    });

    UlEquips.innerHTML = mylist; // Atualiza a lista com os itens filtrados
}

/* FILTRAR EQUIPAMENTOS*/

const Select1 = document.getElementById('Ruido')
const Select2 = document.getElementById('Peso')
const Select3 = document.getElementById('Potencia')
const Select4 = document.getElementById('Material')

let Ruido = Select1.value
let Peso = Select2.value
let Potencia = Select3.value
let Material = Select4.value


Select1.addEventListener('change', function () {
    Ruido = Select1.value
})
Select2.addEventListener('change', function () {
    Peso = Select2.value
})
Select3.addEventListener('change', function () {
    Potencia = Select3.value
})
Select4.addEventListener('change', function () {
    Material = Select4.value
})


let newli = Equipements

async function ConfirmFilter() {
    BoxFilter.style.opacity = "0";

    await new Promise(resolve => setTimeout(resolve, 700));
    BoxFilter.style.right = "-500px";

    // Aplicando todos os filtros de forma cumulativa
    newli = Equipements.filter(item => {
        let isValid = true;

        // Filtro de Ruído
        if (Ruido === 'Silencioso') {
            isValid = isValid && (item.Ruido === 60 || item.Ruido === 70 || item.Ruido === 76);
        } else if (Ruido === 'Barulhento') {
            isValid = isValid && (item.Ruido === 75 || item.Ruido === 78 || item.Ruido === 80);
        }

        // Filtro de Peso
        if (Peso === 'MaisLeve') {
            isValid = isValid && (item.Peso <= 5.0);
        } else if (Peso === 'MaisPesado') {
            isValid = isValid && (item.Peso >= 5.0);
        }

        // Filtro de Potência
        if (Potencia === 'MaisPotencia') {
            isValid = isValid && (item.Potencia === 2200 || item.Potencia === 3000 || item.Potencia === 6000);
        } else if (Potencia === 'MenosPotencia') {
            isValid = isValid && (item.Potencia === 1800 || item.Potencia === 2800 || item.Potencia === 5500);
        }

        // Filtro de Material
        if (Material === 'PlasticoResistente') {
            isValid = isValid && (item.Material === 'PlásticosResistente');
        } else if (Material === 'AçoInoxidavel') {
            isValid = isValid && (item.Material === 'AçoInoxidavel');
        }

        return isValid; // Retorna true apenas se o item atender a todas as condições
    });

    console.log(newli); // Verifica os itens filtrados no console
    ShowFilteredProducts(newli); // Exibe os itens filtrados
}

const FilterPrice2 = document.querySelector('.FilterPrice2')
const FPotencia = document.querySelector('.FPotencia')
const FPeso = document.querySelector('.FPeso')
const FRuido = document.querySelector('.FRuido')
const FTemp = document.querySelector('.FTemp')
const FSpeed = document.querySelector('.FSpeed')
const FDiffe = document.querySelector('.FDiffe')

let Cindex2 = -1

function ShowEquipFilter() {
    Cindex2++
    console.log(newli[Cindex])

    FilterPrice2.innerHTML = newli[Cindex2].Preço
    FPotencia.innerHTML = `<b class="Btext">Potência:</b> ${newli[Cindex2].Potencia.toFixed(3)} watts`
    FPeso.innerHTML = `<b class="Btext">Peso:</b> ${newli[Cindex2].Peso.toFixed(1)} kg`
    FRuido.innerHTML = `<b class="Btext">Nivel de Ruido:</b> ${newli[Cindex2].Ruido} watts`
    FTemp.innerHTML = `<b class="Btext">Ajuste de Temperatura:</b> ${newli[Cindex2].AjusteTemp}`
    FSpeed.innerHTML = `<b class="Btext">Ajuste de Velocidade:</b> ${newli[Cindex2].AjusteSpeed}`
    FDiffe.innerHTML = `<b class="Btext">Diferenciais:</b> ${newli[Cindex2].Diferencial}`
}

function NextEquipFilter() {
    if (Cindex2 < newli.length - 1) {
        Cindex2++

        FilterPrice2.innerHTML = Equipements[Cindex2].Preço
        FPotencia.innerHTML = `<b class="Btext">Potência:</b> ${Equipements[Cindex2].Potencia.toFixed(3)} watts`
        FPeso.innerHTML = `<b class="Btext">Peso:</b> ${Equipements[Cindex2].Peso.toFixed(1)} kg`
        FRuido.innerHTML = `<b class="Btext">Nivel de Ruido:</b> ${Equipements[Cindex2].Ruido} watts`
        FTemp.innerHTML = `<b class="Btext">Ajuste de Temperatura:</b> ${Equipements[Cindex2].AjusteTemp}`
        FSpeed.innerHTML = `<b class="Btext">Ajuste de Velocidade:</b> ${Equipements[Cindex2].AjusteSpeed}`
        FDiffe.innerHTML = `<b class="Btext">Diferenciais:</b> ${Equipements[Cindex2].Diferencial}`

    }
}

function BackEquipFilter() {
    if (Cindex2 > 0) {
        Cindex2--

        FilterPrice2.innerHTML = Equipements[Cindex2].Preço
        FPotencia.innerHTML = `<b class="Btext">Potência:</b> ${Equipements[Cindex2].Potencia.toFixed(3)} watts`
        FPeso.innerHTML = `<b class="Btext">Peso:</b> ${Equipements[Cindex2].Peso.toFixed(1)} kg`
        FRuido.innerHTML = `<b class="Btext">Nivel de Ruido:</b> ${Equipements[Cindex2].Ruido} watts`
        FTemp.innerHTML = `<b class="Btext">Ajuste de Temperatura:</b> ${Equipements[Cindex2].AjusteTemp}`
        FSpeed.innerHTML = `<b class="Btext">Ajuste de Velocidade:</b> ${Equipements[Cindex2].AjusteSpeed}`
        FDiffe.innerHTML = `<b class="Btext">Diferenciais:</b> ${Equipements[Cindex2].Diferencial}`


    }
}