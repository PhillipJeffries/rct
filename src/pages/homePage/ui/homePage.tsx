import { useTranslation } from "react-i18next"

const HomePage = () => {
    const {t} = useTranslation()

    return (
        <>
            <p>{t("Домашняя страница")}</p>
        </>
    )
}

export default HomePage