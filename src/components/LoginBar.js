import React from 'react';
import './LoginBar.css';

class LoginBar extends React.Component{

    constructor(){
        super();
        this.state ={
            isLogined: true
        };
    }

    componentDidMount = () => {
        
    }

    UnLoginedLoginbar = () => (
        <div className="login_Bar">
            <span>로그인</span>
            <span>/</span>
            <span>회원가입</span>
        </div>
    );

    LoginedLoginbar = () => (
        <div className="login_Bar">
            <span>63,700</span>
            <button className="btn_charge">충전하기</button>
            
            <span>오혜린님</span>
            <button className="btn_logout">로그아웃</button>
        </div>
    );

    render(){
        const { isLogined } = this.state;
        return(
            <div>
                {isLogined && this.LoginedLoginbar()}
                {isLogined || this.UnLoginedLoginbar()}
            </div>
        );
    }
}
export default LoginBar;