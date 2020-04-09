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
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/cart" component={Cart} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
