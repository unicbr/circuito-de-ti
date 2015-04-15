module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Circuito de TI",
      description: "O Circuito de TI tem o objetivo de abordar sobre tecnologia, cada ano busca-se uma área para que as palestras sejam realizadas dentro desse contexto, o Circuito de TI nasceu da carência de eventos relacionados a área de TI na região, onde o foco é a troca de experiência entre os acadêmicos e os profissionais que já atuam indiretamente ou diretamente no seguimento de TI, o evento tem como participantes os acadêmicos do curso CST. em desenvolvimento de software da instituição UNIC Tangará da Serra, mas não se restringe apenas aos acadêmicos do curso, o evento se estende para os demais cursos e Instituições assim como para as empresas e comércios da cidade e região.",
      date: "06 a 08 de Maio",
      // If your event is free, just comment this line
      price: "R$ 45 + taxas",
      venue: "UNIC Tangará da Serra",
      address: "Av. Virgilio Favetti, 1200, Vila Alta",
      city: "Tangará da Serra",
      state: "MT"
    },

    // Facebook buttons
    // If you don't want this, just remove the fbButtons property
    fbButtons: {
        href: "https://www.facebook.com/CircuitoDeTi",
        layout: "button_count",
        action: "like",
        showFaces: true,
        share: true
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscrever-se",
        link: "http://www.eventick.com.br/circuito-de-ti"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/unicbr/circuito-de-ti"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://unicbr.github.io/circuito-de-ti",
      googleanalytics: "UA-61773986-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O Evento",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocinadores",
      partners: "Apoiadores",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Diego Aranha",
        photo: "themes/yellow-swan/img/speaker-diego-aranha.jpg",
        bio: "É professor da Universidade Estadual de Campinas (Unicamp). Coordenou a primeira equipe de investigadores independentes capaz de detectar e explorar vulnerabilidades no software da urna eletrônica em testes controlados organizados pelo Tribunal Superior Eleitoral. Tem experiência na área de Criptografia e Segurança Computacional, com ênfase em implementação eficiente de algoritmos criptográficos e projeto de primitivas criptográficas para fornecimento de anonimato computacional. É Bacharel em Ciência da Computação pela Universidade de Brasília (2005), Mestre (2007) e Doutor (2011) em Ciência da Computação pela Universidade Estadual de Campinas. Foi doutorando visitante por 1 ano na Universidade de Waterloo, Canadá, e Professor Adjunto por pouco mais de 2 anos no Departamento de Ciência da Computação da Universidade de Brasília.",
        company: "UNICAMP",
        link: {
          href: "https://twitter.com/dfaranha",
          text: "@dfaranha"
        },
        presentation: {
          title: "Software Livre e Segurança Eleitoral",
          description: "O sistema de votação eletrônica utilizado no Brasil é dos mais opacos no mundo, tanto do ponto de vista do processo de desenvolvimento empregado quanto da possibilidade de verificação independente de resultados pelos eleitores. Ainda assim, diversas vulnerabilidades puderam ser detectadas durante participação de equipe da UnB nos Testes Públicos de Segurança organizados pelo TSE, com impacto considerável no anonimato e destinação dos votos. Esta palestra tem como objetivo apresentar os resultados preliminares do projeto Você Fiscal, que objetiva aprimorar a segurança do processo eleitoral a partir de intervenção simples em um dos poucos pontos de transparência disponíveis: a transmissão e totalização dos votos.",
          time: "06/04 às 19h30",
          //slide: ""
        }
      },
      {
        name: "Dhyego Fernando",
        photo: "themes/yellow-swan/img/speaker-dhyego-fernando.jpg",
        bio: "Atualmente com 18 anos, é desenvolvedor web front e back-end apaixonado no que faz e fissurado em solucionar problemas com boas práticas e um bom código. Sempre buscou enfrentar novos desafios, conhecer e utilizar novas tecnologias pois acredita que um bom desenvolvedor não deve ser rotulado.",
        company: "WebFlavia",
        link: {
          href: "https://github.com/dhyegofernando",
          text: "@dhyegofernando"
        },
        presentation: {
          title: "Introdução ao AngularJS",
          description: "",
          time: "07/05 às 19h30",
          //slide: ""
        }
      },
      {
        name: "Alvaro Viebranz",
        photo: "themes/yellow-swan/img/speaker-alvaro-viebranz.jpg",
        bio: "É Analista de TI na Sefaz-MT e CTO da startup cuiabana Procurix. Graduado pela UFMT em Ciência da Computação, com estudos na área de banco de dados NoSQL e buscas textuais. Curte muito desenvolvimento web, com foco maior no back-end, mas é entusiasta com front-end em AngularJS. É apaixonado por desenvolvimento mobile utilizando tanto tecnologias hibridas quanto nativas.  Arduinista nas horas vagas.",
        company: "Secretaria de Fazenda do Estado de Mato Grosso",
        link: {
          href: "http://www.twitter.com/alvinhuuu",
          text: "@alvinhuu"
        },
        presentation: {
          title: "Construindo Aplicativos Híbridos com Ionic Framework",
          description: "Na tentativa de padronizar uma forma de se desenvolver aplicativo híbridos, nasceu o Ionic Framework, focado em padrões modernos (HTML5, CSS e JS), performance e facilidade de uso.",
          time: "08/05 às 19h",
          //slide: ""
        }
      },
      
      {
        name: "Silvair Fernandes Frazão",
        photo: "themes/yellow-swan/img/speaker-silvair-frazao.jpg",
        bio: "Graduado em Ciência da Computação na UNEMAT e pós graduado em Desenvolvimento de jogos Digitais pela PUCRS, trabalhou como Animador de Personagens na Aquiris Game Studio (Porto Alegre-RS), foi Professor no curso de jogos digitais da FEEVALE (Novo Hamburgo-RS), atualmente trabalha como programador e artista 3D na criação de jogos digitais.",
        company: "FIEMT",
        link: {
          href: "http://www.twitter.com/silvair_frazao",
          text: "@silvair_frazao"
        },
        presentation: {
          title: "Desenvolvimento de Jogos utilizando Unity 3D",
          description: "Uma breve apresentação sobre a ferramenta, explicando os principais recursos utilizados no desenvolvimento de jogos digitais, vantagens e desvantagens de utilizar a Unity, ferramentas de apoio, profissionais envolvidos, fluxo de trabalho, asset store, etc.",
          time: "08/05 às 20h30",
          //slide: ""
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Omega Sistemas",
        logo: "themes/yellow-swan/img/sponsor-omega-sistemas.jpg",
        url: "http://omegasistemas.net.br/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "TDS",
        logo: "themes/yellow-swan/img/partner-tds-tecnologia.jpg",
        url: "http://tdstecnologia.com.br/"
      },
      {
        name: "Quality",
        logo: "themes/yellow-swan/img/partner-qualitysi.jpg",
        url: "http://www.qualitysi.com.br/"
      },
      {
        name: "WebFlavia",
        logo: "themes/yellow-swan/img/partner-web-flavia.jpg",
        url: "http://www.webflavia.com.br/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
