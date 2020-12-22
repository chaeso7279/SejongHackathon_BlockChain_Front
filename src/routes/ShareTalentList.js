import React from 'react';
import './ShareTalentList.css';
import {Link, Switch} from 'react-router-dom';


import banner from '../IMG/talentbanner.png';
import img1 from '../IMG/talent_img1.png';
import { Button } from '@material-ui/core';
import TopBar from '../components/TopBar';
import talent1 from '../IMG/talent1.jpg';
import TalentItem from '../components/TalentItem.js'



class ShareTalentList extends React.Component{

    componentDidMount(){
        //데이터 로딩
    }

    constructor(props){
        super(props);
        this.state = {
            talentData: [
                {
                    img : '../IMG/talent1.jpg',
                    title : '로고제작',
                },
                {
                    img : '../IMG/talent2.jpg',
                    title : '리액트공부',
                },
                {
                    img : '../IMG/talent3.jpg',
                    title : '영상편집',
                },
                {
                    img : '../IMG/talent4.jpg',
                    title : '프론트개발',
                }
            ]
        };
    }


    render(){

        const mapToComponent = data =>{
            return data.map((talent, i) =>{
                return (<TalentItem talent = {talent} key={i} />);
            
            });
        };

        return(
            <div>
                <div className="header">
                    <TopBar/>
                </div>
                <div className="talent_banner">
                    <img src={banner}></img>
                </div>
                    
                <div className="talent_canvas">
                    <div className="talent_img">
                        <div className="talent_txt">
                            <h5>비교과 마일리지는 총 기여 시간과 기부 받은 사람에게 받은 점수에 비례하여 적립됩니다.</h5>
                            <h5>비교과 활동과 무관한 재능 교환은 마일리지 적립이 어려울 수 있습니다.</h5>
                        </div>
                        <Link to=".share_talent_list">
                        <button className="talent_btn_add"> 재능 올리기
                        </button>
                    </Link>
                    </div>
                    <div className="grid_wrapper">
                        <div className="grid">
                            {mapToComponent(this.state.talentData)}
                        </div>
                    </div>

                    {/* <div className="grid">
                        <div className="grid_poster">
                            <div className="grid_picture">
                                <img src={talent1} ></img>
                            </div>

                            <div className="grid_title">
                                로고제작
                            </div>
                        </div>
                    </div> */}
                    
                </div>  {/*talent_canvas*/}
            </div>
        );
    }
}
export default ShareTalentList;