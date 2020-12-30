import React from 'react';
import axios from 'axios';

class DBTest extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hello:[],
        }
    }

    componentDidMount(){
        this._getHello();
    }

    _getHello = async() =>{
        const res = await axios.get('/hello');
        this.setState({ hello : res.data.hello })
        console.log(this.state.hello);
    }

    render(){
        return(
            <h3>콘솔확인</h3>
        )
    }
}
export default DBTest;
