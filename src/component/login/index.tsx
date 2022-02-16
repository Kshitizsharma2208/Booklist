import { FC } from "react";
import NavigationComponent from "./navigation";
import style from './header.module.scss';

const HeaderComponent:FC<any> = ({
    title,
    menues
}) => {


    return (<div>
        <div className={style.header_title}>{title}</div>
        <div className={style.header_nav}>
            <NavigationComponent menues={menues} />
        </div>
        
        </div>);
}

export default HeaderComponent;