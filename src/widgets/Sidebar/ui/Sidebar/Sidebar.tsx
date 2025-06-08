import { classNames } from "shared/lib/helpers/classNames/classNames"
import s from './Sidebar.module.scss'
import { FC, useState } from "react"
import { useTranslation } from "react-i18next"
import { LangSwitcher } from "widgets/LangSwitcher"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"

const Sidebar: FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    return (
        <div className={classNames(s.sidebar, { [s.collapsed]: collapsed })}>
            <button className={s.toggleButton} onClick={() => setCollapsed(!collapsed)}>
                {t("боковое меню")}
            </button>
            <LangSwitcher />
            <ThemeSwitcher />
        </div>
    )
}

export default Sidebar