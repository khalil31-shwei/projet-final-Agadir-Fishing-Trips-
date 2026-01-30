import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
    en: {
        translation: {
            nav: {
                home: 'Home',
                trips: 'Trips',
                store: 'Store',
                about: 'About',
                contact: 'Contact',
            },
            hero: {
                title: 'Premium Fishing Adventures in Agadir',
                subtitle: 'Experience the Atlantic with local masters. From deep sea trophies to family coastal trips.',
                cta: 'Book a Trip',
                whatsapp: 'Chat on WhatsApp',
            },
            common: {
                currency: '€',
                price_starting: 'Starting from',
                per_person: '/ person',
                mad: 'MAD',
                eur: 'EUR',
            },
            seasons: {
                title: 'Fishing Calendar',
                summer: 'Summer (June-Aug): Tuna & Marlin season',
                autumn: 'Autumn (Sep-Nov): Sea Bass & Sea Bream',
                winter: 'Winter (Dec-Feb): Squid & Bottom fishing',
                spring: 'Spring (Mar-May): Diverse coastal species',
            },
            species: {
                title: 'What You Can Catch',
                tuna: 'Bluefin Tuna',
                marlin: 'Blue Marlin',
                bass: 'European Sea Bass',
                bream: 'Gilt-head Sea Bream',
            },
            trips: {
                tourist_msg: 'All-inclusive premium experience with professional gear and hotel transfer.',
                local_msg: 'Perfect weekend escape for friends and family. Group discounts available.',
            },
            footer: {
                description: 'Your trusted partner for unforgettable fishing experiences in Agadir, Morocco.',
                quickLinks: 'Quick Links',
                contact: 'Contact Us',
                followUs: 'Follow Us',
                rights: 'All rights reserved.',
            },
        },
    },
    fr: {
        translation: {
            nav: {
                home: 'Accueil',
                trips: 'Excursions',
                store: 'Boutique',
                about: 'À propos',
                contact: 'Contact',
            },
            hero: {
                title: 'Aventures de Pêche Premium à Agadir',
                subtitle: 'Découvrez l\'Atlantique avec des maîtres locaux. Des trophées de haute mer aux sorties familiales.',
                cta: 'Réserver',
                whatsapp: 'Discuter sur WhatsApp',
            },
            common: {
                currency: '€',
                price_starting: 'À partir de',
                per_person: '/ personne',
            },
            seasons: {
                title: 'Calendrier de Pêche',
                summer: 'Été : Saison du Thon et du Marlin',
                autumn: 'Automne : Bar et Daurade',
                winter: 'Hiver : Calmar et pêche de fond',
                spring: 'Printemps : Espèces côtières diverses',
            },
            footer: {
                description: 'Votre partenaire de confiance pour des expériences de pêche inoubliables à Agadir, Maroc.',
                quickLinks: 'Liens rapides',
                contact: 'Contactez-nous',
                followUs: 'Suivez-nous',
                rights: 'Tous droits réservés.',
            },
        },
    },
    ar: {
        translation: {
            nav: {
                home: 'الرئيسية',
                trips: 'الرحلات',
                store: 'المتجر',
                about: 'من نحن',
                contact: 'اتصل بنا',
            },
            hero: {
                title: 'مغامرات صيد فاخرة في أكادير',
                subtitle: 'اكتشف المحيط الأطلسي مع خبراء محليين. من صيد الأعماق للمحترفين إلى رحلات عائلية ممتعة.',
                cta: 'احجز رحلتك',
                whatsapp: 'تواصل عبر واتساب',
            },
            common: {
                currency: 'درهم',
                price_starting: 'ابتداءً من',
                per_person: '/ للشخص',
            },
            seasons: {
                title: 'مواسم الصيد',
                summer: 'الصيف: موسم التونة والمارلين',
                autumn: 'الخريف: الدرعي والزريقة',
                winter: 'الشتاء: الكلامار وصيد القاع',
                spring: 'الربيع: تنوع في الأسماك الساحلية',
            },
            footer: {
                description: 'شريكك الموثوق لتجارب صيد لا تُنسى في أكادير، المغرب.',
                quickLinks: 'روابط سريعة',
                contact: 'اتصل بنا',
                followUs: 'تابعنا',
                rights: 'جميع الحقوق محفوظة.',
            },
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

// Set document direction based on language
i18n.on('languageChanged', (lng) => {
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
});

export default i18n;
