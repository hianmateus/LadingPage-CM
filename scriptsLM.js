
const BlurLaminas = document.querySelector('.BlurLaminas')
const TabelBlades = document.querySelector('.BladesTabel')

const divsTosa = document.querySelectorAll('.bladeContainer')
const TosaType = Array.from(divsTosa)

const Bladename = document.querySelector('.SLname')
const Bladeimg = document.querySelector('.BladeimgSelected')
const Bladeprice = document.querySelector('.SLprice')
const Bladeinfo1 = document.getElementById('info1')
const Bladeinfo2 = document.getElementById('info2')
const Bladeinfo3 = document.getElementById('info3')

const ListBlades = document.querySelector('.ListBlades')

const Laminas = [
    {
        Name: 'LÂMINA 3',
        src: './images/Laminas&Tesouras/Andis/LM3.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 13 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para reduzir o volume de pelo em todo o corpo, mantendo um comprimento razoável como em tosas de estilo que exigem um comprimento médio, como para algumas raças de cães de pelagem longa',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 4',
        src: './images/Laminas&Tesouras/Andis/LM4fc.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 9.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em cortes de estilo que requerem um comprimento médio, adequada para diversas raças de cães e tambem e ficaz em pelagens mais densas, ajudando a remover nós e embaraços',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 5',
        src: './images/Laminas&Tesouras/Andis/LM5fc.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 6 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para reduzir o volume em pelagens mais finas, deixando uma aparência limpa e bem cuidada e áreas que precisam de um corte mais curto',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 7',
        src: './images/Laminas&Tesouras/Andis/LM7fc.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 3.2 mm, mantendo um visual bem aparado',
        use: '<b class="bBlack">Uso recomendado:</b> Eficaz em pelagens mais densas, ajudando a reduzir o volume sem deixar um corte muito rente',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 10',
        src: './images/Laminas&Tesouras/Andis/LM10.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1,5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para garantir um corte curto e higiênico nessas áreas sensíveis, ao redor das patas, evitando acúmulo de sujeira e detritos e ao redor do focinho e orelhas',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'AHigiénica'
    },
    {
        Name: 'LÂMINA 15',
        src: './images/Laminas&Tesouras/Andis/LM15.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para cortes precisos em áreas sensíveis, como ao redor das patas, face, orelhas e áreas genitais, ajudando a remover nós e embaraços',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Ajuste'
    },
    {
        Name: 'LÂMINA 30',
        src: './images/Laminas&Tesouras/Andis/LM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,50 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corta o pêlo a uma altura aproximadamente 0,50 mmUsada para acabamentos extremamente precisos e em áreas muito sensíveis, como ao redor dos olhos, ouvidos e área genital',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 40',
        src: './images/Laminas&Tesouras/Andis/LM40.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em competições e exposições para obter um acabamento muito próximo da pele em determinadas raças e estilos de tosa',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Acabamento'
    },

    // OSter
    {
        Name: 'LÂMINA 3',
        src: './images/Laminas&Tesouras/Oster/OLM3.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 13 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para reduzir o volume de pelo em todo o corpo, mantendo um comprimento razoável como em tosas de estilo que exigem um comprimento médio, como para algumas raças de cães de pelagem longa',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 4',
        src: './images/Laminas&Tesouras/Oster/OLM4f.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 9.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em cortes de estilo que requerem um comprimento médio, adequada para diversas raças de cães e tambem e ficaz em pelagens mais densas, ajudando a remover nós e embaraços',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 5',
        src: './images/Laminas&Tesouras/Oster/OLM5.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 6 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para reduzir o volume em pelagens mais finas, deixando uma aparência limpa e bem cuidada e áreas que precisam de um corte mais curto',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 7',
        src: './images/Laminas&Tesouras/Oster/OLM7.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 3.2 mm, mantendo um visual bem aparado',
        use: '<b class="bBlack">Uso recomendado:</b> Eficaz em pelagens mais densas, ajudando a reduzir o volume sem deixar um corte muito rente',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 10',
        src: './images/Laminas&Tesouras/Oster/OLM10.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1,5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para garantir um corte curto e higiênico nessas áreas sensíveis, ao redor das patas, evitando acúmulo de sujeira e detritos e ao redor do focinho e orelhas',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'AHigiénica'
    },
    {
        Name: 'LÂMINA 15',
        src: './images/Laminas&Tesouras/Oster/OLM15.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para cortes precisos em áreas sensíveis, como ao redor das patas, face, orelhas e áreas genitais, ajudando a remover nós e embaraços',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Ajuste'
    },
    {
        Name: 'LÂMINA 30',
        src: './images/Laminas&Tesouras/Oster/OLM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,50 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para acabamentos extremamente precisos e em áreas muito sensíveis, como ao redor dos olhos, ouvidos e área genital',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 40',
        src: './images/Laminas&Tesouras/Oster/OLM40.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em competições e exposições para obter um acabamento muito próximo da pele em determinadas raças e estilos de tosa',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 50',
        src: './images/Laminas&Tesouras/Oster/OLM50.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para remover pelo em áreas muito pequenas e específicas, garantindo máxima exposição da pele',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 7/8',
        src: './images/Laminas&Tesouras/Oster/OLM78.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,8 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Eficaz para trabalhar com pelagens finas, evitando a irritação da pele e garantindo um corte uniforme',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'DHigiénica'
    },

    //Precision
    {
        Name: 'LÂMINA 4',
        src: './images/Laminas&Tesouras/Precision/PLM4FC.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 9,5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Ideal para reduzir o volume de pelo em todo o corpo, eficaz em pelagens mais densas, ajudando a remover nós e embaraços',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 5',
        src: './images/Laminas&Tesouras/Precision/PLM5.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 6.30 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Boa para reduzir o volume em pelagens mais finas, deixando uma aparência limpa e bem cuidada',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 7',
        src: './images/Laminas&Tesouras/Precision/PLM7FC.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 3.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Eficaz para trabalhar com pelagens finas, evitando a irritação da pele e garantindo um corte uniforme',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 10',
        src: './images/Laminas&Tesouras/Precision/PLM10.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para garantir um corte curto e higiênico nessas áreas sensíveis, tambem para cortes precisos e confortáveis ao redor do focinho e orelhas',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'AHigiénica'
    },
    {
        Name: 'LÂMINA 15',
        src: './images/Laminas&Tesouras/Precision/PLM15.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para cortes precisos em áreas sensíveis, como ao redor das patas, face, orelhas e áreas genitais, ajudando a remover nós e embaraços',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Ajuste'
    },
    {
        Name: 'LÂMINA 30',
        src: './images/Laminas&Tesouras/Precision/PLM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,50 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para acabamentos extremamente precisos e em áreas muito sensíveis, como ao redor dos olhos, ouvidos e área genital',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 3/4',
        src: './images/Laminas&Tesouras/Precision/PLM34.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 16,00 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Boa para um desbaste inicial antes de aplicar lâminas mais curtas, garantindo um corte gradual e controlado',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'DHigiénica'
    },
    {
        Name: 'LÂMINA 40',
        src: './images/Laminas&Tesouras/Precision/PLM40.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em competições e exposições para obter um acabamento muito próximo da pele em determinadas raças e estilos de tosa',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 5/8',
        src: './images/Laminas&Tesouras/Precision/PLM58.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,8 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Eficaz para dar um acabamento limpo em pelagens longas, evitando embaraços e nós',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA A8S',
        src: './images/Laminas&Tesouras/Precision/PLMA8S.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0.8 - 1.1 - 1.4 - 1.7 - 2.0 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Ideal para cortes finos e detalhados, especialmente em áreas sensíveis, como ao redor dos olhos e orelhas',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa de mesmo encaixe, além da padrão Precision, as fabricadas pela Propetz',
        Category: 'DHigiénica'
    },

    //Propetz
    {
        Name: 'LÂMINA Propetz30',
        src: './images/Laminas&Tesouras/Propetz/PRTLM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 2,0 mm a 0,5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Utilizada para cortes precisos em áreas como focinho e orelhas, proporcionando um ajuste cuidadoso',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel apenas com máquinas de tosa padrão com encaixe fabricadas pela Propetz',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA Pro6',
        src: './images/Laminas&Tesouras/Propetz/PRTLMPro6.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Ideal para cortes de pelagem em todo o corpo, mantendo um comprimento médio e proporcionando um acabamento uniforme',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa de mesmo encaixe, além da padrão Propetz, as fabricadas pela Precision',
        Category: ''
    },
    {
        Name: 'LÂMINA 3',
        src: './images/Laminas&Tesouras/Propetz/PTLM3F.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 13 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para reduzir o volume de pelo em todo o corpo, mantendo um comprimento razoável como em tosas de estilo que exigem um comprimento médio, como para algumas raças de cães de pelagem longa',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 4',
        src: './images/Laminas&Tesouras/Propetz/PTLM4F.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 9.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em cortes de estilo que requerem um comprimento médio, adequada para diversas raças de cães e tambem e ficaz em pelagens mais densas, ajudando a remover nós e embaraços',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste' 
    },
    {
        Name: 'LÂMINA 5',
        src: './images/Laminas&Tesouras/Propetz/PTLM5F.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 6 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para reduzir o volume em pelagens mais finas, deixando uma aparência limpa e bem cuidada e áreas que precisam de um corte mais curto',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 7',
        src: './images/Laminas&Tesouras/Propetz/PTLM7F.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 3.2 mm, mantendo um visual bem aparado',
        use: '<b class="bBlack">Uso recomendado:</b> Eficaz em pelagens mais densas, ajudando a reduzir o volume sem deixar um corte muito rente',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 10',
        src: './images/Laminas&Tesouras/Propetz/PTLM10.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1,6 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para garantir um corte curto e higiênico nessas áreas sensíveis, e tambem para cortes precisos e confortáveis ao redor do focinho e orelhas',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'AHigiénica'
    },
    {
        Name: 'LÂMINA 15',
        src: './images/Laminas&Tesouras/Propetz/PTLM15.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Ideal para cortes precisos em áreas sensíveis tambem para detalhes e acabamentos que requerem um corte mais curto e preciso',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Ajuste'
    },
    {
        Name: 'LÂMINA 30',
        src: './images/Laminas&Tesouras/Propetz/PTLM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em competições e exposições para obter um acabamento muito próximo da pele em determinadas raças e estilos de tos, ajudando a remover nós e embaraços',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel apenas com máquinas de tosa padrão com encaixe fabricadas pela Propetz',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 40',
        src: './images/Laminas&Tesouras/Propetz/PTLM40.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em competições para obter um corte muito rente e preciso em determinadas partes do corpo de raças específicas',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel apenas com máquinas de tosa padrão com encaixe fabricadas pela Propetz',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 50',
        src: './images/Laminas&Tesouras/Propetz/PTLM50.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para remover pelo em áreas muito pequenas e específicas, garantindo máxima exposição da pele',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa de mesmo encaixe, além da padrão Propetz, as fabricadas pela Precision',
        Category: 'Acabamento'
    },

    // WAhl
    {
        Name: 'LÂMINA 4',
        src: './images/Laminas&Tesouras/Wahl/WLM4.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 9.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em cortes de estilo que requerem um comprimento médio, adequada para diversas raças de cães e tambem e ficaz em pelagens mais densas, ajudando a remover nós e embaraços',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 5',
        src: './images/Laminas&Tesouras/Wahl/WLM5.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 6 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para reduzir o volume em pelagens mais finas, deixando uma aparência limpa e bem cuidada e áreas que precisam de um corte mais curto',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 7',
        src: './images/Laminas&Tesouras/Wahl/WLM7F.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 3.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Eficaz em pelagens mais densas, ajudando a reduzir o volume sem deixar um corte muito rente',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 10',
        src: './images/Laminas&Tesouras/Wahl/WLM10.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada para remover pelo em áreas muito pequenas e específicas, garantindo máxima exposição da pele',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'AHigiénica'
    },
    {
        Name: 'LÂMINA 15',
        src: './images/Laminas&Tesouras/Wahl/WLM15.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Ideal para cortes precisos em áreas sensíveis tambem para detalhes e acabamentos que requerem um corte mais curto e preciso',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Ajuste'
    },
    {
        Name: 'LÂMINA 30',
        src: './images/Laminas&Tesouras/Wahl/WLM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em competições e exposições para obter um acabamento muito próximo da pele em determinadas raças e estilos de tos, ajudando a remover nós e embaraços',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 3/4',
        src: './images/Laminas&Tesouras/Wahl/WLM34.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 16,00 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Boa para um desbaste inicial antes de aplicar lâminas mais curtas, garantindo um corte gradual e controlado',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'DHigiénica'
    },
    {
        Name: 'LÂMINA 40',
        src: './images/Laminas&Tesouras/Wahl/WLM40.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em competições e exposições para obter um acabamento muito próximo da pele em determinadas raças e estilos de tos, ajudando a remover nós e embaraços',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel com máquinas de tosa padrão, como as fabricadas pela Andis, Oster, Wahl, e outras marcas populares',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA Bravura',
        src: './images/Laminas&Tesouras/Wahl/WLMBravura.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Ajustável entre 0.7 mm a 3 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Utilizada como um passo inicial antes de aplicar lâminas mais curtas, permitindo um desbaste gradual',
        Comp: '<b class="bBlack">Durabilidade:</b> Compativel apenas com máquinas de tosa Bravura padrão fabricadas pela Wahl',
        Category: 'Ajuste'
    },

]

// Mostrar e Selecionar Laminas

let mylist = ''
let filteredLaminas = []

function ShowProdutcs() {
    filteredLaminas.forEach( (item, index) => {

        mylist = mylist + `
                 <div class="BladeProduct" onclick="ShowBlade(${index})">
                        <div class="BladeimgDiv">
                            <img class="Bladeimg" src=${item.src} alt="Blade-image-png">
                        </div>

                        <div class="BladeNP">
                            <div class="BKbladenick">
                                <p class="Bladenick">${item.Name}</p>
                            </div>

                            <p class="BladePrice">${item.Price}</p>
                        </div>
                    </div>
        `
    })

    ListBlades.innerHTML = mylist

}

function ShowBlade(index) {

    const Blade = filteredLaminas[index]
    
    Bladename.innerHTML = Blade.Name
    Bladeimg.src = Blade.src
    Bladeprice.innerHTML = Blade.Price
    Bladeinfo1.innerHTML = Blade.cut
    Bladeinfo2.innerHTML = Blade.use
    Bladeinfo3.innerHTML = Blade.Comp

}


// Abrir e Fechar Seleçao de laminas

async function hiddenBlades() {
    TabelBlades.style.bottom = '-700px'
    await new Promise(resolve => setTimeout(resolve, 100))
    TabelBlades.style.opacity = '0'
    mylist = ''
    filteredLaminas = []

    await new Promise(resolve => setTimeout(resolve, 400))
    BlurLaminas.style.opacity = '0'
    await new Promise(resolve => setTimeout(resolve, 400))
    BlurLaminas.style.display = 'none'

}

TosaType.forEach((div, index) => {
    div.addEventListener('click', async function () {
        if (index === 0) {
            console.log('Acabamento')
            filteredLaminas = Laminas.filter(lamina => lamina.Category === 'Acabamento')
            BlurLaminas.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 200))
            BlurLaminas.style.opacity = '2'
            ShowProdutcs()

            await new Promise(resolve => setTimeout(resolve, 400))
            TabelBlades.style.opacity = '2'
            TabelBlades.style.bottom = '-42px'

        } if (index === 1) {
            console.log('Desbaste')
            filteredLaminas = Laminas.filter(lamina => lamina.Category === 'Desbaste')
            BlurLaminas.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 200))
            BlurLaminas.style.opacity = '2'
            ShowProdutcs()

            await new Promise(resolve => setTimeout(resolve, 400))
            TabelBlades.style.opacity = '2'
            TabelBlades.style.bottom = '-42px'

        } if (index === 2) {
            console.log('Ajuste')
            filteredLaminas = Laminas.filter(lamina => lamina.Category === 'Ajuste')
            BlurLaminas.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 200))
            BlurLaminas.style.opacity = '2'
            ShowProdutcs()

            await new Promise(resolve => setTimeout(resolve, 400))
            TabelBlades.style.opacity = '2'
            TabelBlades.style.bottom = '-42px'

        } if (index === 3) {
            console.log('AcabementoHigienica')
            filteredLaminas = Laminas.filter(lamina => lamina.Category === 'AHigiénica')
            BlurLaminas.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 200))
            BlurLaminas.style.opacity = '2'
            ShowProdutcs()

            await new Promise(resolve => setTimeout(resolve, 400))
            TabelBlades.style.opacity = '2'
            TabelBlades.style.bottom = '-42px'

        } if (index === 4) {
            console.log('DesbasteHigienica')
            filteredLaminas = Laminas.filter(lamina => lamina.Category === 'DHigiénica')
            BlurLaminas.style.display = 'flex'
            await new Promise(resolve => setTimeout(resolve, 200))
            BlurLaminas.style.opacity = '2'
            ShowProdutcs()

            await new Promise(resolve => setTimeout(resolve, 400))
            TabelBlades.style.opacity = '2'
            TabelBlades.style.bottom = '-42px'

        }
    })
})
