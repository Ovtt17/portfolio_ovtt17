import { useTranslation } from "react-i18next";

const useDownloadCV = () => {
  const { i18n } = useTranslation();

  const getCVLink = () => {
    const language = i18n.language;
    const cvMap: Record<string, string> = {
      en: "/pdf/OvettMora_CV_English_2025.pdf",
      es: "/pdf/OvettMora_CV_Español_2025.pdf",
    };

    return cvMap[language] || cvMap.en;
  };

  const openCVInNewTab = () => {
    const link = getCVLink();
    window.open(link, "_blank");
  };

  return { openCVInNewTab };
};

export default useDownloadCV;
