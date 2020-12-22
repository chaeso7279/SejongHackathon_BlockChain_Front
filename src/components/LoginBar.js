import React from 'react';
import './LoginBar.css';
import ic_coin from '../IMG/ic_coin.png';

class LoginBar extends React.Component{

    constructor(){
        super();
        this.state ={
            isLogined: true,
        };
    }

    componentDidMount = () => {
    }

    login = () =>{
        this.setState({isLogined: true});
            console.log(this.state.isLogined);
            //TODO: Login Modal 실행 필요
    }

    logout = () =>{
        this.setState({isLogined:false});
        console.log(this.state.isLogined);
        //TODO: DB 연결되고나서 User 정보 로그아웃 처리 필요
    }

    UnLoginedLoginbar = () => (
        <div className="unlogin_Bar">
            <button className="btn_login"
                onClick={this.login}>
                로그인
            </button>
        </div>
    );

    LoginedLoginbar = () => (
        <div className="login_Bar">
            <span className="login_coin_wraper">
                <img className ='login_ic_coin' src={ic_coin}/>
                <span className= 'login_coin_amount'>63,700</span>
            </span>
            
            <button className="btn_charge">충전하기</button>
            
            <span className="login_userName">오혜린님</span>
            <button className="btn_logout"
                    onClick= {this.logout}>
                로그아웃
            </button>
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