import React from 'react';
import './MainShareContent.css';

class MainShareContent extends React.Component{
    render(){
        return(
            <div>
                <div className="maincontent_item">
                    <div className="maincontent_title">
                        중고 물품 공유
                    </div>
                    <div className="maincontent_describe">
                        중고 책 등의 중고 물품을 코인으로 구매하세요.
                    </div>
                    <div className="maincontent_content_item">
                        {/* TODO: item list 출력 */}
                    </div>
                </div>
                
                <div className="maincontent_talent">
                    <div className="maincontent_title">
                        재능 공유
                    </div>
                    <div className="maincontent_describe">
                        재능을 공유하고 비교과 마일리지도 챙기세요.
                    </div>
                    <div className="maincontent_content_talent">
                        {/* TODO: talent list 출력 */}
                    </div>
                </div>
            </div>
        );
    }
}
export default MainShareContent;