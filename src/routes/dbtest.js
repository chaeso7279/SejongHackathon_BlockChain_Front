import React from "react";
import axios from 'axios';
export default class Example3 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          host : '',
        }
      }
    
      componentDidMount() {
        this._getHost();
      }
    
      _getHost = async() => {
        const res = await axios.get('/api/host');
        this.setState({ host : res.data.host })
      }
    
      render() {
        return(
          <div className='App'>
            <h3> Welcome to <u> {this.state.host} </u> Blog! </h3>
          </div>
        )
      }
    }
    