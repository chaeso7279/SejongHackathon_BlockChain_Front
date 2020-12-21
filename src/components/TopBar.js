import React from 'react';
import Navigation from '../components/Navigation';
import LoginBar from '../components/LoginBar';
import './TopBar.css';

class TopBar extends React.Component{
    render(){
        return(
            <div>
                <div className="topbar_login">
                    <LoginBar/>
                </div>
                <div className="topbar_nav">
                    <Navigation/>
                </div>
            </div>
        );
    }
}
export default TopBar;


