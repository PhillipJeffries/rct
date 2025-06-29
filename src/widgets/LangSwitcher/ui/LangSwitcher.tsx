import { useTranslation } from 'react-i18next';
// import * as s from './LangSwitcher.module.scss'

const LangSwitcher = () => {
    const { t, i18n } = useTranslation()
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <button onClick={toggleLanguage}>{t("перевод")}</button>
    )
}

export default LangSwitcher