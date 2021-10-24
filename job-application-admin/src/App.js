import {BrowserRouter as Route, Switch} from 'react-router-dom';
import React from 'react';
import ListApplicants from './components/ListApplicants';


function App() {
  return (
   
            <div className="container">
             <ListApplicants/>
            </div>
      
  );
}

export default App;
