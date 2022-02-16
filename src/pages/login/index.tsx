import { FC, useState } from "react";
import API from "../../services/api.service";
import style from "./login.module.scss";
import { useNavigate } from "react-router-dom";

const LoginComponent: FC<any> = () => {
  const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const actionLogin = async () => {
        console.log('clicked');
        setSuccessMessage('');
        setErrorMessage('');
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        let res = await API.post('auth/login', data);
        const resData = res.data;
        if(resData.status === 1){
            setSuccessMessage(resData.message);
            localStorage.setItem('token', resData.data.token);
            API.defaults.headers.common['Authorization'] = resData.data.token;
            navigate("/booklist");
        }else{
            setErrorMessage(resData.message);
        }
        console.log('res', resData);
    }
  return (
    <div className={style.loginpage}>
      <div className={style.login}>
        <div className={style.form}>
            <div className={style.title}>Login</div>
            {errorMessage && <div className={style.error}>{errorMessage}</div>}
            {successMessage && <div className={style.success}>{successMessage}</div>}
          <div className={style.formcontrol}>
            <label>Email</label>
            <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div className={style.formcontrol}>
            <label>Password</label>
            <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          <div className={style.action}>
            <div className={style.button} onClick={actionLogin}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
