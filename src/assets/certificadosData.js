const certificados = [
  {
    id: 0,
    curso: 'MARATONA XAMARIN',
    imagem: 'static/certificados/xamarin-microsoft.jpg',
    dataCurso: 'Março de 2017',
    orgao: 'UXAliance'
  },
  {
    id: 1,
    curso: 'International Certification UX-PM level 1',
    imagem: 'static/certificados/certificado-ux-pm-1.PNG',
    dataCurso: 'Maio de 2018',
    orgao: 'UXAliance'
  },
  {
    id: 2,
    curso: 'ANGULAR 1: CRIE WEBAPPS PODEROSAS',
    imagem: 'static/certificados/angular-1-crie-webapps-poderosas.jpg',
    dataCurso: 'Agosto de 2016',
    orgao: 'Alura'
  },
  {
    id: 3,
    curso: 'ASP.NET MVC 5:O FRAMEWORK PRONTO PARA A WEB',
    imagem: 'static/certificados/asp-net-mvc-5.jpg',
    dataCurso: 'Junho de 2017',
    orgao: 'Alura'
  },
  {
    id: 4,
    curso: 'CODEIGNITER I: PROGRAMANDO ELEGANTEMENTE PARA WEB',
    imagem: 'static/certificados/codeiginiter-1.jpg',
    dataCurso: 'Junho de 2017',
    orgao: 'Alura'
  },
  {
    id: 5,
    curso: 'CODEIGNITER II: MAIS TÉCNICAS E BOAS PRÁTICAS',
    imagem: 'static/certificados/codeiginiter-2.jpg',
    dataCurso: 'Junho de 2018',
    orgao: 'Alura'
  },
  {
    id: 6,
    curso: 'C# I: FUNDAMENTOS DA LINGUAGEM',
    imagem: 'static/certificados/CSharp-1.jpg',
    dataCurso: 'Agosto de 2016',
    orgao: 'Alura'
  },
  {
    id: 7,
    curso: 'C# II: ORIENTAÇÃO A OBJETO',
    imagem: 'static/certificados/CSharp-1.jpg',
    dataCurso: 'Outubro de 2016',
    orgao: 'Alura'
  },
  {
    id: 8,
    curso: 'C# III: LIDANDO COM EXCEÇÕES',
    imagem: 'static/certificados/CSharp-1.jpg',
    dataCurso: 'Outubro de 2016',
    orgao: 'Alura'
  },
  {
    id: 9,
    curso: 'ELECTRON: APLICATIVOS DESKTOP COM TECNOLOGIAS WEB',
    imagem: 'static/certificados/electron.jpg',
    dataCurso: 'Agosto de 2017',
    orgao: 'Alura'
  },
  {
    id: 10,
    curso: 'ENTITY: BANCO DE DADOS DE FORMA EFICIENTE',
    imagem: 'static/certificados/entity-framework.jpg',
    dataCurso: 'Junho de 2017',
    orgao: 'Alura'
  },
  {
    id: 11,
    curso: 'FACEBOOK: CRIAÇÃO DE IMAGENS E ANÚNCIOS',
    imagem: 'static/certificados/facebook.jpg',
    dataCurso: 'Abril de 2017',
    orgao: 'Alura'
  },
  {
    id: 12,
    curso: 'HTML5 E CSS3 I',
    imagem: 'static/certificados/html5-css3-1.jpg',
    dataCurso: 'Setembro de 2017',
    orgao: 'Alura'
  },
  {
    id: 13,
    curso: 'HTTP: ENTENDENDO A WEB',
    imagem: 'static/certificados/http-1.jpg',
    dataCurso: 'Junho de 2017',
    orgao: 'Alura'
  },
  {
    id: 14,
    curso: 'JAVA I: PRIMEIROS PASSOS',
    imagem: 'static/certificados/java-1.jpg',
    dataCurso: 'Outubro de 2017',
    orgao: 'Alura'
  },
  {
    id: 15,
    curso: 'JAVASCRIPT',
    imagem: 'static/certificados/javascript-1.jpg',
    dataCurso: 'Maio de 2016',
    orgao: 'Alura'
  },
  {
    id: 16,
    curso: 'JQUERY',
    imagem: 'static/certificados/jquery-1.jpg',
    dataCurso: 'Maio de 2016',
    orgao: 'Alura'
  },
  {
    id: 17,
    curso: 'MARKETING DIGITAL',
    imagem: 'static/certificados/marketing-digital-1.jpg',
    dataCurso: 'Março de 2016',
    orgao: 'Alura'
  },
  {
    id: 18,
    curso: 'MYSQL I: INICIANDO SUAS CONSULTAS',
    imagem: 'static/certificados/mysql-1.jpg',
    dataCurso: 'Setembro de 2015',
    orgao: 'Alura'
  },
  {
    id: 19,
    curso: 'MYSQL II: CONSULTAS PODEROSAS',
    imagem: 'static/certificados/mysql-2.jpg',
    dataCurso: 'Maio de 2016',
    orgao: 'Alura'
  },
  {
    id: 20,
    curso: 'PERFORMANCE WEB I: OTIMIZANDO O FRONT-END',
    imagem: 'static/certificados/performance-web-1.jpg',
    dataCurso: 'Maio de 2018',
    orgao: 'Alura'
  },
  {
    id: 21,
    curso: 'PHP E MYSQL I: FUNDAMENTOS PARA CRIAR UM SISTEMA NA WEB',
    imagem: 'static/certificados/php-mysql-1.jpg',
    dataCurso: 'Novembro de 2015',
    orgao: 'Alura'
  },
  {
    id: 210,
    curso: 'PHP E MYSQL II: COOKIES, SESSÕES E MAIS RECURSOS',
    imagem: 'static/certificados/php-mysql-2.jpg',
    dataCurso: 'Junho de 2016',
    orgao: 'Alura'
  },
  {
    id: 22,
    curso: 'PHP: ORIENTAÇÃO A OBJETOS',
    imagem: 'static/certificados/php-orientacao-a-objeto.jpg',
    dataCurso: 'Junho de 2016',
    orgao: 'Alura'
  },
  {
    id: 23,
    curso: 'RUBY ON RAILS 4: DO ZERO À WEB',
    imagem: 'static/certificados/ruby-on-rails-4.jpg',
    dataCurso: 'Janeiro de 2016',
    orgao: 'Alura'
  },
  {
    id: 24,
    curso: 'UX: O QUE É EXPERIÊNCIA DE USUÁRIO',
    imagem: 'static/certificados/ux-1.jpg',
    dataCurso: 'Dezembro de 2017',
    orgao: 'Alura'
  },
  {
    id: 25,
    curso: 'UX USABILITY: FACILITE A VIDA DO SEU USUÁRIO MOBILE',
    imagem: 'static/certificados/ux-2.jpg',
    dataCurso: 'Maio de 2018',
    orgao: 'Alura'
  },
  {
    id: 26,
    curso: 'UX STRATEGY: DIVERGINDO E AFUNILANDO IDEIAS',
    imagem: 'static/certificados/ux-3.jpg',
    dataCurso: 'Abril de 2018',
    orgao: 'Alura'
  },
  {
    id: 27,
    curso: 'UX PRODUTO: MONITORE, MENSURE E TESTE',
    imagem: 'static/certificados/ux-4.jpg',
    dataCurso: 'Maio de 2018',
    orgao: 'Alura'
  },
  {
    id: 28,
    curso: 'VUE.JS PARTE 1',
    imagem: 'static/certificados/vue-1.jpg',
    dataCurso: 'Outubro de 2017',
    orgao: 'Alura'
  },
  {
    id: 29,
    curso: 'VUE.JS PARTE 2',
    imagem: 'static/certificados/vue-2.jpg',
    dataCurso: 'Outubro de 2017',
    orgao: 'Alura'
  }
]

export default certificados
