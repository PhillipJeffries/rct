import { Counter } from "components/counter"
import img from 'shared/assets/img.png'
import { useTranslation } from "react-i18next"

const AboutPage = () => {
    const {t} = useTranslation('about')
    return (
        <>
            <p>{t("об")}</p>
            <img src={img} />
                <Counter />
        </>
    )
}

export default AboutPage