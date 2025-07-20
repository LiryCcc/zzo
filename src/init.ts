import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { enUs, zhCn } from './translations';

const initI18n = async () => {
  i18next
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        'en-US': enUs,
        'zh-CN': zhCn
      },
      lng: 'zh-CN',
      fallbackLng: 'en-US'
    });
};

const init = async () => {
  await initI18n();
};

export default init;
