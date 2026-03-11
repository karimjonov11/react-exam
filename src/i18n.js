import i18 from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import ru from './locales/ru.json'
import uz from './locales/uz.json'

i18
.use(initReactI18next)
.use(LanguageDetector)
.init({
    resources: {
        en: { translation: en },
        ru: { translation: ru },
        uz: { translation: uz }
    }
})
