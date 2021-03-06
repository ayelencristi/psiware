import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
