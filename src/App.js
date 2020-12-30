import logo from './logo.svg';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Main from './routes/Main';
import MyShareList from './routes/MyShareList';
import MyPage from'./routes/MyPage';
import MileageApplication from'./routes/MileageApplication';
import ShareItemList from './routes/ShareItemList';
import ShareItemDetail from './routes/ShareItemDetail';
import ShareTalentList from './routes/ShareTalentList';
import ShareTalentDetail from './routes/ShareTalentDetail';
import Register from './routes/Register';
import Login from './routes/Login';
import LoginBar from './components/LoginBar';

function App() {
  let router;
  console.log("width: "+ window.innerWidth);

  return (
      <HashRouter ref = {(r)=>{router = r;}}>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/mysharelist" component={MyShareList}/>
        <Route path="/mileage_application" component={MileageApplication}/>
        <Route path="/mypage" component={MyPage}/>

        <Route path="/share_item_list" component={ShareItemList}/>
        <Route path="/share_item_detail" component={ShareItemDetail}/>
        <Route path="/share_talent_list" component={ShareTalentList}/>
        <Route path="/share_talent_detail" component={ShareTalentDetail}/>

        <Route path = "/register" component = {Register}/>
        <Route path = "/login" component = {Login}/>
      </HashRouter>
  );
}

export default App;
