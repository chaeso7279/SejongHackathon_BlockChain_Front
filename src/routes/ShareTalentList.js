import React from 'react';
import LiginBar from '../components/LoginBar';
import './ShareTalentList.css';
import {Link, Switch} from 'react-router-dom';
import LoginBar from '../components/LoginBar';

import banner from '../IMG/talentbanner.png';


class ShareTalentList extends React.Component{

    componentDidMount(){
        //데이터 로딩

    }


    Banner = () => {
        <div className="talent_banner">
            <img src="../IMG/talentbanner"></img>
        </div>
    }

    render(){
        return(
            <div>
                {/* <div className="header"> */}
                {/* </div> */}

                <div className="talent_banner">
                  <img src={banner}></img>
                </div>

            </div>
        );
    }
}
export default ShareTalentList;