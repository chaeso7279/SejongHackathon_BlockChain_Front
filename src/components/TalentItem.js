import React from 'react';
import TopBar from '../components/TopBar'
import './TalentItem.css';

class TalentItem extends React.Component{
    render(){
        return(
            <div>
                <div className="grid_poster">
                            <div className="grid_picture">
                                <img src={talent1} ></img>
                            </div>

                            <div className="grid_title">
                                로고제작
                            </div>
                        </div>
            </div>
        );
    }
}
export default TalentItem;