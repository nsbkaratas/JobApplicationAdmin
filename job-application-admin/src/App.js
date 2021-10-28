import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import ListApplicants from './components/ListApplicants';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import AddApplicant from './components/AddApplicant';
import UpdateApplicant from './components/UpdateApplicant';
import DeleteApplicant from './components/DeleteApplicant';
import ApplicantForm from './components/ApplicantForm';
import GoodByeMessage from './components/GoodByeMessage';


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
        <Route exact path ="/applicantform" component={ApplicantForm}></Route>
        {/* <Route exact path ="/managersignin" component={ManagerSignIn}></Route> */}
        <Route exact path ="/submitionsuccess" component={GoodByeMessage}></Route>
        </Switch>
      </div>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
