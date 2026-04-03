export const translations = {
  sr: {
    languageName: 'Srpski',
    routes: {
      home: '/',
      about: '/about',
      contact: '/contact',
      login: '/login',
      dashboard: '/dashboard',
    },
    header: {
      brandTagline: 'Two-dev studio za .NET, Azure i frontend',
      navAriaLabel: 'Glavna navigacija',
      nav: {
        home: 'Pocetna',
        about: 'O nama',
        contact: 'Kontakt',
        login: 'Prijava',
        dashboard: 'Dashboard',
        logout: 'Logout',
      },
      languageSwitcherLabel: 'Izbor jezika',
      languages: {
        sr: 'Srpski',
        en: 'Engleski',
      },
    },
      footer: {
        line1:
          'Remotum je osnova za moderan studio sajt i lako se dalje siri sa pravim kontakt podacima, referencama i prodajnim sekcijama.',
        line2:
          'Sledece mozemo dodati imena, slike, klijente, projekte i formu za upit.',
      },
    home: {
      eyebrow: '.NET, Azure i frontend studio',
      title: 'Gradimo moderne poslovne aplikacije kao mali tim od dva developera.',
      description:
        'Pomazemo klijentima da od ideje ili postojeceg proizvoda dodju do stabilnog softvera, jasne cloud arhitekture i frontend iskustva koje izgleda profesionalno i radi brzo.',
      primaryCta: 'Upoznajte nas bolje',
      secondaryCta: 'Pokrenimo razgovor',
      heroPanelAriaLabel: 'Pregled usluga',
      heroPanelLabel: 'Glavne oblasti',
      heroPanelItems: [
        '.NET backend',
        'Azure infrastruktura',
        'Web aplikacije i frontend',
        'Direktna saradnja sa klijentom',
      ],
      targetLabel: 'Za koga radimo',
      targetText:
        'Startupi, SaaS proizvodi, interni alati i firme koje zele pouzdan razvojni tim.',
      teamEyebrow: 'Ko stoji iza projekta',
      teamTitle:
        'Dvojica developera koja pokrivaju ceo put od API-ja do korisnickog interfejsa.',
      differentiatorsEyebrow: 'Zasto klijenti biraju mali tim',
      differentiatorsTitle:
        'Dobijate fokus, brzinu i direktan kontakt sa ljudima koji stvarno rade na proizvodu.',
      processEyebrow: 'Kako radimo',
      processTitle: 'Proces je jednostavan, pregledan i usmeren na rezultat.',
      trustStripAriaLabel: 'Klijentske vrednosti',
      ctaEyebrow: 'Imate ideju ili postojeci proizvod',
      ctaTitle:
        'Hajde da vidimo kako mozemo da pomognemo na backendu, cloudu ili frontendu.',
      ctaButton: 'Kontakt strana',
    },
    about: {
      eyebrow: 'O nama',
      title:
        'Ne predstavljamo agenciju sa velikim timom, vec malu partnersku ekipu koja licno vodi razvoj.',
      lead:
        'To je nasa prednost. Klijenti dobijaju direktnu komunikaciju, brze odluke i ljude koji istovremeno razumeju .NET, Azure i frontend deo proizvoda.',
      expectationsTitle: 'Sta klijenti mogu da ocekuju',
      expectationsText:
        'Jasno definisan opseg rada, redovne isporuke, tehnicke odluke koje imaju smisla i kod koji moze dalje da se odrzava i razvija.',
      projectsTitle: 'Kakve projekte volimo',
      projectsText:
        'SaaS proizvode, interne platforme, B2B alate, modernizaciju starih sistema i sve situacije gde backend, cloud i frontend moraju da rade kao jedna celina.',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Najbolji prvi korak je kratak razgovor o vasem proizvodu, timu i prioritetima.',
      lead:
        'Ovde kasnije mozemo da dodamo pravu formu, email adresu, Calendly link ili direktan poziv na konsultacije. Za sada je stranica postavljena kao jasan CTA ekran.',
      usefulTitle: 'Sta nam je korisno da znamo',
      usefulText:
        'Faza projekta, rokovi, postojeci stack, glavni poslovni cilj i gde vam trenutno treba najveca pomoc.',
      outcomeTitle: 'Sta vi dobijate',
      outcomeText:
        'Realan predlog saradnje, tehnicki smer i procenu kako da naredni koraci budu sto jednostavniji i isplativiji.',
    },
    login: {
      eyebrow: 'Prijava',
      title: 'Prijavite se i nastavite tamo gde ste stali.',
      lead:
        'Forma je spremna za povezivanje sa pravim API-jem, a za sada daje uredan ekran za prijavu sa jasnom strukturom i validnim input elementima.',
      benefitOneLabel: 'Brz pristup',
      benefitOneText: 'Udjite u dashboard, pregled zadataka i internu dokumentaciju.',
      benefitTwoLabel: 'Sigurno iskustvo',
      benefitTwoText: 'Kasnije ovde mozemo dodati reset lozinke, 2FA i social login.',
      formLabel: 'Dobrodosli nazad',
      formTitle: 'Unesite svoje podatke',
      emailLabel: 'Email adresa',
      emailPlaceholder: 'ime@firma.com',
      passwordLabel: 'Lozinka',
      passwordPlaceholder: 'Unesite lozinku',
      remember: 'Zapamti me',
      forgotPassword: 'Zaboravljena lozinka?',
      submit: 'Prijavi se',
      submitting: 'Prijavljivanje...',
      noAccount: 'Nemate nalog?',
      contactUs: 'Javite nam se',
      invalidForm: 'Proverite polja oznacena ispod forme.',
      requestFailed: 'Prijava nije uspela. Pokusajte ponovo.',
      validation: {
        emailRequired: 'Unesite email adresu.',
        emailInvalid: 'Email adresa nije u dobrom formatu.',
        passwordRequired: 'Unesite lozinku.',
        passwordShort: 'Lozinka mora da ima najmanje 8 karaktera.',
      },
    },
    dashboard: {
      eyebrow: 'Dashboard',
      title: 'Ovo je zasticena stranica dostupna samo prijavljenim korisnicima.',
      lead:
        'Ovde kasnije mozemo da prikazemo pregled naloga, internih zadataka, dokumenata ili bilo kog sadrzaja koji treba da bude iza prijave.',
      currentTitle: 'Sta sada radi',
      currentText:
        'Ako korisnik nije prijavljen, protected route ga salje na login stranicu. Ako jeste, moze normalno da otvori dashboard.',
      nextTitle: 'Sledeci korak',
      nextText:
        'Sledece ovde mozemo da povucemo korisnicke podatke sa API-ja i prikazemo pravi privatni sadrzaj.',
    },
    notFound: {
      eyebrow: '404',
      title: 'Ova ruta jos ne postoji.',
      lead: 'Nema problema, vracamo te na pocetnu da nastavimo odatle.',
      backHome: 'Nazad na pocetnu',
    },
    content: {
      services: [
        {
          title: '.NET razvoj',
          description:
            'Gradimo stabilne backend sisteme, API-je i poslovne aplikacije koje su spremne za rast.',
        },
        {
          title: 'Azure cloud',
          description:
            'Postavljamo infrastrukturu, deployment tokove i cloud arhitekturu koja je pregledna i odrziva.',
        },
        {
          title: 'Frontend iskustvo',
          description:
            'Pravimo brze i jasne interfejse u kojima korisnik brzo dolazi do onoga sto mu treba.',
        },
      ],
      differentiators: [
        'Kombinujemo backend, cloud i frontend u jednom malom i fokusiranom timu.',
        'Komuniciramo direktno, bez gubljenja vremena na vise slojeva izmedju klijenta i ljudi koji grade proizvod.',
        'Volimo projekte gde treba razumeti i biznis problem, ne samo napisati kod.',
      ],
      teamMembers: [
        {
          role: 'Programer 01',
          focus: '.NET i Azure',
          bio: 'Fokus na backend arhitekturi, cloud okruzenju i sistemima koji moraju da budu pouzdani pod opterecenjem.',
        },
        {
          role: 'Programer 02',
          focus: 'Frontend i full-stack isporuka',
          bio: 'Fokus na korisnickom iskustvu, interfejsima i povezivanju frontend i backend sloja u celinu koja ima smisla.',
        },
      ],
      processSteps: [
        {
          title: 'Upoznajemo proizvod',
          description:
            'Prvo razumemo ciljeve, korisnike i ogranicenja kako bismo predlozili pravi tehnicki pravac.',
        },
        {
          title: 'Definisemo plan',
          description:
            'Dogovaramo prioritete, opseg i ritam rada tako da klijent u svakom trenutku zna sta se radi.',
        },
        {
          title: 'Isporucujemo iterativno',
          description:
            'Radimo u kratkim ciklusima, pokazujemo napredak rano i brzo prilagodjavamo smer kada je potrebno.',
        },
      ],
      trustPoints: [
        'Mali tim, velika odgovornost.',
        'Direktna saradnja sa developerima.',
        'Spoj tehnickog kvaliteta i poslovnog razumevanja.',
      ],
      contactCards: [
        {
          title: 'Za nove projekte',
          text: 'Ako planirate novu aplikaciju, MVP ili modernizaciju postojeceg sistema, ovo je pravo mesto za prvi razgovor.',
        },
        {
          title: 'Za postojece proizvode',
          text: 'Ako vec imate proizvod, mozemo da uskocimo na backend, Azure ili frontend deo i ubrzamo isporuku.',
        },
      ],
    },
  },
  en: {
    languageName: 'English',
    routes: {
      home: '/',
      about: '/about',
      contact: '/contact',
      login: '/login',
      dashboard: '/dashboard',
    },
    header: {
      brandTagline: 'Two-dev studio for .NET, Azure, and frontend',
      navAriaLabel: 'Main navigation',
      nav: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        login: 'Login',
        dashboard: 'Dashboard',
        logout: 'Logout',
      },
      languageSwitcherLabel: 'Language switcher',
      languages: {
        sr: 'Serbian',
        en: 'English',
      },
    },
      footer: {
        line1:
          'Remotum is a strong foundation for a modern studio site and can easily grow with real contact details, references, and sales sections.',
        line2:
          'Next, we can add names, photos, clients, projects, and an inquiry form.',
      },
    home: {
      eyebrow: '.NET, Azure, and frontend studio',
      title: 'We build modern business applications as a focused team of two developers.',
      description:
        'We help clients move from an idea or an existing product to stable software, clear cloud architecture, and a frontend experience that feels professional and fast.',
      primaryCta: 'Get to know us better',
      secondaryCta: 'Start the conversation',
      heroPanelAriaLabel: 'Service overview',
      heroPanelLabel: 'Core areas',
      heroPanelItems: [
        '.NET backend',
        'Azure infrastructure',
        'Web apps and frontend',
        'Direct collaboration with the client',
      ],
      targetLabel: 'Who we work with',
      targetText:
        'Startups, SaaS products, internal tools, and companies that want a reliable development team.',
      teamEyebrow: 'Who is behind the studio',
      teamTitle:
        'Two developers covering the full path from API to user interface.',
      differentiatorsEyebrow: 'Why clients choose a small team',
      differentiatorsTitle:
        'You get focus, speed, and direct contact with the people actually building the product.',
      processEyebrow: 'How we work',
      processTitle: 'The process is simple, clear, and result-oriented.',
      trustStripAriaLabel: 'Client values',
      ctaEyebrow: 'Have an idea or an existing product',
      ctaTitle:
        "Let's see how we can help with backend, cloud, or frontend work.",
      ctaButton: 'Contact page',
    },
    about: {
      eyebrow: 'About us',
      title:
        'We are not a large agency team, but a small partner crew that personally leads the build.',
      lead:
        'That is our advantage. Clients get direct communication, faster decisions, and people who understand .NET, Azure, and the frontend side of the product at the same time.',
      expectationsTitle: 'What clients can expect',
      expectationsText:
        'A clearly defined scope, steady delivery, technical decisions that make sense, and code that can be maintained and extended over time.',
      projectsTitle: 'What kinds of projects we like',
      projectsText:
        'SaaS products, internal platforms, B2B tools, modernization of older systems, and any situation where backend, cloud, and frontend need to work as one.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'The best first step is a short conversation about your product, team, and priorities.',
      lead:
        'Later, we can add a real form, an email address, a Calendly link, or a direct consultation CTA here. For now, the page is set up as a clear CTA screen.',
      usefulTitle: 'What is useful for us to know',
      usefulText:
        'Project stage, deadlines, existing stack, main business goal, and where you currently need the most help.',
      outcomeTitle: 'What you get',
      outcomeText:
        'A realistic collaboration proposal, technical direction, and an estimate of how to make the next steps as simple and cost-effective as possible.',
    },
    login: {
      eyebrow: 'Login',
      title: 'Sign in and continue where you left off.',
      lead:
        'The form is ready to connect to a real API, and for now it provides a clean login screen with clear structure and valid input elements.',
      benefitOneLabel: 'Fast access',
      benefitOneText: 'Enter the dashboard, task overview, and internal documentation.',
      benefitTwoLabel: 'Secure experience',
      benefitTwoText: 'Later, we can add password reset, 2FA, and social login here.',
      formLabel: 'Welcome back',
      formTitle: 'Enter your details',
      emailLabel: 'Email address',
      emailPlaceholder: 'name@company.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter your password',
      remember: 'Remember me',
      forgotPassword: 'Forgot password?',
      submit: 'Sign in',
      submitting: 'Signing in...',
      noAccount: 'No account yet?',
      contactUs: 'Contact us',
      invalidForm: 'Please check the fields marked below the form.',
      requestFailed: 'Login failed. Please try again.',
      validation: {
        emailRequired: 'Enter your email address.',
        emailInvalid: 'Email address format is invalid.',
        passwordRequired: 'Enter your password.',
        passwordShort: 'Password must be at least 8 characters long.',
      },
    },
    dashboard: {
      eyebrow: 'Dashboard',
      title: 'This is a protected page available only to signed-in users.',
      lead:
        'Later, we can show an account overview, internal tasks, documents, or any content that should live behind authentication.',
      currentTitle: 'What it does now',
      currentText:
        'If the user is not signed in, the protected route sends them to the login page. If they are, they can open the dashboard normally.',
      nextTitle: 'Next step',
      nextText:
        'Next, we can pull user data from the API here and show real private content.',
    },
    notFound: {
      eyebrow: '404',
      title: 'This route does not exist yet.',
      lead: 'No problem, we will take you back home and continue from there.',
      backHome: 'Back to home',
    },
    content: {
      services: [
        {
          title: '.NET development',
          description:
            'We build stable backend systems, APIs, and business applications designed to grow.',
        },
        {
          title: 'Azure cloud',
          description:
            'We set up infrastructure, deployment flows, and cloud architecture that stays clear and maintainable.',
        },
        {
          title: 'Frontend experience',
          description:
            'We create fast, clear interfaces where users quickly get to what they need.',
        },
      ],
      differentiators: [
        'We combine backend, cloud, and frontend in one small and focused team.',
        'We communicate directly, without losing time in layers between the client and the people building the product.',
        'We like projects where understanding the business problem matters as much as writing the code.',
      ],
      teamMembers: [
        {
          role: 'Developer 01',
          focus: '.NET and Azure',
          bio: 'Focused on backend architecture, cloud environments, and systems that need to stay reliable under load.',
        },
        {
          role: 'Developer 02',
          focus: 'Frontend and full-stack delivery',
          bio: 'Focused on user experience, interfaces, and connecting the frontend and backend layers into one coherent product.',
        },
      ],
      processSteps: [
        {
          title: 'We learn the product',
          description:
            'We start by understanding the goals, users, and constraints so we can propose the right technical direction.',
        },
        {
          title: 'We define the plan',
          description:
            'We align on priorities, scope, and pace so the client always knows what is being worked on.',
        },
        {
          title: 'We deliver iteratively',
          description:
            'We work in short cycles, show progress early, and adjust direction quickly when needed.',
        },
      ],
      trustPoints: [
        'Small team, strong ownership.',
        'Direct collaboration with developers.',
        'A blend of technical quality and business understanding.',
      ],
      contactCards: [
        {
          title: 'For new projects',
          text: 'If you are planning a new application, an MVP, or modernization of an existing system, this is the right place for the first conversation.',
        },
        {
          title: 'For existing products',
          text: 'If you already have a product, we can jump into the backend, Azure, or frontend part and speed up delivery.',
        },
      ],
    },
  },
} as const

