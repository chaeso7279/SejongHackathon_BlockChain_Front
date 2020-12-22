import React from 'react';
import TopBar from '../components/TopBar'
import './TalentItem.css';

class TalentItem extends React.Component{
    render(){
        return(
            <div className="grid_Item">
                {/* <div className="grid_poster">
                            <div className="grid_picture">
                                <img src={talent1} ></img>
                            </div>

                            <div className="grid_title">
                                로고제작
                            </div>
                </div> */}

                <div className="grid_poster">
                    <div className="grid_picture">
                        {this.props.talent.img}</div>
                    <div className="grid_title">
                        {this.props.talent.title}</div>
                </div>
            </div>
        );
    }
}
export default TalentItem;