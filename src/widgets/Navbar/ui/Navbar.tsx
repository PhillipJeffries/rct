import { classNames } from "shared/lib/helpers/classNames/classNames"
import * as s from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { useTranslation } from "react-i18next"

const links = [
    { name: 'домой', to: '/' },
    { name: 'об', to: '/about' },
]

const Navbar = () => {
    const { t } = useTranslation()
    return (
        <div className={classNames(s.navbar)}>
            {
                links.map(({ name, to }) => (
                    <AppLink theme={AppLinkTheme.SECONDARY} to={to} key={to}>
                        {t(name)}
                    </AppLink>
                ))
            }
        </div>
    )
}

export default Navbar