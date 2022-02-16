import { FC } from "react";
import style from "./header.module.scss";

const NavigationComponent: FC<any> = ({
    menues
}) => {
  let a =2;  
  
  return (
    <div>
      <ul className={style.navigation}>
        {menues && menues.map((menu: any, index: number) => {
          return <li key={index}>{menu}</li>;
        })}
      </ul>

 

      {a == 1 && <div>I am 1</div>}
      {a == 2? <div>I am 2</div>:''}
    </div>
  );
};

export default NavigationComponent;
