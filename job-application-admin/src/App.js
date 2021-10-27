import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import ListApplicants from './components/ListApplicants';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import AddApplicant from './components/AddAppicant';
import UpdateApplicant from './components/UpdateApplicant';
import DeleteApplicant from './components/DeleteApplicant';


function App() {
  return (
    <div>   
      <Router>
      <Header/>
      <div className="container">
      <Switch>
        <Route exact path ="/" component={Home}></Route>
        <Route exact path ="/listapplicants" component={ListApplicants}></Route>
        <Route exact path ="/addapplicant" component={AddApplicant}></Route>
        <Route exact path ="/updateapplicant/:id" component={UpdateApplicant}></Route>
        <Route exact path ="/deleteapplicant/:id" component={DeleteApplicant}></Route>
        </Switch>
      </div>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
