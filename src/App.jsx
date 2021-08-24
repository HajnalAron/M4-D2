import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Component } from 'react';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import LatestRealease from './components/LatestRelease';
import fantasy from "./data/fantasy.json"
import history from "./data/history.json"
import horror from "./data/horror.json"
import scifi from "./data/scifi.json"
import books from "./data/romance.json"
class App extends Component {
  state = {fantasy, history, horror, scifi, books}
  render(){
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      {Object.values(this.state).map(category=>{
        return(<LatestRealease books={category}/>)})}
      <MyFooter />
      </div>
  )
  }
  }

export default App;
