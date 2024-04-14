import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";

i18next.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'es',
    resources: {
        en: {
            translation: {
                messages: 'messages',
                lessons: 'lessons',
                classroom: 'classroom',
                calendar: 'calendar',
                statistics: 'statistics',
                profile: 'profile',
                settings: 'settings',
                community: 'community',
                Dashboard: 'Dashboard',
                FindT: 'Find a Teacher',
            },
        },
        es: {
            translation: {
                messages: 'messages',
                lessons: 'lecciones',
                classroom: 'aula',
                calendar: 'calendario',
                statistics: 'estadísticas',
                profile: 'perfil',
                settings: 'configuración',
                community: 'comunidad',
                Dashboard: 'Panel',
                FindT: 'Encontrar un profeso',
            },

        },
        fr: {
            translation: {
                messages: 'messages',
                lessons: 'leçons',
                classroom: 'salle de classe',
                calendar: 'calendrier',
                statistics: 'statistiques',
                profile: 'profil',
                settings: 'paramètres',
                community: 'communauté',
                Dashboard: 'Tableau de bord',
                FindT: 'Trouver un professeur',
            },
        },
    },
})

// notes 8:10 - 