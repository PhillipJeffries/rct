import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
    const {t} = useTranslation()
    return (
        <>
            <p>{t("Страница не найдена")}</p>
        </>
    )
}

export default NotFoundPage