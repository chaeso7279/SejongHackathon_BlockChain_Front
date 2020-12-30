import React, {Component} from 'react';
import axios from 'axios';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            studentid: "",
            tokenAddress: "",
            tokenURL: ""
        }
    };

    _addData = async(e) => {
        const { name, email, phone, studentid, tokenAddress, tokenURL } = this.state;
        e.preventDefault();

        const res = await axios('/add/user', {
            method : 'POST',
            data : { 
                'name' : name,
                'email' : email,
                'phone' : phone,
                'studentid': studentid,
                'tokenAddress': tokenAddress,
                'tokenURL': tokenURL    
            },
            headers: new Headers()
        });

        if(res.data) {
            alert('회원가입 완료.');
            return window.location.reload();
        }
    }

    _nameUpdate(e) {
        this.setState({ name : e.target.value })
    }
    _emailUpdate(e) {
        this.setState({ email : e.target.value })
        this.setState({ tokenAddress : "Dummy" })
        this.setState({ tokenURL : "Dummy" })
    }
    _studentidUpdate(e) {
        this.setState({ studentid : e.target.value })
    }
    _phoneUpdate(e) {
        this.setState({ phone : e.target.value })
    }
    render() {
        return(
            <div className='App'>
            <h3>회원가입</h3>
            <form method='POST' onSubmit={this._addData}>
                <input type='number' maxLength='10' placeholder='studentid' onChange={(e) => this._studentidUpdate(e)}/>
                <input type='text' maxLength='10' placeholder='name' onChange={(e) => this._nameUpdate(e)}/>
                <input type='text' maxLength='20' placeholder='email' onChange={(e) => this._emailUpdate(e)}/>
                <input type='text' maxLength='20' placeholder='phone' onChange={(e) => this._phoneUpdate(e)}/>
                <input type='submit' value='Add' />
            </form>
            </div>
        )
    };
};    
export default Register;
