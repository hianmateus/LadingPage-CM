
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
        use: '<b class="bBlack">Uso recomendado:</b> Desbaste de pelos grossos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 4',
        src: './images/Laminas&Tesouras/Andis/LM4fc.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 9.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte médio para pelos de densidade moderada',
        Comp: '<b class="bBlack">Durabilidade:</b> Durável, resistente à corrosão',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 5',
        src: './images/Laminas&Tesouras/Andis/LM5fc.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 6 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes curtos para áreas densas',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta, com bom desempenho em uso contínuo',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 7',
        src: './images/Laminas&Tesouras/Andis/LM7fc.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 3.2 mm, mantendo um visual bem aparado',
        use: '<b class="bBlack">Uso recomendado:</b> Desbaste em regiões de pelos grossos e espessos',
        Comp: '<b class="bBlack">Durabilidade:</b> Resistente e durável, com ótima performance',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 10',
        src: './images/Laminas&Tesouras/Andis/LM10.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1,5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Finalizações de corte e áreas de detalhes',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta resistência ao desgaste',
        Category: 'AHigiénica'
    },
    {
        Name: 'LÂMINA 15',
        src: './images/Laminas&Tesouras/Andis/LM15.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte detalhado e trabalhos de precisão',
        Comp: '<b class="bBlack">Durabilidade:</b> Longa durabilidade com baixa manutenção',
        Category: 'Ajuste'
    },
    {
        Name: 'LÂMINA 30',
        src: './images/Laminas&Tesouras/Andis/LM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,50 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Acabamentos e cortes curtos',
        Comp: '<b class="bBlack">Durabilidade:</b> Altamente durável',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 40',
        src: './images/Laminas&Tesouras/Andis/LM40.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Uso cirúrgico e tosa muito curta',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta longevidade, resistente a ferrugem',
        Category: 'Acabamento'
    },

    // OSter
    {
        Name: 'LÂMINA 3',
        src: './images/Laminas&Tesouras/Oster/OLM3.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 13 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Desbaste de pelos densos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 4',
        src: './images/Laminas&Tesouras/Oster/OLM4f.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 9.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes intermediários',
        Comp: '<b class="bBlack">Durabilidade:</b> Resistente e de longa vida útil',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 5',
        src: './images/Laminas&Tesouras/Oster/OLM5.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 6 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte de pelos grossos e densos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade e resistência',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 7',
        src: './images/Laminas&Tesouras/Oster/OLM7.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 3.2 mm, mantendo um visual bem aparado',
        use: '<b class="bBlack">Uso recomendado:</b> Tosas em áreas espessas',
        Comp: '<b class="bBlack">Durabilidade:</b> Durável, resistente a ferrugem',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 10',
        src: './images/Laminas&Tesouras/Oster/OLM10.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1,5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes detalhados e acabamentos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta resistência ao desgaste',
        Category: 'AHigiénica'
    },
    {
        Name: 'LÂMINA 15',
        src: './images/Laminas&Tesouras/Oster/OLM15.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte preciso e tosa de detalhes',
        Comp: '<b class="bBlack">Durabilidade:</b> Lâmina durável e de baixa manutenção',
        Category: 'Ajuste'
    },
    {
        Name: 'LÂMINA 30',
        src: './images/Laminas&Tesouras/Oster/OLM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,50 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes muito curtos e acabamentos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade com resistência ao desgaste',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 40',
        src: './images/Laminas&Tesouras/Oster/OLM40.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte cirúrgico e tosas muito curtas',
        Comp: '<b class="bBlack">Durabilidade:</b> Resistente à corrosão, durável',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 50',
        src: './images/Laminas&Tesouras/Oster/OLM50.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte ultra curto, ideal para detalhes minuciosos',
        Comp: '<b class="bBlack">Durabilidade:</b> Excelente resistência e durabilidade',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 7/8',
        src: './images/Laminas&Tesouras/Oster/OLM78.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,8 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Desbaste em pelos longos e densos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade, especialmente em pelos grossos',
        Category: 'DHigiénica'
    },

    //Precision
    {
        Name: 'LÂMINA 4',
        src: './images/Laminas&Tesouras/Precision/PLM4FC.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 9,5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes intermediários em áreas medianas',
        Comp: '<b class="bBlack">Durabilidade:</b> Resistente e durável',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 5',
        src: './images/Laminas&Tesouras/Precision/PLM5.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 6.30 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes curtos em regiões densas',
        Comp: '<b class="bBlack">Durabilidade:</b> Durável e resistente a desgaste',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 7',
        src: './images/Laminas&Tesouras/Precision/PLM7FC.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 3.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes em áreas espessas e de difícil acesso',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade e longa vida útil',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 10',
        src: './images/Laminas&Tesouras/Precision/PLM10.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes detalhados e precisos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade com baixa manutenção',
        Category: 'AHigiénica'
    },
    {
        Name: 'LÂMINA 15',
        src: './images/Laminas&Tesouras/Precision/PLM15.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Acabamentos detalhados e cortes curtos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta resistência ao desgaste',
        Category: 'Ajuste'
    },
    {
        Name: 'LÂMINA 30',
        src: './images/Laminas&Tesouras/Precision/PLM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,50 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes muito curtos e acabamentos finos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade e resistência à corrosão',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 3/4',
        src: './images/Laminas&Tesouras/Precision/PLM34.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 16,00 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte de pelos longos',
        Comp: '<b class="bBlack">Durabilidade:</b> Resistente, ideal para pelos densos',
        Category: 'DHigiénica'
    },
    {
        Name: 'LÂMINA 40',
        src: './images/Laminas&Tesouras/Precision/PLM40.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Uso cirúrgico e cortes precisos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta resistência à ferrugem',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 5/8',
        src: './images/Laminas&Tesouras/Precision/PLM58.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,8 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Desbaste em pelos longos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta resistência em uso prolongado',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA A8S',
        src: './images/Laminas&Tesouras/Precision/PLMA8S.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0.8 - 1.1 - 1.4 - 1.7 - 2.0 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Tosas delicadas e detalhadas',
        Comp: '<b class="bBlack">Durabilidade:</b> Resistente à corrosão, longa vida útil',
        Category: 'DHigiénica'
    },

    //Propetz
    {
        Name: 'LÂMINA Propetz30',
        src: './images/Laminas&Tesouras/Propetz/PRTLM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 2,0 mm a 0,5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Acabamentos e cortes curtos',
        Comp: '<b class="bBlack">Durabilidade:</b> Resistente à ferrugem, de longa durabilidade',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA Pro6',
        src: './images/Laminas&Tesouras/Propetz/PRTLMPro6.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes de densidade média',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade e resistência ao desgaste',
        Category: 'DHigiénica'
    },
    {
        Name: 'LÂMINA 3',
        src: './images/Laminas&Tesouras/Propetz/PTLM3F.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 13 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Desbaste de pelos grossos',
        Comp: '<b class="bBlack">Durabilidade:</b> Resistente e durável',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 4',
        src: './images/Laminas&Tesouras/Propetz/PTLM4F.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 9.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte intermediário',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta resistência ao uso contínuo',
        Category: 'Desbaste' 
    },
    {
        Name: 'LÂMINA 5',
        src: './images/Laminas&Tesouras/Propetz/PTLM5F.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 6 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte em áreas densas',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade, resistente à corrosão',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 7',
        src: './images/Laminas&Tesouras/Propetz/PTLM7F.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 3.2 mm, mantendo um visual bem aparado',
        use: '<b class="bBlack">Uso recomendado:</b> Desbaste em áreas espessas',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta resistência e durabilidade',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 10',
        src: './images/Laminas&Tesouras/Propetz/PTLM10.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1,6 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Acabamentos e detalhes',
        Comp: '<b class="bBlack">Durabilidade:</b> Resistente e de longa vida útil',
        Category: 'AHigiénica'
    },
    {
        Name: 'LÂMINA 15',
        src: './images/Laminas&Tesouras/Propetz/PTLM15.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes precisos e finalizações',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta resistência ao desgaste',
        Category: 'Ajuste'
    },
    {
        Name: 'LÂMINA 30',
        src: './images/Laminas&Tesouras/Propetz/PTLM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte curto e acabamento detalhado',
        Comp: '<b class="bBlack">Durabilidade:</b> Durável, resistente à corrosão',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 40',
        src: './images/Laminas&Tesouras/Propetz/PTLM40.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte ultra curto para detalhes precisos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta resistência à ferrugem',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 50',
        src: './images/Laminas&Tesouras/Propetz/PTLM50.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Uso cirúrgico e cortes detalhados',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta longevidade, resistente à ferrugem',
        Category: 'Acabamento'
    },

    // WAhl
    {
        Name: 'LÂMINA 4',
        src: './images/Laminas&Tesouras/Wahl/WLM4.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 9.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes intermediários',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade e resistência ao desgaste',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 5',
        src: './images/Laminas&Tesouras/Wahl/WLM5.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 6 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes curtos em pelos densos',
        Comp: '<b class="bBlack">Durabilidade:</b> Resistente à corrosão',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 7',
        src: './images/Laminas&Tesouras/Wahl/WLM7F.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 3.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Desbaste de pelos espessos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade em uso contínuo',
        Category: 'Desbaste'
    },
    {
        Name: 'LÂMINA 10',
        src: './images/Laminas&Tesouras/Wahl/WLM10.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.5 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Excelente controle de calor',
        Comp: '<b class="bBlack">Durabilidade:</b> Longa vida útil, resistente ao desgaste',
        Category: 'AHigiénica'
    },
    {
        Name: 'LÂMINA 15',
        src: './images/Laminas&Tesouras/Wahl/WLM15.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 1.2 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte preciso e finalizações',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta resistência ao desgaste e corrosão',
        Category: 'Ajuste'
    },
    {
        Name: 'LÂMINA 30',
        src: './images/Laminas&Tesouras/Wahl/WLM30.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Usada em competições e acabamentos detalhados',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta durabilidade e resistência à corrosão',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA 3/4',
        src: './images/Laminas&Tesouras/Wahl/WLM34.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 16,00 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Corte de pelos longos',
        Comp: '<b class="bBlack">Durabilidade:</b> Resistente e durável, especialmente para pelos longos',
        Category: 'DHigiénica'
    },
    {
        Name: 'LÂMINA 40',
        src: './images/Laminas&Tesouras/Wahl/WLM40.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Corta o pêlo a uma altura aproximadamente 0,25 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Uso cirúrgico e cortes muito curtos',
        Comp: '<b class="bBlack">Durabilidade:</b> Alta resistência à corrosão e ferrugem',
        Category: 'Acabamento'
    },
    {
        Name: 'LÂMINA Bravura',
        src: './images/Laminas&Tesouras/Wahl/WLMBravura.png',
        Price: 'R$ 230 - 280',
        cut: '<b class="bBlack">Altura do Corte:</b> Ajustável entre 0.7 mm a 3 mm',
        use: '<b class="bBlack">Uso recomendado:</b> Cortes versáteis e ajustáveis',
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
            ShowBlade(index)

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
            ShowBlade(index)

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
            ShowBlade(index)

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
            ShowBlade(index)

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
            ShowBlade(index)

            await new Promise(resolve => setTimeout(resolve, 400))
            TabelBlades.style.opacity = '2'
            TabelBlades.style.bottom = '-42px'

        }
    })
})
