const MenuButton = document.querySelector('.MenuHeader')
const MenuHeader = document.querySelector('.NavbarUl')

const Blur = document.querySelector('.Blur')
const SeleBlade1 = document.querySelector('#Acabamento')
const SeleBlade2 = document.querySelector('#Ajuste')
const SeleBlade3 = document.querySelector('#Desbaste')
const SeleBlade4 = document.querySelector('#AcabamentoHigienica')
const SeleBlade5 = document.querySelector('#DesbasteHigienica')

const BladeDiv = document.querySelector('.bladeContainer')
const CloseButton = document.querySelector('.CloseButton')


MenuButton.addEventListener('click', async (event) => {
    event.stopPropagation();
    if (MenuHeader.style.display === 'none' || MenuHeader.style.display === '') {
        MenuHeader.style.display = 'flex'

        await new Promise(resolve => setTimeout(resolve, 300))
        MenuHeader.style.right = '-125px'
    } else {
        MenuHeader.style.right = '-425px'

        await new Promise(resolve => setTimeout(resolve, 300))
        MenuHeader.style.display = 'none'
    }

    document.addEventListener('click', async (event) => {
        if (!MenuHeader.contains(event.target) && !MenuButton.contains(event.target)) {
            MenuHeader.style.right = '-425px'

            await new Promise(resolve => setTimeout(resolve, 300))
            MenuHeader.style.display = 'none'
        }
    })
})

/* INTERVALO DAS IMAGENS SELECIONADAS */

const fade1 = document.querySelectorAll('.fadeIMG1')
const fade2 = document.querySelectorAll('.fadeIMG2')
const fade3 = document.querySelectorAll('.fadeIMG3')
const fade4 = document.querySelectorAll('.fadeIMG4')
const fade5 = document.querySelectorAll('.fadeIMG5')

const image1 = Array.from(fade1)
const image2 = Array.from(fade2)
const image3 = Array.from(fade3)
const image4 = Array.from(fade4)
const image5 = Array.from(fade5)


let intervalo
function ChangeImages() {
    let valor = 0;

    intervalo = setInterval(() => {
        console.log(valor);
        valor++;

        if (valor === 1) {
            image1.forEach(imagem => {
                imagem.style.opacity = "0";
            })

        } if (valor === 4) {
            image2.forEach(imagem => {
                imagem.style.opacity = "0";
            })

        } if (valor === 6) {
            image3.forEach(imagem => {
                imagem.style.opacity = "0";
            })

        } if (valor === 8) {
            image4.forEach(imagem => {
                imagem.style.opacity = "0";
            })

        } if (valor === 10) {
            image1.forEach(imagem => {
                imagem.style.opacity = "1";
            })
            image2.forEach(imagem => {
                imagem.style.opacity = "1";
            })
            image3.forEach(imagem => {
                imagem.style.opacity = "1";
            })
            image4.forEach(imagem => {
                imagem.style.opacity = "1";
            })
            image5.forEach(imagem => {
                imagem.style.opacity = "1";
            })

        }

        if (valor > 11) {
            clearInterval(intervalo);
        } if (valor > 10) {
            valor = 0
        }

    }, 800)


}

function stopChangeImages() {
    clearInterval(intervalo); // Para o intervalo usando a referência armazenada
}

/* ALTERAR INFORMAÇÕES */

function changeProduct1(imgsrc) {
    

    const BladeImageS = document.querySelector('#imgsrc1')
    BladeImageS.src = imgsrc.src

    const about1 = document.querySelector('#about1')
    const about2 = document.querySelector('#about2')
    const about3 = document.querySelector('#about3')

    const BladeName = document.querySelector('#AcBladeName1')
    const BladePrice = document.querySelector('#AcBladePrice1')
    const LinkML = document.querySelector('#LinkML1')
    const LinkWA = document.querySelector('#LinkWA1')

    if (imgsrc.id === 'ACBlade1') {

        about1.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada para garantir um corte curto e
                            higiênico nessas áreas sensíveis, ao redor das patas, evitando acúmulo de sujeira e detritos
                            e ao redor do focinho e orelhas</p>`
        about2.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 1,5 mm`

        BladeName.innerHTML = 'Lamina 10'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM10.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM10.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM10.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM10.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM10.png";
        })

    } if (imgsrc.id === 'ACBlade2') {

        about1.innerHTML = `<b class="bBlack">Uso Comum:</b> Eficaz em pelagens mais densas, ajudando a reduzir o volume sem deixar um corte muito rente.</p>`
        about2.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 3.2 mm, mantendo um visual bem aparado`

        BladeName.innerHTML = 'Lamina 7F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM7F.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM7fc.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM7.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM7fc.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM7F.png";
        })

    } if (imgsrc.id === 'ACBlade3') {

        about1.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada para reduzir o volume em pelagens mais finas,
         deixando uma aparência limpa e bem cuidada e áreas que precisam de um corte mais curto</p>`
        about2.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 6 mm`

        BladeName.innerHTML = 'Lamina 5F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM5fc.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM5.png";

        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM5.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM5F.png";
        })
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM5.png";
        })

    } if (imgsrc.id === 'ACBlade4') {

        about1.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada em cortes de estilo que requerem um comprimento médio,
         adequada para diversas raças de cães e tambem e ficaz em pelagens mais densas,
          ajudando a remover nós e embaraços</p>`
        about2.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 9.5 mm`

        BladeName.innerHTML = 'Lamina 4F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM4f.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM4FC.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM4F.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM4.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM4fc.png";
        })

    } if (imgsrc.id === 'ACBlade5') {

        about1.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada para reduzir o volume de pelo em todo o corpo,
         mantendo um comprimento razoável como em tosas de estilo que exigem um comprimento médio,
          como para algumas raças de cães de pelagem longa</p>`
        about2.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 13 mm`

        BladeName.innerHTML = 'Lamina 3F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM34.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM3.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM3.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM34.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM34.png";
        })

    } if (imgsrc.id === 'ACBlade6') {

        about1.innerHTML = `<b class="bBlack">Uso Comum:</b> Ideal para cortes finos e detalhados,
         especialmente em áreas sensíveis, como ao redor dos olhos e orelhas</p>`
        about2.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0.8 - 1.1 - 1.4 - 1.7 - 2.0 mm`
        about3.innerHTML = `<b class="bBlack">Compatibilidade:</b> Compativel com máquinas de tosa de mesmo encaixe, além da padrão Precision, as
                            fabricadas pela Propetz`

        BladeName.innerHTML = 'Lamina A8s'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLMA8s.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLMA8s.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLMA8s.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLMA8s.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLMA8s.png";
        })

    }
}
function changeProduct2(imgsrc) {
    
    const BladeImageS = document.querySelector('#imgsrc2')
    BladeImageS.src = imgsrc.src

    const about4 = document.querySelector('#about4')
    const about5 = document.querySelector('#about5')
    const about6 = document.querySelector('#about6')

    const BladeName = document.querySelector('#AcBladeName2')
    const BladePrice = document.querySelector('#AcBladePrice2')
    const LinkML = document.querySelector('#LinkML2')
    const LinkWA = document.querySelector('#LinkWA2')

    if (imgsrc.id === 'DSBlade1') {

        about4.innerHTML = `<b class="bBlack">Uso Comum:</b> Boa para reduzir o volume em pelagens mais finas,
         deixando uma aparência limpa e bem cuidada</p>`
        about5.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 6.30 mm`

        BladeName.innerHTML = 'Lamina 5f'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM5.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM5.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM5F.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM5.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM5fc.png";
        })

    } if (imgsrc.id === 'DSBlade2') {

        about4.innerHTML = `<b class="bBlack">Uso Comum:</b> Eficaz em pelagens mais densas, ajudando a reduzir o volume sem deixar um corte muito rente</p>`
        about5.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 3.2 mm`

        BladeName.innerHTML = 'Lamina 7F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM7F.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM7fc.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM7.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM7.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM7F.png";
        })

    } if (imgsrc.id === 'DSBlade3') {

        about4.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada para garantir um corte curto e higiênico nessas áreas sensíveis,
         tambem para cortes precisos e confortáveis ao redor do focinho e orelhas</p>`
        about5.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 1.5 mm`

        BladeName.innerHTML = 'Lamina 10'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM10.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM10.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM10.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM10.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM10.png";
        })

    } if (imgsrc.id === 'DSBlade4') {

        about4.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada para cortes precisos em áreas sensíveis,
         como ao redor das patas, face, orelhas e áreas genitais,
          ajudando a remover nós e embaraços</p>`
        about5.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 1.2 mm`

        BladeName.innerHTML = 'Lamina 15'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM15.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM15.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM15.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM15.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM15.png";
        })

    } if (imgsrc.id === 'DSBlade5') {

        about4.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada para acabamentos extremamente precisos e  em áreas muito sensíveis,
         como ao redor dos olhos, ouvidos e área genital</p>`
        about5.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,50 mm`

        BladeName.innerHTML = 'Lamina 30'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM30.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM30.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM30.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM30.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM30.png";
        })

    } if (imgsrc.id === 'DSBlade6') {

        about4.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada em competições e exposições para obter
         um acabamento muito próximo da pele em determinadas raças e estilos de tosa</p>`
        about5.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,25 mm`

        BladeName.innerHTML = 'Lamina 40'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM40.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM40.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM40.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM40.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM40.png";
        })

    } if (imgsrc.id === 'DSBlade7') {

        about4.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada para remover pelo em
         áreas muito pequenas e específicas, garantindo máxima exposição da pele</p>`
        about5.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,2 mm`

        BladeName.innerHTML = 'Lamina 50'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM50.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM50.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM50.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM50.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM50.png";
        })

    } if (imgsrc.id === 'DSBlade8') {

        about4.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada para redução de volume em pelagens
         densas e grossas, proporcionando um corte uniforme e controlado</p>`
        about5.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,7mm e 3mm`
        about6.innerHTML = `<b class="bBlack">Compatibilidade:</b> Compativel apenas com máquinas de tosa Bravura padrão
         fabricadas pela Wahl`

        BladeName.innerHTML = 'Lamina Bravura'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png";
        })

    } if (imgsrc.id === 'DSBlade9') {

        about4.innerHTML = `<b class="bBlack">Uso Comum:</b> Ideal para cortes de pelagem em todo o corpo,
         mantendo um comprimento médio e proporcionando um acabamento uniforme</p>`
        about5.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,5 mm`
        about6.innerHTML = `<b class="bBlack">Compatibilidade:</b> Compativel com máquinas de tosa de mesmo encaixe,
         além da padrão Propetz, as fabricadas pela Precision`

        BladeName.innerHTML = 'Lamina Pro6'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PRTLMPro6.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PRTLMPro6.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PRTLMPro6.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PRTLMPro6.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PRTLMPro6.png";
        })

    }
}
function changeProduct3(imgsrc) {

    const BladeImageS = document.querySelector('#imgsrc3')
    BladeImageS.src = imgsrc.src

    const about7 = document.querySelector('#about7')
    const about8 = document.querySelector('#about8')
    const about9 = document.querySelector('#about9')

    const BladeName = document.querySelector('#AcBladeName3')
    const BladePrice = document.querySelector('#AcBladePrice3')
    const LinkML = document.querySelector('#LinkML3')
    const LinkWA = document.querySelector('#LinkWA3')

    if (imgsrc.id === 'AJBlade1') {

        about7.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada para garantir um corte curto e higiênico nessas áreas sensíveis,
         e tambem para cortes precisos e confortáveis ao redor do focinho e orelhas.</p>`
        about8.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 1,6 mm`

        BladeName.innerHTML = 'Lamina 10'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Ajuste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM10.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM10.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM10.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM10.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM10.png";
        })


    } if (imgsrc.id === 'AJBlade2') {

        about7.innerHTML = `<b class="bBlack">Uso Comum:</b> Ideal para cortes precisos em áreas sensíveis,
         como ao redor das patas, face, orelhas e áreas genitais, tambem para detalhes e acabamentos que requerem um corte mais curto e preciso,
         mas que não precisam ser tão curtos quanto o corte oferecido pela lâmina </p>`
        about8.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 1.2 mm`

        BladeName.innerHTML = 'Lamina 15'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Ajuste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM15.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM15.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM15.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM15.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM15.png";
        })

    } if (imgsrc.id === 'AJBlade3') {

        about7.innerHTML = `<b class="bBlack">Uso Comum:</b> Utilizada como um passo inicial antes de aplicar lâminas mais curtas,
         permitindo um desbaste gradual</p>`
        about8.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,7mm e 3mm`
        about9.innerHTML = `<b class="bBlack">Compatibilidade:</b> Compativel apenas com máquinas de tosa Bravura padrão
         fabricadas pela Wahl`

        BladeName.innerHTML = 'Lamina Bravura'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Ajuste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLMBravura.png";
        })

    } if (imgsrc.id === 'AJBlade4') {

        about7.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada em competições e exposições para obter
         um acabamento muito próximo da pele em determinadas raças e estilos de tos,
          ajudando a remover nós e embaraços</p>`
        about8.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,25 mm`

        BladeName.innerHTML = 'Lamina 40'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Ajuste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM40.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM40.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM40.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM40.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM40.png";
        })

    } if (imgsrc.id === 'AJBlade5') {

        about7.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada em competições para obter um corte muito
         rente e preciso em determinadas partes do corpo de raças específicas</p>`
        about8.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,2 mm`

        BladeName.innerHTML = 'Lamina 50'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Ajuste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM50.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM50.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM50.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM50.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM50.png";
        })

    } if (imgsrc.id === 'AJBlade6') {

        about7.innerHTML = `<b class="bBlack">Uso Comum:</b> Eficaz para trabalhar com pelagens finas,
         evitando a irritação da pele e garantindo um corte uniforme</p>`
        about8.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,8 mm`

        BladeName.innerHTML = 'Lamina 7/8'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Ajuste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM78.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM78.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM78.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM78.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM78.png";
        })

    } if (imgsrc.id === 'AJBlade7') {

        about7.innerHTML = `<b class="bBlack">Uso Comum:</b> Utilizada para cortes precisos em áreas
         como focinho e orelhas, proporcionando um ajuste cuidadoso</p>`
        about8.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 3,2 mm`

        BladeName.innerHTML = 'Lamina 7F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Ajuste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM7fc.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM7.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM7FC.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM7F.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM7F.png";
        })

    } if (imgsrc.id === 'AJBlade8') {

        about7.innerHTML = `<b class="bBlack">Uso Comum:</b> Boa para tosar áreas como o corpo e flancos,
         proporcionando um acabamento uniforme</p>`
        about8.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 13 mm`

        BladeName.innerHTML = 'Lamina 3F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Ajuste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM3.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM3.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM34.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM3F.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM34.png";
        })

    } if (imgsrc.id === 'AJBlade9') {

        about7.innerHTML = `<b class="bBlack">Uso Comum:</b> Ideal para reduzir o volume de pelo em todo o corpo,
         eficaz em pelagens mais densas, ajudando a remover nós e embaraços</p>`
        about8.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 9,5 mm`

        BladeName.innerHTML = 'Lamina 4F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Ajuste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM4FC.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM4F.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM4.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM4fc.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM4f.png";
        })

    } if (imgsrc.id === 'AJBlade10') {

        about7.innerHTML = `<b class="bBlack">Uso Comum:</b> Boa para reduzir o volume em pelagens mais finas,
         deixando uma aparência limpa e bem cuidada e em áreas que precisam de um corte mais curto,
         mas ainda com um pouco de pelo, como ao redor de orelhas e focinho</p>`
        about8.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 6,4 mm`

        BladeName.innerHTML = 'Lamina 5f'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Ajuste'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM5.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM5fc.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM5.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM5.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM5F.png";
        })

    }
}
function changeProduct4(imgsrc) {
    
    const BladeImageS = document.querySelector('#imgsrc4')
    BladeImageS.src = imgsrc.src

    const about10 = document.querySelector('#about10')
    const about11 = document.querySelector('#about11')
    const about12 = document.querySelector('#about12')

    const BladeName = document.querySelector('#AcBladeName4')
    const BladePrice = document.querySelector('#AcBladePrice4')
    const LinkML = document.querySelector('#LinkML4')
    const LinkWA = document.querySelector('#LinkWA4')

    if (imgsrc.id === 'AHBlade1') {

        about10.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada para garantir um corte curto e higiênico nessas áreas sensíveis,
         evitando acúmulo de sujeira e detritos com cortes precisos e confortáveis ao redor do focinho e orelhas</p>`
        about11.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 1.5 mm`

        BladeName.innerHTML = 'Lamina 10'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento+Higienico'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM10.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM10.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM10.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM10.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM10.png";
        })

    } if (imgsrc.id === 'AHBlade2') {

        about10.innerHTML = `<b class="bBlack">Uso Comum:</b> Ideal para cortes precisos em áreas sensíveis,
         como ao redor das patas, face, orelhas e áreas genitais, tambem para detalhes e acabamentos que requerem um corte mais curto e preciso,
         mas que não precisam ser tão curtos quanto o corte oferecido pela lâmina </p>`
        about11.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 1.2 mm`

        BladeName.innerHTML = 'Lamina 15'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento+Higienico'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM15.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM15.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM15.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM15.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM15.png";
        })

    } if (imgsrc.id === 'AHBlade3') {

        about10.innerHTML = `<b class="bBlack">Uso Comum:</b> Ideal para cortes curtos em áreas sensíveis,
         como a região genital e sob as patas, garantindo um acabamento limpo e higiênico</p>`
        about11.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 3.2 mm`

        BladeName.innerHTML = 'Lamina 7F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento+Higienico'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM7F.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM7F.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM7fc.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM7.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM7FC.png";
        })

    } if (imgsrc.id === 'AHBlade4') {

        about10.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada em competições e exposições para obter
         um acabamento muito próximo da pele em determinadas raças e estilos de tos,
          ajudando a remover nós e embaraços</p>`
        about11.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,25 mm`

        BladeName.innerHTML = 'Lamina 30'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento+Higienico'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM30.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM30.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM30.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM30.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM30.png";
        })

    } if (imgsrc.id === 'AHBlade5') {

        about10.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada em competições para obter um corte muito
         rente e preciso em determinadas partes do corpo de raças específicas</p>`
        about11.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,2 mm`

        BladeName.innerHTML = 'Lamina 40'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento+Higienico'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM40.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM40.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM40.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM40.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM40.png";
        })

    } if (imgsrc.id === 'AHBlade6') {

        about10.innerHTML = `<b class="bBlack">Uso Comum:</b> Eficaz para trabalhar com pelagens finas,
         evitando a irritação da pele e garantindo um corte uniforme</p>`
        about11.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,8 mm`

        BladeName.innerHTML = 'Lamina 5F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento+Higienico'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM5.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM5fc.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM5.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM5.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM5F.png";
        })

    } if (imgsrc.id === 'AHBlade7') {

        about10.innerHTML = `<b class="bBlack">Uso Comum:</b> Utilizada para cortes precisos em áreas
         como focinho e orelhas, proporcionando um ajuste cuidadoso</p>`
        about11.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 3,2 mm`

        BladeName.innerHTML = 'Lamina 4F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento+Higienico'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM4F.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM4FC.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM4.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM4fc.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM4f.png";
        })

    } if (imgsrc.id === 'AHBlade8') {

        about10.innerHTML = `<b class="bBlack">Uso Comum:</b> Utilizada para cortes precisos em áreas
         como focinho e orelhas, proporcionando um ajuste cuidadoso</p>`
        about11.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 2,0 mm a 0,5 mm`
        about12.innerHTML = `<b class="bBlack">Compatibilidade:</b> Compativel apenas com máquinas de tosa padrão com encaixe
         fabricadas pela Propetz`

        BladeName.innerHTML = 'Lamina Propetz 30'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Acabamento+Higienico'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PRTLM30.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PRTLM30.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PRTLM30.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PRTLM30.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PRTLM30.png";
        })

    }
}
function changeProduct5(imgsrc) {
    
    const BladeImageS = document.querySelector('#imgsrc5')
    BladeImageS.src = imgsrc.src

    const about13 = document.querySelector('#about13')
    const about14 = document.querySelector('#about14')
    const about15 = document.querySelector('#about15')

    const BladeName = document.querySelector('#AcBladeName5')
    const BladePrice = document.querySelector('#AcBladePrice5')
    const LinkML = document.querySelector('#LinkML5')
    const LinkWA = document.querySelector('#LinkWA5')

    if (imgsrc.id === 'DHBlade1') {

        about13.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada como um passo intermediário antes de um corte mais curto,
         permitindo um desbaste gradual</p>`
        about14.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 13 mm`

        BladeName.innerHTML = 'Lamina 3F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste+Higienica'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM34.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM3.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM3.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM34.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM3F.png";
        })

    } if (imgsrc.id === 'DHBlade2') {

        about13.innerHTML = `<b class="bBlack">Uso Comum:</b> Ideal para um acabamento uniforme em áreas como o corpo e flancos,
         sendo útil para deixar uma aparência bem cuidada </p>`
        about14.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 9,5mm`

        BladeName.innerHTML = 'Lamina 4F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste+Higienica'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM4f.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM4.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM4F.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM4.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM4fc.png";
        })

    } if (imgsrc.id === 'DHBlade3') {

        about13.innerHTML = `<b class="bBlack">Uso Comum:</b> Boa para reduzir o volume em pelagens mais finas,
         deixando uma aparência limpa e bem cuidada</p>`
        about14.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 6,4 mm`

        BladeName.innerHTML = 'Lamina 5'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste+Higienica'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM4fc.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM4f.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM4FC.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM4F.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM4.png";
        })

    } if (imgsrc.id === 'DHBlade4') {

        about13.innerHTML = `<b class="bBlack">Uso Comum:</b> Eficaz em pelagens mais densas,
         ajudando a reduzir o volume sem deixar um corte muito rente</p>`
        about14.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 3,2 mm`

        BladeName.innerHTML = 'Lamina 7F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste+Higienica'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM7.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM7.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM7F.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM7F.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM7fc.png";
        })

    } if (imgsrc.id === 'DHBlade5') {

        about13.innerHTML = `<b class="bBlack">Uso Comum:</b> Utilizada para cortes precisos e confortáveis ao redor do focinho e orelhas,
         e nas áreas da genital e abdominal,
         muito usada para garantir um corte curto e higiênico nessas áreas sensíveis</p>`
        about14.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 1,6 mm`

        BladeName.innerHTML = 'Lamina 10'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste+Higienica'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM10.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM10.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM10.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM10.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM10.png";
        })

    } if (imgsrc.id === 'DHBlade6') {

        about13.innerHTML = `<b class="bBlack">Uso Comum:</b> Usada para tosar pelagens que requerem um comprimento médio,
         preservando a textura e aparência natural do pelo</p>`
        about14.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 6,30 mm`

        BladeName.innerHTML = 'Lamina 5F'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste+Higienica'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM5.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM5.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM5F.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM5.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM5fc.png";
        })

    } if (imgsrc.id === 'DHBlade7') {

        about13.innerHTML = `<b class="bBlack">Uso Comum:</b> Eficaz para dar um acabamento limpo em pelagens longas,
         evitando embaraços e nós</p>`
        about14.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 0,8 mm`

        BladeName.innerHTML = 'Lamina 5/8'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste+Higienica'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM5.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM5.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM5F.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM5.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM5fc.png";
        })

    } if (imgsrc.id === 'DHBlade8') {

        about13.innerHTML = `<b class="bBlack">Uso Comum:</b> Boa para um desbaste inicial antes de aplicar lâminas mais curtas,
         garantindo um corte gradual e controlado</p>`
        about14.innerHTML = `<b class="bBlack">Altura do Corte:</b> corta o pêlo a uma altura
                            aproximadamente 16,00 mm`

        BladeName.innerHTML = 'Lamina 3/4'
        BladePrice.innerHTML = 'R$ 230 - 280'

        LinkML.href = 'https://www.novoexemplo.com'
        LinkWA.href = 'https://api.whatsapp.com/send/?phone=558396166367&text=Oi%2C+estou+interessado+em+uma+de+suas+lamina+de+Desbaste+Higienica'

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM3.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM34.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM3F.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM3.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM34.png";
        })

    }
}


/* Fechar Janela*/

async function CloseSelection(event) {
    stopChangeImages()
    SeleBlade1.style.bottom = '-800px'
    SeleBlade2.style.bottom = '-800px'
    SeleBlade3.style.bottom = '-800px'
    SeleBlade4.style.bottom = '-800px'
    SeleBlade5.style.bottom = '-800px'


    await new Promise(resolve => setTimeout(resolve, 300))
    Blur.style.opacity = '0'
    await new Promise(resolve => setTimeout(resolve, 700))
    Blur.style.display = 'none'
}

/* checarId */

function checkID(event) {
    const bladeContainer = event.currentTarget
    const bladeId = bladeContainer.id
    return bladeId
}

/* Abrir Janela */

async function OpenSele(event) {
    ChangeImages()

    Blur.style.display = 'flex'
    Blur.style.opacity = '2'

    const bladeId = checkID(event)
    if (bladeId === 'Acabamento') {
        console.log("Acabamento")
        
        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM10.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM10.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM10.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM10.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM10.png";
        })

        await new Promise(resolve => setTimeout(resolve, 200))
        SeleBlade1.style.bottom = '0px'

    } if (bladeId === 'Ajuste') {
        console.log("Ajuste")

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM10.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM10.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM10.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM10.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM10.png";
        })

        await new Promise(resolve => setTimeout(resolve, 200))
        SeleBlade2.style.bottom = '0px'

    } if (bladeId === 'Desbaste') {
        console.log("Desbaste")

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM5.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM5.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM5F.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM5.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM5fc.png";
        })    

        await new Promise(resolve => setTimeout(resolve, 200))
        SeleBlade3.style.bottom = '0px'

    } if (bladeId === 'AcabamentoHigienica') {
        console.log("AcabamentoHigienica")

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM10.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM10.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM10.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM10.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM10.png";
        })    

        await new Promise(resolve => setTimeout(resolve, 200))
        SeleBlade4.style.bottom = '0px'

    } if (bladeId === 'DesbasteHigienica') {
        console.log("DesbasteHigienica")

        image1.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Wahl/WLM34.png";
        })
        image2.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Andis/LM3.png";
        })
        image3.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Oster/OLM3.png";
        })
        image4.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Precision/PLM34.png";
        })
        image5.forEach(imagem => {
            imagem.src = "./images/Laminas&Tesouras/Propetz/PTLM3F.png";
        })
    
        await new Promise(resolve => setTimeout(resolve, 200))
        SeleBlade5.style.bottom = '0px'

    }

}




