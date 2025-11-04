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
    services: string
  }
  footer: {
    description: string
    servicesTitle: string
    legalTitle: string
    contactTitle: string
    workingHours: string
    allRightsReserved: string
    accredited: string
  }
  common: {
    readMore: string
    learnMore: string
    contact: string
    submit: string
    close: string
    menu: string
    loading: string
  }
}

export const translations: Record<Locale, Translation> = {
  hu: {
    // Navigation
    nav: {
      home: 'Főoldal',
      services: 'Szolgáltatások',
      pricelist: 'Árlista',
      about: 'Rólunk',
      contact: 'Kapcsolat',
      quote: 'Ajánlatot Kérek'
    },
    // Services
    services: {
      laboratory: 'Laboratóriumi Vizsgálatok',
      consulting: 'Szaktanácsadás',
      drone: 'Drónos Felmérés'
    },
    // Hero
    hero: {
      title: 'Precíziós Mezőgazdaság Tudományos Alapokon',
      subtitle: 'Akkreditált laboratóriumi vizsgálatok és szakértői tanácsadás 5000+ hektár tapasztalatával',
      cta: 'Ajánlatot Kérek',
      services: 'Szolgáltatásaink'
    },
    // Footer
    footer: {
      description: 'Akkreditált mezőgazdasági laboratórium. Precíziós mezőgazdaság tudományos alapokon.',
      servicesTitle: 'Szolgáltatások',
      legalTitle: 'Jogi Információk',
      contactTitle: 'Kapcsolat',
      workingHours: 'Munkaidő:',
      allRightsReserved: 'Minden jog fenntartva',
      accredited: 'NAH Akkreditált Laboratórium'
    },
    // Common
    common: {
      readMore: 'Részletek',
      learnMore: 'Tudj meg többet',
      contact: 'Kapcsolat',
      submit: 'Küldés',
      close: 'Bezárás',
      menu: 'Menü',
      loading: 'Betöltés...'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      pricelist: 'Pricing',
      about: 'About Us',
      contact: 'Contact',
      quote: 'Get a Quote'
    },
    // Services
    services: {
      laboratory: 'Laboratory Testing',
      consulting: 'Expert Consulting',
      drone: 'Drone Survey'
    },
    // Hero
    hero: {
      title: 'Precision Agriculture Based on Science',
      subtitle: 'Accredited laboratory testing and expert consulting with over 5000+ hectares of experience',
      cta: 'Get a Quote',
      services: 'Our Services'
    },
    // Footer
    footer: {
      description: 'Accredited agricultural laboratory. Precision agriculture based on science.',
      servicesTitle: 'Services',
      legalTitle: 'Legal Information',
      contactTitle: 'Contact',
      workingHours: 'Working Hours:',
      allRightsReserved: 'All rights reserved',
      accredited: 'NAH Accredited Laboratory'
    },
    // Common
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      contact: 'Contact',
      submit: 'Submit',
      close: 'Close',
      menu: 'Menu',
      loading: 'Loading...'
    }
  }
}

export type TranslationKeys = Translation

export function getTranslations(locale: Locale): Translation {
  return translations[locale] || translations.hu
}
