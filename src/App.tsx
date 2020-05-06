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
        <Menu />
          <Route exact path="/">
            <Header />
            <Counter />
            <Catalog />
          </Route>
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/reviews/new" component={AddReview} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/goods/:id" component={ViewGood} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
