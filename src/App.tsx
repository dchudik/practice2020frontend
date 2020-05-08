// main component 
// with routes
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import Reviews from './components/Reviews';
import Delivery from './components/Delivery';
import Cart from './components/Cart';
import Register from './components/Register';
import ViewGood from './components/ViewGood';
import Login from './components/Auth';
import AddReview from './components/AddReview';

function App() {
  return (
    <div className="App">
      <Router>
        {/* menu */}
        <Menu />
        {/* if route main view main page */}
          <Route exact path="/">
            <Header />
            <Counter />
            <Catalog />
          </Route>
          {/* view catalog */}
          <Route exact path="/catalog" component={Catalog} />
          {/* view reviews */}
          <Route exact path="/reviews" component={Reviews} />
          {/* add new review */}
          <Route exact path="/reviews/new" component={AddReview} />
          {/* information about delibvery */}
          <Route exact path="/delivery" component={Delivery} />
          {/* page for cart */}
          <Route exact path="/cart" component={Cart} />
          {/* register form */}
          <Route exact path="/register" component={Register} />
          {/* login form */}
          <Route exact path="/login" component={Login} />
          {/* view good by id */}
          <Route exact path="/goods/:id" component={ViewGood} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
