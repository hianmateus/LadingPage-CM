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

const CloseButton1 = document.querySelector('.CloseButton')
const ButtonCompare = document.querySelector('.ButtonCompare')
const ButtonMc = document.querySelector('.ButtonMc')
const ButtonWa = document.querySelector('.ButtonWa')
const Blur1 = document.querySelector('.Blur')

const Blur2 = document.querySelector('.Blur2')
const ButtonAbout = document.querySelector('.ButtonAbout')
const CloseButton2 = document.querySelector('.CloseButton2')


CloseButton1.addEventListener('click', function () {
    Blur1.style.display = 'none'

    DeleteIformations()
})
ButtonCompare.addEventListener('click', function () {
    Blur1.style.display = 'none'
    Blur2.style.display = 'flex'
})
ButtonAbout.addEventListener('click', function () {
    Blur2.style.display = 'none'
    Blur1.style.display = 'flex'
})
CloseButton2.addEventListener('click', function () {
    Blur2.style.display = 'none'
})



const bladeContainer = document.querySelectorAll('.bladeContainer')
const BladesSelections = document.querySelectorAll('.DivimageSelection')

const BladeMaster = document.getElementById('BladeMaster')
const dec1 = document.getElementById('dec1')
const dec2 = document.getElementById('dec2')
const dec3 = document.getElementById('dec3')

const Blade1 = document.getElementById('Blade1')
const Blade2 = document.getElementById('Blade2')
const Blade3 = document.getElementById('Blade3')
const Blade4 = document.getElementById('Blade4')
const Blade5 = document.getElementById('Blade5')
const Blade6 = document.getElementById('Blade6')
const Blade7 = document.getElementById('Blade7')
const Blade8 = document.getElementById('Blade8')
const Blade9 = document.getElementById('Blade9')
const Blade10 = document.getElementById('Blade10')
const Blade11 = document.getElementById('Blade11')
const Blade12 = document.getElementById('Blade12')
const BladeSel9 = document.getElementById('BladeSel9')
const BladeSel10 = document.getElementById('BladeSel10')
const BladeSel11 = document.getElementById('BladeSel11')
const BladeSel12 = document.getElementById('BladeSel12')
const BladeSel13 = document.getElementById('BladeSel13')



function DeleteIformations() {
    BladeMaster.src = ""
    dec1.textContent = ``
    dec2.textContent = ``
    dec3.textContent = ``

    Blade1.src = ""
    Blade2.src = ""
    Blade3.src = ""
    Blade4.src = ""
    Blade5.src = ""
    Blade6.src = ""
    Blade7.src = ""
    Blade8.src = ""

}

bladeContainer.forEach(div => {

    div.addEventListener('click', function () {

        if (div.id === "Andis") {

            BladeMaster.src = "./images/Laminas&Tesouras/Andis/LM3.png"
            dec1.textContent = `Corta o pelo para cerca de 13 mm, deixando uma pelagem mais curta,
             mas ainda assim com uma aparência natural.
            de comprimento`
            dec2.textContent = `Projetada para ser compatível com vários modelos de máquinas de tosa da Andis,
             bem como de outras marcas que utilizam o sistema de encaixe universal de lâminas de tosa.`
            dec3.textContent = `útil em sessões de grooming que requerem uma redução significativa no comprimento do pelo,
             mas ainda desejam manter uma aparência natural e uniforme.`

            Blade1.src = "./images/Laminas&Tesouras/Andis/LM3.png"
            Blade2.src = "./images/Laminas&Tesouras/Andis/LM4fc.png"
            Blade3.src = "./images/Laminas&Tesouras/Andis/LM5fc.png"
            Blade4.src = "./images/Laminas&Tesouras/Andis/LM7fc.png"
            Blade5.src = "./images/Laminas&Tesouras/Andis/LM10.png"
            Blade6.src = "./images/Laminas&Tesouras/Andis/LM15.png"
            Blade7.src = "./images/Laminas&Tesouras/Andis/LM30.png"
            Blade8.src = "./images/Laminas&Tesouras/Andis/LM40.png"


            BladesSelections.forEach(div => {

                if (div.id === "BladeSel9") {
                    div.style.display = "none"
                } if (div.id === "BladeSel10") {
                    div.style.display = "none"
                } if (div.id === "BladeSel11") {
                    div.style.display = "none"
                } if (div.id === "BladeSel12") {
                    div.style.display = "none"
                } if (div.id === "BladeSel13") {
                    div.style.display = "none"
                }
            })

            BladeSel9.display = "none"
            BladeSel10.display = "none"
            BladeSel11.display = "none"
            BladeSel12.display = "none"
            BladeSel13.display = "none"

            Blur1.style.display = 'flex'

            Blade1.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Andis/LM3.png"
                dec1.textContent = `Corta o pelo para cerca de 13 mm, deixando uma pelagem mais curta,
             mas ainda assim com uma aparência natural.
            de comprimento`
                dec2.textContent = `Projetada para ser compatível com vários modelos de máquinas de tosa da Andis,
             bem como de outras marcas que utilizam o sistema de encaixe universal de lâminas de tosa.`
                dec3.textContent = `útil em sessões de grooming que requerem uma redução significativa no comprimento do pelo,
             mas ainda desejam manter uma aparência natural e uniforme.`

            })
            Blade2.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Andis/LM4fc.png"
                dec1.textContent = `Corta aproximadamente 9,5 mm.
                 Isso resulta em uma pelagem mais curta, adequada para uma variedade de estilos de corte.`
                dec2.textContent = `Projetada para ser compatível com vários modelos de máquinas de tosa da Andis,
                 assim como com outras marcas que utilizam o sistema de encaixe universal de lâminas de tosa.`
                dec3.textContent = `É especialmente útil para grooming de rotina,
                 manutenção de pelagem e estilos de corte que exigem um comprimento um pouco mais curto,
                 mas ainda mantendo uma aparência elegante e bem cuidada.`
            })
            Blade3.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Andis/LM5fc.png"
                dec1.textContent = `Corta aproximadamente 6,3 mm.
                 Isso significa que o pelo será cortado a uma altura relativamente curta`
                dec2.textContent = `Projetada para ser ccompatível com a maioria das
                 máquinas de tosa da marca Andis que utilizam lâminas removíveis. Ela também pode ser compatível
                  com algumas outras marcas de máquinas de tosa, desde que estas aceitem lâminas do mesmo tamanho e tipo.`
                dec3.textContent = `Ela é eficaz para aparar o pelo de forma uniforme, deixando um acabamento suave.`
            })
            Blade4.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Andis/LM7fc.png"
                dec1.textContent = `Corta aproximadamente 3,2 mm de comprimento, proporcionando um acabamento ainda mais rente.`
                dec2.textContent = `Projetada para ser compatível com a maioria das máquinas de tosa Andis que aceitam lâminas removíveis.
                 Ela também pode ser compatível com algumas outras marcas de máquinas de tosa,
                 desde que estas aceitem lâminas do mesmo tamanho e tipo.`
                dec3.textContent = `Ela é especialmente útil para tosas de manutenção em animais de estimação,
                 como cães e gatos de pelo médio que requerem um corte mais curto.`
            })
            Blade5.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Andis/LM10.png"
                dec1.textContent = `Corta aproximadamente 1/16 de polegada de comprimento, o que equivale a cerca de 1,6 mm.`
                dec2.textContent = `Projetada para ser ccompatível com a maioria das máquinas de tosa da marca Andis que utilizam lâminas removíveis.
                 Além disso, ela é compatível com muitas outras marcas de máquinas de tosa que aceitam lâminas do mesmo tamanho.`
                dec3.textContent = `Frequentemente usada para tosas de higiene e preparação de áreas específicas do corpo do animal,
                 como as patas, virilha, área ao redor dos olhos e orelhas.`
            })
            Blade6.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Andis/LM15.png"
                dec1.textContent = `Corta aproximadamente 0,4 mm de comprimento, 
                deixando o pelo com cerca de 1/64 de polegada de comprimento`
                dec2.textContent = `Projetada para ser compatível com a maioria das máquinas de tosa Andis que aceitam lâminas removíveis.
                 Ela também pode ser compatível com algumas outras marcas de máquinas de tosa que utilizam lâminas do mesmo tamanho.`
                dec3.textContent = `frequentemente usada para tosas de higiene e preparação de áreas muito delicadas do corpo do animal,
                 como entre os dedos das patas, em torno das almofadas das patas,
                 e em tosas de precisão ao redor dos olhos e orelhas.`
            })
            Blade7.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Andis/LM30.png"
                dec1.textContent = `Corta aproximadamente 0,5 mm de comprimento,
                 deixando o pelo com apenas 1/50 de polegada de comprimento`
                dec2.textContent = `Projetada para ser compatível com a maioria das máquinas de tosa Andis que aceitam lâminas removíveis.
                 Além disso, ela também pode ser compatível com algumas outras marcas de máquinas de tosa que utilizam lâminas do mesmo tamanho.`
                dec3.textContent = `Frequentemente usada por profissionais de tosa para tosas de detalhes,
                 como ao redor dos olhos, orelhas e almofadas das patas,
                 bem como para tosas de contorno e acabamento em geral.`
            })
            Blade8.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Andis/LM40.png"
                dec1.textContent = `Corta aproximadamente 0,25 mm de comprimento,
                 deixando o pelo com apenas 1/100 de polegada de comprimento`
                dec2.textContent = `Projetada para ser compatível com a maioria das máquinas de tosa Andis que aceitam lâminas removíveis.
                 Além disso, ela também pode ser compatível com algumas outras marcas de máquinas de tosa que utilizam lâminas do mesmo tamanho.`
                dec3.textContent = `Frequentemente usada por profissionais de tosa para tosas de detalhes extremamente precisas,
                 como ao redor dos olhos, orelhas, patas e áreas genitais. Também é útil para tosas de contorno e acabamento em geral.`
            })

        }
        if (div.id === "Oster") {

            BladeMaster.src = "./images/Laminas&Tesouras/Oster/OLM3.png"
            dec1.textContent = `Corta o pelo de aproximadamente 1/2 polegada, o que equivale a cerca de 13 mm.`
            dec2.textContent = `Projetada para ser compatível com as máquinas de tosa Oster que aceitam lâminas removíveis.
             Além disso, ela pode ser compatível com algumas outras marcas de máquinas de tosa que utilizam lâminas do mesmo tamanho.`
            dec3.textContent = `Frequentemente usada para tosas de manutenção em animais de estimação,
             proporcionando um corte uniforme e controlado.`

            Blade1.src = "./images/Laminas&Tesouras/Oster/OLM3.png"
            Blade2.src = "./images/Laminas&Tesouras/Oster/OLM4f.png"
            Blade3.src = "./images/Laminas&Tesouras/Oster/OLM5.png"
            Blade4.src = "./images/Laminas&Tesouras/Oster/OLM7.png"
            Blade5.src = "./images/Laminas&Tesouras/Oster/OLM10.png"
            Blade6.src = "./images/Laminas&Tesouras/Oster/OLM15.png"
            Blade7.src = "./images/Laminas&Tesouras/Oster/OLM30.png"
            Blade8.src = "./images/Laminas&Tesouras/Oster/OLM40.png"
            Blade9.src = "./images/Laminas&Tesouras/Oster/OLM50.png"


            BladesSelections.forEach(div => {

                if (div.id === "BladeSel9") {
                    div.style.display = "flex"
                } if (div.id === "BladeSel10") {
                    div.style.display = "none"
                } if (div.id === "BladeSel11") {
                    div.style.display = "none"
                } if (div.id === "BladeSel12") {
                    div.style.display = "none"
                } if (div.id === "BladeSel13") {
                    div.style.display = "none"
                }
            })


            Blur1.style.display = 'flex'

            Blade1.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Oster/OLM3.png"
                dec1.textContent = `Corta o pelo de aproximadamente 1/2 polegada, o que equivale a cerca de 13 mm.`
                dec2.textContent = `Projetada para ser compatível com as máquinas de tosa Oster que aceitam lâminas removíveis.
                Além disso, ela pode ser compatível com algumas outras marcas de máquinas de tosa que utilizam lâminas do mesmo tamanho.`
                dec3.textContent = `Frequentemente usada para tosas de manutenção em animais de estimação,
                proporcionando um corte uniforme e controlado.`
            })
            Blade2.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Oster/OLM4f.png"
                dec1.textContent = `Corta o pelo a uma altura de cerca de 3/8 de polegada,
                 o que equivale a aproximadamente 9,5 mm.`
                dec2.textContent = `Projetada para ser compatível com as máquinas de tosa Oster que aceitam lâminas removíveis.
                 Além disso, ela pode ser compatível com algumas outras marcas de máquinas de tosa que utilizam lâminas do mesmo tamanho.`
                dec3.textContent = `Frequentemente usada para tosas de manutenção em animais de estimação,
                 especialmente em cães com pelagem de comprimento médio a longo.`
            })
            Blade3.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Oster/OLM5.png"
                dec1.textContent = `Corta o pelo a uma altura de aproximadamente 1/4 de polegada,
                 o que equivale a cerca de 6,3 mm.`
                dec2.textContent = `Projetada para ser compatível com as máquinas de tosa Oster que aceitam lâminas removíveis.
                 Além disso, ela pode ser compatível com algumas outras marcas de máquinas de tosa que utilizam lâminas do mesmo tamanho.`
                dec3.textContent = `Eficaz para aparar o pelo a uma altura média, deixando uma camada visível de pelo.`
            })
            Blade4.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Oster/OLM7.png"
                dec1.textContent = `Corta o pelo a uma medida de aproximadamente 1/8 de polegada, que corresponde a cerca de 3,2 mm.`
                dec2.textContent = `Projetada para ser utilizada em máquinas de tosa Oster que aceitam lâminas removíveis.
                 Além disso, pode ser compatível com outras marcas que seguem o mesmo padrão de encaixe.`
                dec3.textContent = `É ideal para aparar o pelo a uma altura intermediária,
                 mantendo uma aparência arrumada e deixando uma camada de pelo visível.`
            })
            Blade5.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Oster/OLM10.png"
                dec1.textContent = `proporciona um corte muito rente,
                 deixando o pelo com uma altura mínima de cerca de 1/64 de polegada, equivalente a aproximadamente 0,4 mm.`
                dec2.textContent = `Projetada para ser compatível com as máquinas de tosa Oster que aceitam lâminas removíveis.
                 Além disso, pode ser utilizada com outras marcas que adotam o mesmo padrão de encaixe.`
                dec3.textContent = `É ideal para tosas de contorno e detalhes refinados, proporcionando um corte extremamente rente e preciso.`
            })
            Blade6.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Oster/OLM15.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade7.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Oster/OLM30.png"
                dec1.textContent = `Corte extremamente rente, deixando o pelo praticamente raspado,
                 com uma altura mínima de cerca de 1/100 de polegada, o que equivale a aproximadamente 0,25 mm.`
                dec2.textContent = `Projetada para ser compatível com as máquinas de tosa da Oster que aceitam lâminas removíveis.
                 Ela também pode ser utilizada com outras marcas que seguem o mesmo padrão de encaixe.`
                dec3.textContent = `Recomendada para tosas que demandam um acabamento extremamente rente,
                 como em áreas sensíveis e de difícil acesso, incluindo ao redor dos olhos, orelhas e patas.`
            })
            Blade8.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Oster/OLM40.png"
                dec1.textContent = `Corte excepcionalmente rente, deixando o pelo praticamente raspado,
                 com uma altura mínima de aproximadamente 1/100 de polegada, equivalente a cerca de 0,25 mm.`
                dec2.textContent = `Projetada para ser compativel com as máquinas de tosa da Oster que aceitam lâminas removíveis.
                 Além disso, ela pode ser utilizada em máquinas de outras marcas que compartilham o mesmo padrão de encaixe.`
                dec3.textContent = `Recomendada para tosas que exigem uma precisão máxima e um corte rente à pele,
                 especialmente em áreas delicadas e de difícil acesso, como ao redor dos olhos, orelhas e patas.`
            })
            Blade9.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Oster/OLM50.png"
                dec1.textContent = `Realiza um corte ultra-raso, deixando o pelo praticamente rente à pele,
                 com uma altura mínima de cerca de 1/125 de polegada, o que equivale a aproximadamente 0,2 mm.`
                dec2.textContent = `Projetada para ser compativel com as máquinas de tosa da Oster que aceitam lâminas removíveis.
                 Além disso, pode ser utilizada em máquinas de outras marcas que sigam o mesmo padrão de encaixe.`
                dec3.textContent = `Recomendada para tosas que exigem uma precisão absoluta e um corte rente à pele,
                 especialmente em áreas delicadas e sensíveis, como ao redor dos olhos, orelhas e patas.`
            })

        }
        if (div.id === "Wahl") {

            BladeMaster.src = "./images/Laminas&Tesouras/Wahl/WLM4.png"
            dec1.textContent = `Corte moderado, deixando o pelo com uma altura de cerca de 3/8 de polegada, equivalente a aproximadamente 9,5 mm.`
            dec2.textContent = `Projetada para ser compatível com as máquinas de tosa da Wahl que aceitam lâminas removíveis.
            Além disso, pode ser utilizada em máquinas de outras marcas que compartilham o mesmo padrão de encaixe.`
            dec3.textContent = `É eficaz para aparar o pelo a uma altura média,
            deixando uma camada visível de pelo. Pode ser utilizada em várias áreas do corpo do animal, dependendo do estilo de tosa desejado.`

            Blade1.src = "./images/Laminas&Tesouras/Wahl/WLM4.png"
            Blade2.src = "./images/Laminas&Tesouras/Wahl/WLM5.png"
            Blade3.src = "./images/Laminas&Tesouras/Wahl/WLM7F.png"
            Blade4.src = "./images/Laminas&Tesouras/Wahl/WLM9.png"
            Blade5.src = "./images/Laminas&Tesouras/Wahl/WLM10.png"
            Blade6.src = "./images/Laminas&Tesouras/Wahl/WLM15.png"
            Blade7.src = "./images/Laminas&Tesouras/Wahl/WLM30.png"
            Blade8.src = "./images/Laminas&Tesouras/Wahl/WLM34.png"
            Blade9.src = "./images/Laminas&Tesouras/Wahl/WLM40.png"
            Blade10.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png"


            BladesSelections.forEach(div => {

                if (div.id === "BladeSel9") {
                    div.style.display = "flex"
                } if (div.id === "BladeSel10") {
                    div.style.display = "flex"
                } if (div.id === "BladeSel11") {
                    div.style.display = "none"
                } if (div.id === "BladeSel12") {
                    div.style.display = "none"
                } if (div.id === "BladeSel13") {
                    div.style.display = "none"
                }
            })


            Blur1.style.display = 'flex'

            Blade1.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Wahl/WLM4.png"
                dec1.textContent = `Corte moderado, deixando o pelo com uma altura de cerca de 3/8 de polegada, equivalente a aproximadamente 9,5 mm.`
                dec2.textContent = `Projetada para ser compatível com as máquinas de tosa da Wahl que aceitam lâminas removíveis.
                 Além disso, pode ser utilizada em máquinas de outras marcas que compartilham o mesmo padrão de encaixe.`
                dec3.textContent = `É eficaz para aparar o pelo a uma altura média,
                 deixando uma camada visível de pelo. Pode ser utilizada em várias áreas do corpo do animal, dependendo do estilo de tosa desejado.`
            })
            Blade2.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Wahl/WLM5.png"
                dec1.textContent = `Corte intermediário, deixando o pelo com uma altura de aproximadamente 1/4 de polegada, o que equivale a cerca de 6,3 mm.`
                dec2.textContent = `Projetada para ser compatível com as máquinas de tosa da Wahl que aceitam lâminas removíveis.
                 Além disso, ela pode ser utilizada em máquinas de outras marcas que sigam o mesmo padrão de encaixe.`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade3.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Wahl/WLM7F.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade4.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Wahl/WLM9.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade5.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Wahl/WLM10.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade6.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Wahl/WLM15.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade7.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Wahl/WLM30.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade8.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Wahl/WLM34.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade9.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Wahl/WLM40.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade10.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })

        }
        if (div.id === "Precision") {

            BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM4.png"
            dec1.textContent = `Corta o pelo para cerca de 1,5 mm
            de comprimento`
            dec2.textContent = `Projetada para ser compativel em
            todas as maquinas de tosa`
            dec3.textContent = `Usada em áreas como barriga,
            virilha, almofadas das patas e para acabamentos em cortes de pelo`

            Blade1.src = "./images/Laminas&Tesouras/Precision/PLM4.png"
            Blade2.src = "./images/Laminas&Tesouras/Precision/PLM4FC.png"
            Blade3.src = "./images/Laminas&Tesouras/Precision/PLM5.png"
            Blade4.src = "./images/Laminas&Tesouras/Precision/PLM7.png"
            Blade5.src = "./images/Laminas&Tesouras/Precision/PLM7FC.png"
            Blade6.src = "./images/Laminas&Tesouras/Precision/PLM10.png"
            Blade7.src = "./images/Laminas&Tesouras/Precision/PLM15.png"
            Blade8.src = "./images/Laminas&Tesouras/Precision/PLM30.png"
            Blade9.src = "./images/Laminas&Tesouras/Precision/PLM34.png"
            Blade10.src = "./images/Laminas&Tesouras/Precision/PLM40.png"
            Blade11.src = "./images/Laminas&Tesouras/Precision/PLM58.png"
            Blade12.src = "./images/Laminas&Tesouras/Precision/PLMA8S.png"


            BladesSelections.forEach(div => {

                if (div.id === "BladeSel9") {
                    div.style.display = "flex"
                } if (div.id === "BladeSel10") {
                    div.style.display = "flex"
                } if (div.id === "BladeSel11") {
                    div.style.display = "flex"
                } if (div.id === "BladeSel12") {
                    div.style.display = "flex"
                } if (div.id === "BladeSel13") {
                    div.style.display = "none"
                }
            })


            Blur1.style.display = 'flex'

            Blade1.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM4.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade2.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM4FC.png"
                dec1.textContent = `Corta aproximadamente 9.5mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade3.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM5.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade4.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM7.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade5.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM7FC.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade6.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM10.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade7.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM15.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade8.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM30.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade9.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM34.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade10.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM40.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade11.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLM58.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade12.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Precision/PLMA8S.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })

        }
        if (div.id === "Propetz") {

            BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PTLM3F.png"
            dec1.textContent = `Corta o pelo para cerca de 1,5 mm
            de comprimento`
            dec2.textContent = `Projetada para ser compativel em
            todas as maquinas de tosa`
            dec3.textContent = `Usada em áreas como barriga,
            virilha, almofadas das patas e para acabamentos em cortes de pelo`

            Blade1.src = "./images/Laminas&Tesouras/Propetz/PTLM3F.png"
            Blade2.src = "./images/Laminas&Tesouras/Propetz/PTLM4F.png"
            Blade3.src = "./images/Laminas&Tesouras/Propetz/PTLM5F.png"
            Blade4.src = "./images/Laminas&Tesouras/Propetz/PTLM7F.png"
            Blade5.src = "./images/Laminas&Tesouras/Propetz/PTLM9.png"
            Blade6.src = "./images/Laminas&Tesouras/Propetz/PTLM10.png"
            Blade7.src = "./images/Laminas&Tesouras/Propetz/PTLM15.png"
            Blade8.src = "./images/Laminas&Tesouras/Propetz/PTLM30.png"
            Blade9.src = "./images/Laminas&Tesouras/Propetz/PTLM40.png"
            Blade10.src = "./images/Laminas&Tesouras/Propetz/PTLM50.png"
            Blade11.src = "./images/Laminas&Tesouras/Propetz/PRTLM30.png"


            BladesSelections.forEach(div => {

                if (div.id === "BladeSel9") {
                    div.style.display = "flex"
                } if (div.id === "BladeSel10") {
                    div.style.display = "flex"
                } if (div.id === "BladeSel11") {
                    div.style.display = "flex"
                } if (div.id === "BladeSel12") {
                    div.style.display = "none"
                } if (div.id === "BladeSel13") {
                    div.style.display = "none"
                }
            })


            Blur1.style.display = 'flex'

            Blade1.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PTLM3F.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade2.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PTLM4F.png"
                dec1.textContent = `Corta aproximadamente 9.5mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade3.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PTLM5F.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade4.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PTLM7F.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade5.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PTLM9.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade6.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PTLM10.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade7.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PTLM15.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade8.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PTLM30.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade9.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PTLM40.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade10.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PTLM50.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })
            Blade11.addEventListener('click', function () {
                BladeMaster.src = "./images/Laminas&Tesouras/Propetz/PRTLM30.png"
                dec1.textContent = `Corta aproximadamente 13mm de comprimento`
                dec2.textContent = `Projetada para ser compativel em
                diversas máquinas de tosa Andis, como a Andis AG, AGC, AGR, MBG, entre outras`
                dec3.textContent = `Oferece um corte mais longo, ideal para áreas que precisam de uma tosa mais suave.
                 Pode ser usada para cortar pelagens grossas e densas em cães com pelagem mais espessa`
            })

        }

    })

});

