import React from 'react';
import Navigation from '../components/Navigation'
import LoginBar from '../components/LoginBar'

class TopBar extends React.Component{
    render(){
        return(
            <div>
                <LoginBar/>
                <Navigation/>
            </div>
        );
    }
}
export default TopBar;