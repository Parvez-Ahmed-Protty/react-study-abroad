import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Studies from "./Components/Studies/Studies";


function App() {
  return (
    <div className='App'>
      {/* routing start */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/study">
            <Studies></Studies>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      {/* routing end */}
    </div>
  );
}

export default App;
