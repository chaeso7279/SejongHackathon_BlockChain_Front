import React from 'react';
import './Main.css'
import TopBar from '../components/TopBar'
import main_banner from '../images/main_banner.png'

class Main extends React.Component{
    render(){
        return(
            <div className="Main">
                <div className="topbar">
                    <TopBar/>
                </div>
                <div className="main_banner">
                    <image src= {main_banner} alt="MainBanner"/>
                </div>
            </div>
            
        );
    }
}
export default Main;