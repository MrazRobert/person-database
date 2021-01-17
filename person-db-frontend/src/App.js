import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListPersonComponent from './components/ListPersonComponent';
import CreatePersonComponent from './components/CreatePersonComponent';
import ViewPersonComponent from './components/ViewPersonComponent'; 

const App = () => {
  return (
    <div className="container">
      <Router>
        <HeaderComponent />
        <div className="content-wrap">
          <Switch>
            <Route path="/" exact component={ListPersonComponent}></Route>
            <Route path="/persons" component={ListPersonComponent}></Route>
            <Route path="/add-person/:id" component={CreatePersonComponent}></Route>
            <Route path="/view-person/:id" component={ViewPersonComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div> 
  );
}

export default App;
