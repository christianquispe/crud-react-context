import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home'
import Tasks from '../pages/Tasks'
import CreateTaskPage from '../pages/Create'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/tasks/create" component={CreateTaskPage} />
        </Switch>
      </div>
    </Router>
  );
};