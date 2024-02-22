import { useTranslation } from "react-i18next";
import i18n from "./config/i18n"; 

const App = () => {
  const { t } = useTranslation();

  const toggleLang = () => {
    const currentLang = i18n.language;
    i18n.changeLanguage(currentLang === "en" ? "ka" : "en");
  };

  return (
    <div>
      {t("Hello")}
      <button onClick={toggleLang}>{t("ToogleLang")}</button>
    </div>
  );
};

export default App;