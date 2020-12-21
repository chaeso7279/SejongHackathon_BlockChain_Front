import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component{
    render(){
        return(
            <div>
                <div className="nav">
                    <Link to ="/mysharelist">내 공유 내역</Link>
                    <Link to ="/mileage_application">마일리지 신청</Link>
                    <Link to ="/mypage">마이페이지</Link>
                </div>
            </div>
        );
    }
}
export default Navigation;