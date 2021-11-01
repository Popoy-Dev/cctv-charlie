import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'antd/dist/antd.css'; 

import Header from './views/layout/Header'
import Dashboard from './views/pages/Dashboard';
import UsersGroups from './views/pages/UsersGroups';
import Assets from './views/pages/Assets';
import ManageAssets from './views/pages/ManageAssets';
import WorkOrder from './views/pages/WorkOrder';
import ScheduleWorkOrder from './views/pages/ScheduleWorkOrder';
import UsersTeams from './views/pages/IJsersTeams';
import CreateUser from './views/pages/CreateUser';
import CreateTeam from './views/pages/CreateTeam';
import TableAssets from './views/pages/TableAssets';
import NewAssets from './views/pages/NewAssets';
import NewWorkOrder from './views/pages/NewWorkOrder';
function App() {
  return (
   <>
 <div id="wrapper">
  <Router>
    
<Header>


</Header>
<Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/users-teams">
            <UsersTeams />
          </Route>
          <Route exact path="/create-user">
            <CreateUser />
          </Route>
          <Route exact path="/create-team">
            <CreateTeam
             />
          </Route>
          <Route path="/usersgroups">
            <UsersGroups />
          </Route>
          <Route path="/assets">
            <Assets />
          </Route>
          <Route path="/manage-assets">
            <TableAssets />
          </Route>
          <Route path="/new-asset">
            <NewAssets />
          </Route>
          <Route path="/work-orders">
            <WorkOrder />
          </Route>
          <Route path="/new-work-order">
            <NewWorkOrder />
          </Route>

          <Route path="/schedule-work-order">
            <ScheduleWorkOrder />
          </Route>

          
        </Switch>
    </Router>
    
    </div>   
   </>   
  );
}

export default App;
