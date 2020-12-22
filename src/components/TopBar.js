import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../components/Navigation';
import LoginBar from '../components/LoginBar';
import './TopBar.css';
import sejongLogo from '../IMG/sejong_logo.png'

class TopBar extends React.Component{
    render(){
        return(
            <div className="topbar">
                <Link to ="/">
                    <img className="sejong_logo" src={sejongLogo}/>
                </Link>
                
                <div className ="topbar_wraper">
                    
                    <div className="topbar_login">
                        <LoginBar/>
                    </div>
                    <div className="topbar_nav">
                        <Navigation/>
                    </div>
                </div>
            </div>
        );
    }
}
export default TopBar;


