import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import AddEdit from "./Pages/AddEdit";
import About from "./Pages/About";
import Header from "./Components/Header";
import Update from "./Pages/Update"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddEdit} />
          <Route exact path="/update/:id" component={Update} />
          <Route exact path="/view/:id" component={AddEdit} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
