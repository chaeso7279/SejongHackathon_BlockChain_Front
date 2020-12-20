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
import Navigation from './components/Navigation';

function App() {
  let router;
  const navigate = (pageName = '') =>{
    router.history.push('/'+pageName);
  }

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
      </HashRouter>
  );
}

export default App;
