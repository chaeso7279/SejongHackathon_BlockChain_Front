import React, {Component} from 'react';
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            studentid: "",
            user: []
        }
    };

    componentDidMount() {
    }
    
    _studentidUpdate(e) {
        this.setState({ studentid : e.target.value })
    }
    _getKeywordData = async() => {
        const res = await axios('/get/user', {
          method : 'POST',
          data : { 
            'studentid' : this.state.studentid
         },
          headers: new Headers()
        });
        this.setState({ 
            user : res.data
        })
    }
    render() {
        const { user } = this.state;
        return(
            <div className='App'>
            <h3>로그인</h3>

            <input type='text' maxLength='10' placeholder='학번입력' onChange={(e) => this._studentidUpdate(e)}/>
            <button onClick={this._getKeywordData}>로그인</button>

            {user.length !== 0 ? 
            user.map( (el, key) => {
                return(
                <div key={key}>
                    <span>{el.name} 님! 안녕하세요</span>
                </div>
                )
            })
            : <div>사용자를 찾을 수 없습니다.</div>}

            </div> 
        )
    };
};    
export default Login;
