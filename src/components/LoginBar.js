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
            <button>로그인</button>
            <button>회원가입</button>
        </div>
    );

    LoginedLoginbar = () => (
        <div className="login_Bar">
            <div>오혜린님</div>
            <button>로그아웃</button>
            <div>63,700</div>
            <button>충전하기</button>
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