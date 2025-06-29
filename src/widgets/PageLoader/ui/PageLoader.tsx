import { useTranslation } from "react-i18next"

const PageLoader = () => {
    const {t} = useTranslation()

    return (
        <>
            <p>{t("Загрузка")}</p>
        </>
    )
}

export default PageLoader