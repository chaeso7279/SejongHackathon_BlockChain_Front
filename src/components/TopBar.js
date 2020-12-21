import React from 'react';
import Navigation from '../components/Navigation';
import LoginBar from '../components/LoginBar';
import './TopBar.css';

class TopBar extends React.Component{
    render(){
        return(
            <div className="topbar">
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


