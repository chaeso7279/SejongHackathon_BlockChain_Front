import React from 'react';
import './Main.css'
import TopBar from '../components/TopBar'
import MainShareContent from '../components/MainShareContent'
import mainbanner from '../IMG/main_banner.png'


class Main extends React.Component{

    render(){
        return(
            <div className="Main">
                <TopBar/>
                <img className="main_banner" src={mainbanner}/>
                <MainShareContent />
            </div>
            
        );
    }
}
export default Main;