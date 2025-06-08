import { FC } from "react";
import { Link, LinkProps } from "react-router-dom"
import s from './AppLink.module.scss'
import { classNames } from "shared/lib/helpers/classNames/classNames";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {

    const {
        className, 
        children, 
        to, 
        theme = AppLinkTheme.PRIMARY, 
        ...otherProps
    } = props;

    return (
        <Link className={classNames(s.appLink, {} ,[className, s[theme]]) } to={to} {...otherProps}>
            {children}
        </Link>

    )
}

export default AppLink