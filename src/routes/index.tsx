import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/home'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};