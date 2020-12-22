import React from 'react';
import TopBar from '../components/TopBar'
import banner from '../IMG/sharelist_banner.png';

class MyShareList extends React.Component{
    componentDidMount(){
        //데이터 로딩

    }


    render(){
        return(
            <div>
                <div className="header">
                    <TopBar/>
                </div>
                <div className="mysharelist_banner">
                    <img src={banner}/>
                </div>
            </div>
        );
    }
}
export default MyShareList;