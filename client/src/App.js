import { Route, Switch} from "react-router";
import './App.css';
import SignUp from "./Components/Signup/SignUp";
import Dashbord from './Components/Dashbord/Dashbord';

import PrivateRoute from "./Components/router/PrivateRoute";
import { useDispatch } from "react-redux";
import { current } from "./JS/actions/user";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);


  return (
    <div className="App">

<Switch>
        <Route exact path="/" component={SignUp} />
        <PrivateRoute exact path="/Dashbord" component={Dashbord} />
       
      </Switch>
    
    </div>
  );
}

export default App;
