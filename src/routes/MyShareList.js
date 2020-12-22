import React from 'react';
import {Link} from 'react-router-dom';
import TopBar from '../components/TopBar';
import sharelist_Banner from '../IMG/sharelist_banner.png';

import './MyShareList.css';

class MyShareList extends React.Component{
    constructor(){
        super();
        this.state ={
            isItemSelected: true,
        }
    }
    
    componentDidMount(){
        //데이터 로딩

    }

    itemTapSelect = () =>{
        this.setState({isItemSelected: true});
    }
    talentTapSelect = () =>{
        this.setState({isItemSelected: false});
    }

    renderItemTap = () => {
        return(
            <div itemTap_area>
                        <div className="sellList_area">
                            <div className="sellList_title">내가 공유한 물품</div>
                            <div className="sellList_content">

                            </div>
                        </div>
                        <div className="purchaseList_area">
                            <div className="purchaseList_title">내가 구매한 물품</div>
                            <div className="purchaseList_content">

                            </div>
                        </div>
                        <div className="applyList_area">
                            <div className="applyList_title">구매 신청 내역</div>
                            <div className="applyList_content">

                            </div>
                        </div>
                    </div>
        );
    }

    renderTalentTap = () =>{
        return(
            <div itemTap_area>
                        <div className="sellList_area">
                            <div className="sellList_title">내가 공유한 재능</div>
                            <div className="sellList_content">

                            </div>
                        </div>
                        <div className="purchaseList_area">
                            <div className="purchaseList_title">공유받은 재능</div>
                            <div className="purchaseList_content">

                            </div>
                        </div>
                        <div className="applyList_area">
                            <div className="applyList_title">공유 신청 내역</div>
                            <div className="applyList_content">

                            </div>
                        </div>
                    </div>

        );
    }

    render(){
        const {isItemSelected} = this.state;
        return(
            <div>
                <div className="header">
                    <TopBar/>
                </div>
                <div className="sharelist_banner">
                    <img src={sharelist_Banner}/>
                </div>
                <div className="sharelist_canvas">
                    <table className="sharelist_selectTap">
                        <tr>
                            <td className="sharelist_itemTap"
                                style={isItemSelected?
                                        {backgroundColor: '#342755', color: 'white'}
                                        : {backgroundColor: 'white', color: 'black'}}
                                onClick={this.itemTapSelect}
                            >
                                중고 물품 공유
                            </td>
                            <td className="sharelist_talentTap"
                                style={isItemSelected?
                                    {backgroundColor: 'white', color: 'black'}
                                    : {backgroundColor: '#342755', color: 'white'}}
                                onClick={this.talentTapSelect}
                            >
                                재능 공유
                            </td>
                        </tr>
                    </table>
                    
                    {isItemSelected && this.renderItemTap()}
                    {isItemSelected || this.renderTalentTap()}


                </div>
            </div>
        );
    }
}
export default MyShareList;