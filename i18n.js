import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";

i18next.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
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
                referF: 'refer a friend',
                Calendar: 'Calendar',
                Today: 'Today',
                Create: 'Create',
                drag_handle: 'drag_handle',
                delete: 'delete',
                close: 'close',
                segment: 'segment',
                bookmark_border: 'bookmark_border',
                check: 'check',
                Save: 'Save'
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
                referF: 'recomendar a un amigo',
                Calendar: 'Calendario',
                Today: 'Hoy',
                Create: 'Crear',
                drag_handle: 'arrastrar_manija',
                delete: 'borrar',
                close: 'cerca',
                segment: 'segmento',
                bookmark_border: 'marcador_border',
                check: 'controlar',
                Save: 'Ahorrar'
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
                referF: 'référez un ami',
                Calendar: 'Calendrier',
                Today: "Aujourd'hui",
                Create: 'Créer',
                drag_handle: 'glisser_handle',
                delete: 'supprimer',
                close: 'fermer',
                segment: 'segment',
                bookmark_border: 'bookmark_border',
                check: 'vérifier',
                Save: 'Sauvegarderave'
            },
        },
    },
})

// notes 9:30 - 