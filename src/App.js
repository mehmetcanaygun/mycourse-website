import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Lectures from "./components/pages/Lectures";
import Tutors from "./components/pages/Tutors";
import Classrooms from "./components/pages/Classrooms";
import Galery from "./components/pages/Galery";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Biology from "./components/pages/lectures/Biology";
import Chemistry from "./components/pages/lectures/Chemistry";
import Geography from "./components/pages/lectures/Geography";
import Literature from "./components/pages/lectures/Literature";
import Maths from "./components/pages/lectures/Maths";
import Physics from "./components/pages/lectures/Physics";
import ConferanceRooms from "./components/pages/classrooms/ConferanceRooms";
import Labs from "./components/pages/classrooms/Labs";
import StandardClassrooms from "./components/pages/classrooms/StandardClassrooms";
import Footer from "./components/layout/Footer";

import "./css/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="site-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/lectures" component={Lectures} />
            <Route exact path="/tutors" component={Tutors} />
            <Route exact path="/classrooms" component={Classrooms} />
            <Route exact path="/galery" component={Galery} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/biology" component={Biology} />
            <Route exact path="/chemistry" component={Chemistry} />
            <Route exact path="/geography" component={Geography} />
            <Route exact path="/literature" component={Literature} />
            <Route exact path="/maths" component={Maths} />
            <Route exact path="/physics" component={Physics} />
            <Route exact path="/conferance-rooms" component={ConferanceRooms} />
            <Route exact path="/labs" component={Labs} />
            <Route
              exact
              path="/standard-classrooms"
              component={StandardClassrooms}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
