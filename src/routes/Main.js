import React from 'react';
import './Main.css'
import TopBar from '../components/TopBar'

import mainbanner from '../IMG/main_banner.png'

class Main extends React.Component{

    render(){
        return(
            <div className="Main">
                <div className="topbar">
                    <TopBar/>
                </div>
                <img className="main_banner" src={mainbanner}></img>
            </div>
            
        );
    }
}
export default Main;