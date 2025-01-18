import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Load file JSON ngôn ngữ
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ
  .use(initReactI18next)
  .init({
    supportedLngs: ["vi", "en", "ja"], // Các ngôn ngữ hỗ trợ
    fallbackLng: "en", // Ngôn ngữ mặc định
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Đường dẫn đến file JSON
    },
  });

export default i18n;
