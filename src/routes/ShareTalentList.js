import React from 'react';
import LiginBar from '../components/LoginBar';
import './ShareTalentList.css';
import {Link, Switch} from 'react-router-dom';
import LoginBar from '../components/LoginBar';
import Navigation from '../components/Navigation';


import banner from '../IMG/talentbanner.png';
import img1 from '../IMG/talent_img1.png';
import { Button } from '@material-ui/core';


class ShareTalentList extends React.Component{

    componentDidMount(){
        //데이터 로딩

    }


    render(){
        return(
            <div>
                <div className="header">
                    <LoginBar />
                    <Navigation />
                </div>
                <div className="talent_banner">
                    <img src={banner}></img>
                </div>
                    
                <div className="talent_canvas">
                    <div className="talent_img">
                        <div className="talent_txt">
                            <h5>비교과 마일리지는 총 기여 시간과 기부 받은 사람에게 받은 점수에 비례하여 적립됩니다.</h5>
                            <h5>비교과 활동과 무관한 재능 교환은 마일리지 적립이 어려울 수 있습니다.</h5>
                        </div>
                    </div>
                    <Link to="/share_talent_list">
                        <button className="talent_btn_add"> 재능 올리기
                        </button>
                    </Link>
                    
                </div>  {/*talent_canvas*/}

            </div>
        );
    }
}
export default ShareTalentList;