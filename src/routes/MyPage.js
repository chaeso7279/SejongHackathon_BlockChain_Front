import React from 'react';
import './MyPage.css';
import TopBar from '../components/TopBar'
import {Link, Switch} from 'react-router-dom';
import banner from '../IMG/mypagebanner.png';
import img1 from '../IMG/talent_img1.png';
import { Button } from '@material-ui/core';
import talent1 from '../IMG/talent1.jpg';


class MyPage extends React.Component{
    componentDidMount(){
        //데이터 로딩

    }


    render(){
        return(
            <div>
                <div className="header">
                    <TopBar/>
                </div>
                <div className="talent_banner">
                    <img src={banner}></img>
                </div>
                    
                <div className="talent_canvas">
                <div className="mypage_txt">
                <h2>잔여 화폐</h2>
                </div>
                    <div className="grid1">                       
                    </div>
                    <div className="grid1">                       
                    </div>
                    <div className="grid1">                       
                    </div>
                <div className="mypage_txt2">
                <h2>충전 및 사용 내역</h2>
                </div>
                    <div className="grid2">
                        
                    </div>
                <div className="mypage_txt2">
                <h2>마일리지 신청 내역</h2>
                </div>
                    <div className="grid3">
                        
                    </div>
                <div className="mypage_txt2">
                <h2>마일리지 적립 내역</h2>
                </div>
                    <div className="grid4">
                        
                    </div>

                </div>  {/*talent_canvas*/}
            </div>
        );
    }
}
export default MyPage;
