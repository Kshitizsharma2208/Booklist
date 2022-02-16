import { FC } from "react";
import style from "./shadowbox.module.scss";


interface ShadowBaoxComponentProps {
    children: any;
    boxtitle: string;
}

const ShadowBaoxComponent:FC<ShadowBaoxComponentProps> = ({
    children,
    boxtitle
    
}) => {

    // const clickHandler = () => {
    //     console.log("Button Clicked");
    // }


    return (<div className={style.test}>
        {children}
        </div>);
}

export default ShadowBaoxComponent;