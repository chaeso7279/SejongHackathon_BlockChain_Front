import React from 'react';
import LiginBar from '../components/LoginBar';
import './ShareTalentList.css';
import {Link, Switch} from 'react-router-dom';
import LoginBar from '../components/LoginBar';
import Navigation from '../components/Navigation';


import banner from '../IMG/talentbanner.png';
import img1 from '../IMG/talent_img1.png';


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
                    <div className="img">
                        <div className="content">
                            <h4>비교과 마일리지는 </h4>
                            <h2>총 기여 시간</h2>
                        </div>
                        <div class="img-cover"></div>


                    </div>
                    {/* <img src={img1}></img>
                    <span>비교과 마일리지는</span> */}
                </div>  {/*talent_canvas*/}

            </div>
        );
    }
}
export default ShareTalentList;