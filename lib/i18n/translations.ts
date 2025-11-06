export type Locale = 'hu' | 'en'

interface Translation {
  nav: {
    home: string
    services: string
    pricelist: string
    about: string
    contact: string
    quote: string
  }
  services: {
    laboratory: string
    consulting: string
    drone: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
    servicesBtn: string
    scrollDown: string
  }
  homePage: {
    servicesSection: {
      title: string
      subtitle: string
      labTitle: string
      labDescription: string
      consultingTitle: string
      consultingDescription: string
      droneTitle: string
      droneDescription: string
      details: string
    }
    whyChoose: {
      title: string
      accreditedTitle: string
      accreditedDesc: string
      experienceTitle: string
      experienceDesc: string
      expertTitle: string
      expertDesc: string
      fastResultsTitle: string
      fastResultsDesc: string
      technologyTitle: string
      technologyDesc: string
    }
    ndviSection: {
      title: string
      subtitle: string
      beforeLabel: string
      afterLabel: string
      redYellow: string
      redYellowDesc: string
      greenTurquoise: string
      greenTurquoiseDesc: string
      darkGreen: string
      darkGreenDesc: string
    }
    priceCalculator: {
      title: string
      subtitle: string
      benefit1: string
      benefit2: string
      benefit3: string
    }
    ctaSection: {
      title: string
      subtitle: string
      contactBtn: string
      pricelistBtn: string
    }
  }
  footer: {
    description: string
    servicesTitle: string
    legalTitle: string
    contactTitle: string
    workingHours: string
    workingHoursValue: string
    allRightsReserved: string
    accredited: string
    privacy: string
    terms: string
    cookies: string
    imprint: string
    address: string
  }
  quoteModal: {
    title: string
    subtitle: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    companyLabel: string
    companyPlaceholder: string
    areaLabel: string
    areaPlaceholder: string
    serviceLabel: string
    servicePlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    privacyText: string
    privacyLink: string
    submitBtn: string
    submitting: string
    successTitle: string
    successMessage: string
    errorTitle: string
    errorMessage: string
    close: string
    backBtn: string
    nextBtn: string
    validation: {
      nameRequired: string
      nameMinLength: string
      emailRequired: string
      emailInvalid: string
      phoneRequired: string
      phoneInvalid: string
      messageRequired: string
      messageMinLength: string
      gdprRequired: string
    }
  }
  priceCalculator: {
    title: string
    areaLabel: string
    areaPlaceholder: string
    cropTypeLabel: string
    selectCrop: string
    cropVineyard: string
    cropOrchard: string
    cropField: string
    cropGreenhouse: string
    servicesLabel: string
    serviceSoil: string
    servicePlant: string
    serviceWater: string
    serviceDrone: string
    serviceConsulting: string
    estimatedCost: string
    perHectare: string
    getQuoteBtn: string
    note: string
  }
  liveStats: {
    title: string
    hectares: string
    tests: string
    clients: string
    experience: string
  }
  trustBadges: {
    title: string
    subtitle: string
    accredited: string
    accreditedSubtitle: string
    iso: string
    isoSubtitle: string
    standards: string
    standardsSubtitle: string
    experience: string
    experienceSubtitle: string
    fastResults: string
    support: string
  }
  common: {
    readMore: string
    learnMore: string
    contact: string
    submit: string
    close: string
    menu: string
    loading: string
    language: string
    scrollToTop: string
  }
}

export const translations: Record<Locale, Translation> = {
  hu: {
    nav: {
      home: 'Főoldal',
      services: 'Szolgáltatások',
      pricelist: 'Árlista',
      about: 'Rólunk',
      contact: 'Kapcsolat',
      quote: 'Ajánlatot Kérek'
    },
    services: {
      laboratory: 'Laboratóriumi Vizsgálatok',
      consulting: 'Szaktanácsadás',
      drone: 'Drónos Felmérés'
    },
    hero: {
      title: 'Precíziós Mezőgazdaság Tudományos Alapokon',
      subtitle: 'Akkreditált laboratóriumi vizsgálatok és szakértői tanácsadás 5000+ hektár tapasztalatával',
      cta: 'Ajánlatot Kérek',
      servicesBtn: 'Szolgáltatásaink',
      scrollDown: 'Görgess lejjebb'
    },
    homePage: {
      servicesSection: {
        title: 'Szolgáltatásaink',
        subtitle: 'Komplex megoldások a modern mezőgazdaság minden területére',
        labTitle: 'Laboratóriumi Vizsgálatok',
        labDescription: 'Talaj, növény, trágya és öntözővíz minták akkreditált vizsgálata. Pontos eredmények, gyors átfutás.',
        consultingTitle: 'Szaktanácsadás',
        consultingDescription: 'Tápanyag-gazdálkodási tanácsadás nagyértékű kultúrákban. Szőlő, gyümölcs, ipari zöldség szakértelem.',
        droneTitle: 'Drónos Felmérés',
        droneDescription: 'Szántóföldi növény állapot felmérés precíziós technológiával. Multispektrális képalkotás, NDVI elemzés.',
        details: 'Részletek'
      },
      whyChoose: {
        title: 'Miért Válasszon Minket?',
        accreditedTitle: 'Akkreditált Laboratórium',
        accreditedDesc: 'NAH (Nemzeti Akkreditáló Hatóság) által elismert vizsgálatok',
        experienceTitle: '5000+ Hektár Tapasztalat',
        experienceDesc: 'Szántóföld, szőlő, gyümölcsös, hajtatás területeken',
        expertTitle: 'Szakértői Csapat',
        expertDesc: 'Agrármérnökök, növényvédő szakmérnökök',
        fastResultsTitle: 'Gyors Eredményszolgáltatás',
        fastResultsDesc: 'Laboratóriumi vizsgálatok 5-7 napon belül',
        technologyTitle: 'Modern Technológia',
        technologyDesc: 'Drónos felmérés, precíziós eszközpark'
      },
      ndviSection: {
        title: 'Lássa A Különbséget',
        subtitle: 'Drónos NDVI felmérésünk segítségével időben azonosíthatja a problémás területeket',
        beforeLabel: 'Problémás Terület',
        afterLabel: 'Javított Terület',
        redYellow: 'Piros/Sárga',
        redYellowDesc: 'Stressz, tápanyaghiány',
        greenTurquoise: 'Zöld/Türkiz',
        greenTurquoiseDesc: 'Átlagos növényállomány',
        darkGreen: 'Sötétzöld',
        darkGreenDesc: 'Egészséges, optimális'
      },
      priceCalculator: {
        title: 'Kalkulálja Meg Költségét',
        subtitle: 'Használja interaktív árkalkulátorunkat, hogy azonnal láthassa becsült költségeit. Válassza ki a gazdálkodási területét és a kívánt szolgáltatásokat.',
        benefit1: 'Átlátható, versenyképes árak',
        benefit2: 'Testreszabható szolgáltatáscsomagok',
        benefit3: 'Mennyiségi kedvezmények nagy területekre'
      },
      ctaSection: {
        title: 'Kérdése Van? Kérjen Személyre Szabott Ajánlatot!',
        subtitle: 'Szakértőink készséggel állnak rendelkezésére, hogy megtalálják az Ön gazdaságának legmegfelelőbb megoldást.',
        contactBtn: 'Kapcsolatfelvétel',
        pricelistBtn: 'Árlista Megtekintése'
      }
    },
    footer: {
      description: 'Akkreditált mezőgazdasági laboratórium. Precíziós mezőgazdaság tudományos alapokon.',
      servicesTitle: 'Szolgáltatások',
      legalTitle: 'Jogi Információk',
      contactTitle: 'Kapcsolat',
      workingHours: 'Munkaidő:',
      workingHoursValue: 'H-P: 08:00 - 16:00',
      allRightsReserved: 'Minden jog fenntartva',
      accredited: 'NAH Akkreditált Laboratórium',
      privacy: 'Adatvédelmi Tájékoztató',
      terms: 'Általános Szerződési Feltételek',
      cookies: 'Cookie Szabályzat',
      imprint: 'Impresszum',
      address: '1234 Budapest\nPélda utca 123.'
    },
    quoteModal: {
      title: 'Ajánlatkérés',
      subtitle: 'Töltse ki az alábbi űrlapot és hamarosan felvesszük Önnel a kapcsolatot.',
      nameLabel: 'Név',
      namePlaceholder: 'Az Ön neve',
      emailLabel: 'E-mail cím',
      emailPlaceholder: 'email@pelda.hu',
      phoneLabel: 'Telefonszám',
      phonePlaceholder: '+36 30 123 4567',
      companyLabel: 'Cég neve (opcionális)',
      companyPlaceholder: 'Gazdaság neve',
      areaLabel: 'Terület nagysága (hektár)',
      areaPlaceholder: 'pl. 50',
      serviceLabel: 'Érdeklődési terület',
      servicePlaceholder: 'Válasszon szolgáltatást',
      messageLabel: 'Üzenet',
      messagePlaceholder: 'Írja le igényét...',
      privacyText: 'Elolvastam és elfogadom az',
      privacyLink: 'adatvédelmi tájékoztatót',
      submitBtn: 'Ajánlat Küldése',
      submitting: 'Küldés...',
      successTitle: 'Sikeres küldés!',
      successMessage: 'Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.',
      errorTitle: 'Hiba történt',
      errorMessage: 'Sajnos nem sikerült elküldeni az üzenetet. Kérjük, próbálja újra később vagy írjon nekünk közvetlenül az info@agrolab.hu címre.',
      close: 'Bezárás',
      backBtn: 'Vissza',
      nextBtn: 'Következő',
      validation: {
        nameRequired: 'A név megadása kötelező',
        nameMinLength: 'A névnek legalább 2 karakter hosszúnak kell lennie',
        emailRequired: 'Az e-mail cím megadása kötelező',
        emailInvalid: 'Érvénytelen e-mail cím',
        phoneRequired: 'A telefonszám megadása kötelező',
        phoneInvalid: 'Érvénytelen telefonszám formátum',
        messageRequired: 'Az üzenet megadása kötelező',
        messageMinLength: 'Az üzenetnek legalább 10 karakter hosszúnak kell lennie',
        gdprRequired: 'Az adatvédelmi tájékoztató elfogadása kötelező'
      }
    },
    priceCalculator: {
      title: 'Árkalkulátor',
      areaLabel: 'Terület nagysága (hektár)',
      areaPlaceholder: 'pl. 50',
      cropTypeLabel: 'Gazdálkodási terület',
      selectCrop: 'Válasszon típust',
      cropVineyard: 'Szőlő',
      cropOrchard: 'Gyümölcsös',
      cropField: 'Szántóföld',
      cropGreenhouse: 'Hajtatás',
      servicesLabel: 'Szolgáltatások',
      serviceSoil: 'Talajvizsgálat',
      servicePlant: 'Növényvizsgálat',
      serviceWater: 'Vízminőség vizsgálat',
      serviceDrone: 'Drónos felmérés',
      serviceConsulting: 'Szaktanácsadás',
      estimatedCost: 'Becsült költség',
      perHectare: 'Ft/hektár',
      getQuoteBtn: 'Pontos Ajánlat Kérése',
      note: 'A kalkulátor csak tájékoztató jellegű becslést ad. Pontos ajánlatért kérjük, töltse ki ajánlatkérő űrlapunkat.'
    },
    liveStats: {
      title: 'Számokban',
      hectares: 'Hektár Tapasztalat',
      tests: 'Elvégzett Vizsgálat',
      clients: 'Elégedett Ügyfél',
      experience: 'Év Tapasztalat'
    },
    trustBadges: {
      title: 'Akkreditált Minőség',
      subtitle: 'Szigorú szabványoknak megfelelő vizsgálatok',
      accredited: 'NAH Akkreditált',
      accreditedSubtitle: 'Nemzeti Akkreditáló Hatóság',
      iso: 'ISO 9001:2015',
      isoSubtitle: 'Minőségirányítási Rendszer',
      standards: 'MSZ EN ISO/IEC',
      standardsSubtitle: 'Laboratóriumi Szabványok',
      experience: '15+ Év Tapasztalat',
      experienceSubtitle: 'Az Ön Megbízható Partnere',
      fastResults: 'Gyors Eredmények',
      support: '24/7 Támogatás'
    },
    common: {
      readMore: 'Részletek',
      learnMore: 'Tudj meg többet',
      contact: 'Kapcsolat',
      submit: 'Küldés',
      close: 'Bezárás',
      menu: 'Menü',
      loading: 'Betöltés...',
      language: 'Nyelv',
      scrollToTop: 'Vissza a tetejére'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      pricelist: 'Pricing',
      about: 'About Us',
      contact: 'Contact',
      quote: 'Get a Quote'
    },
    services: {
      laboratory: 'Laboratory Testing',
      consulting: 'Expert Consulting',
      drone: 'Drone Survey'
    },
    hero: {
      title: 'Precision Agriculture Based on Science',
      subtitle: 'Accredited laboratory testing and expert consulting with over 5000+ hectares of experience',
      cta: 'Get a Quote',
      servicesBtn: 'Our Services',
      scrollDown: 'Scroll down'
    },
    homePage: {
      servicesSection: {
        title: 'Our Services',
        subtitle: 'Comprehensive solutions for all areas of modern agriculture',
        labTitle: 'Laboratory Testing',
        labDescription: 'Accredited testing of soil, plant, fertilizer and irrigation water samples. Accurate results, fast turnaround.',
        consultingTitle: 'Expert Consulting',
        consultingDescription: 'Nutrient management consulting for high-value crops. Expertise in vineyards, orchards, and industrial vegetables.',
        droneTitle: 'Drone Survey',
        droneDescription: 'Field crop condition assessment with precision technology. Multispectral imaging, NDVI analysis.',
        details: 'Learn More'
      },
      whyChoose: {
        title: 'Why Choose Us?',
        accreditedTitle: 'Accredited Laboratory',
        accreditedDesc: 'Tests recognized by NAH (National Accreditation Authority)',
        experienceTitle: '5000+ Hectares Experience',
        experienceDesc: 'In field crops, vineyards, orchards, and greenhouse areas',
        expertTitle: 'Expert Team',
        expertDesc: 'Agricultural engineers, plant protection specialists',
        fastResultsTitle: 'Fast Results',
        fastResultsDesc: 'Laboratory tests within 5-7 days',
        technologyTitle: 'Modern Technology',
        technologyDesc: 'Drone surveys, precision equipment'
      },
      ndviSection: {
        title: 'See The Difference',
        subtitle: 'Our drone NDVI surveys help you identify problem areas in time',
        beforeLabel: 'Problem Area',
        afterLabel: 'Improved Area',
        redYellow: 'Red/Yellow',
        redYellowDesc: 'Stress, nutrient deficiency',
        greenTurquoise: 'Green/Turquoise',
        greenTurquoiseDesc: 'Average crop condition',
        darkGreen: 'Dark Green',
        darkGreenDesc: 'Healthy, optimal'
      },
      priceCalculator: {
        title: 'Calculate Your Cost',
        subtitle: 'Use our interactive price calculator to instantly see your estimated costs. Select your farming area and desired services.',
        benefit1: 'Transparent, competitive pricing',
        benefit2: 'Customizable service packages',
        benefit3: 'Volume discounts for large areas'
      },
      ctaSection: {
        title: 'Have Questions? Request a Custom Quote!',
        subtitle: 'Our experts are ready to help you find the best solution for your farm.',
        contactBtn: 'Contact Us',
        pricelistBtn: 'View Pricing'
      }
    },
    footer: {
      description: 'Accredited agricultural laboratory. Precision agriculture based on science.',
      servicesTitle: 'Services',
      legalTitle: 'Legal Information',
      contactTitle: 'Contact',
      workingHours: 'Working Hours:',
      workingHoursValue: 'Mon-Fri: 08:00 - 16:00',
      allRightsReserved: 'All rights reserved',
      accredited: 'NAH Accredited Laboratory',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      cookies: 'Cookie Policy',
      imprint: 'Imprint',
      address: '1234 Budapest\nExample Street 123.'
    },
    quoteModal: {
      title: 'Request a Quote',
      subtitle: 'Fill out the form below and we will contact you soon.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email address',
      emailPlaceholder: 'email@example.com',
      phoneLabel: 'Phone number',
      phonePlaceholder: '+36 30 123 4567',
      companyLabel: 'Company name (optional)',
      companyPlaceholder: 'Farm name',
      areaLabel: 'Area size (hectares)',
      areaPlaceholder: 'e.g. 50',
      serviceLabel: 'Area of interest',
      servicePlaceholder: 'Select a service',
      messageLabel: 'Message',
      messagePlaceholder: 'Describe your needs...',
      privacyText: 'I have read and accept the',
      privacyLink: 'privacy policy',
      submitBtn: 'Send Quote Request',
      submitting: 'Sending...',
      successTitle: 'Successfully sent!',
      successMessage: 'Thank you for your message! We will contact you soon.',
      errorTitle: 'An error occurred',
      errorMessage: 'Unfortunately, we could not send your message. Please try again later or write to us directly at info@agrolab.hu.',
      close: 'Close',
      backBtn: 'Back',
      nextBtn: 'Next',
      validation: {
        nameRequired: 'Name is required',
        nameMinLength: 'Name must be at least 2 characters',
        emailRequired: 'Email address is required',
        emailInvalid: 'Invalid email address',
        phoneRequired: 'Phone number is required',
        phoneInvalid: 'Invalid phone format',
        messageRequired: 'Message is required',
        messageMinLength: 'Message must be at least 10 characters',
        gdprRequired: 'Privacy policy acceptance is required'
      }
    },
    priceCalculator: {
      title: 'Price Calculator',
      areaLabel: 'Area size (hectares)',
      areaPlaceholder: 'e.g. 50',
      cropTypeLabel: 'Farming area',
      selectCrop: 'Select type',
      cropVineyard: 'Vineyard',
      cropOrchard: 'Orchard',
      cropField: 'Field Crop',
      cropGreenhouse: 'Greenhouse',
      servicesLabel: 'Services',
      serviceSoil: 'Soil Testing',
      servicePlant: 'Plant Testing',
      serviceWater: 'Water Quality Testing',
      serviceDrone: 'Drone Survey',
      serviceConsulting: 'Expert Consulting',
      estimatedCost: 'Estimated cost',
      perHectare: 'HUF/hectare',
      getQuoteBtn: 'Get Accurate Quote',
      note: 'The calculator provides an informative estimate only. For an accurate quote, please fill out our quote request form.'
    },
    liveStats: {
      title: 'By the Numbers',
      hectares: 'Hectares Experience',
      tests: 'Tests Completed',
      clients: 'Satisfied Clients',
      experience: 'Years Experience'
    },
    trustBadges: {
      title: 'Accredited Quality',
      subtitle: 'Tests meeting strict standards',
      accredited: 'NAH Accredited',
      accreditedSubtitle: 'National Accreditation Authority',
      iso: 'ISO 9001:2015',
      isoSubtitle: 'Quality Management System',
      standards: 'MSZ EN ISO/IEC',
      standardsSubtitle: 'Laboratory Standards',
      experience: '15+ Years Experience',
      experienceSubtitle: 'Your Reliable Partner',
      fastResults: 'Fast Results',
      support: '24/7 Support'
    },
    common: {
      readMore: 'Learn More',
      learnMore: 'Learn More',
      contact: 'Contact',
      submit: 'Submit',
      close: 'Close',
      menu: 'Menu',
      loading: 'Loading...',
      language: 'Language',
      scrollToTop: 'Scroll to top'
    }
  }
}

export type TranslationKeys = Translation

export function getTranslations(locale: Locale): Translation {
  return translations[locale] || translations.hu
}
