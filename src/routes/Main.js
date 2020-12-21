import React from 'react';
import './Main.css'
import TopBar from '../components/TopBar'

class Main extends React.Component{
    render(){
        return(
            <div className="Main">
              <div className="topbar">
                    <TopBar/>
                </div>
            </div>
            
        );
    }
}
export default Main;