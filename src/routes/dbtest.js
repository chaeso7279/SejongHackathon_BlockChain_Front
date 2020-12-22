import React from "react";
import axios from 'axios';
export default class Example3 extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        name : '',
        email : '',
        }
}
componentDidMount() {
    this.getUser();
}
  getUser = async() => {
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

  
/*
  onclick = () => {
    fetch("http://localhost:3001/ST", { 
      method: "post", //통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          title: json.S_title,
          contents: json.S_contents,
        });
      });
      
  };





  render() {
    return (
      <div>
        <h1>데이터 가져오기</h1>
        <h3>{this.state.id}</h3>
        <h3>{this.state.name}</h3>
        <h3>{this.state.email}</h3>
        <h3>{this.state.phone}</h3>
        <h3>{this.state.dep}</h3>
        <h3>{this.state.title}</h3>
        <h3>{this.state.contents}</h3>
        <button onClick={this.onclick}>가져오기</button>
        <h3>{this.state.title}</h3>
      </div>
    );
  }
}*/

/*
componentDidMount() {
    this._getData();
}

_getData = async () => {
    const res = await axios.get('/get/data');
    this.setState({ 
      sample1List : res.data
    })
  }

_nameUpdate(e) {
  this.setState({ name : e.target.value })
}
_emailUpdate(e) {
  this.setState({ email : e.target.value })
}*/
