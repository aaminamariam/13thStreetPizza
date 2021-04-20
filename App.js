import React from 'react';
import {Switch, Route } from "react-router-dom";
import Deals from  "./Components/Deals.js";
import Pizzas from "./Components/Pizzas.js";
import Sides from "./Components/Sides.js";
import ShoppingCart from "./Components/ShoppingCart.js";
import Feedback from "./Components/Feedback.js";
import Feedbacksubmitted from "./Components/Feedbacksubmitted.js";

function App(){
    
 return(
    <>
  
    <Switch>
        <Route exact path="/deals" component={Deals}/>
        <Route exact path="/pizzas" component={Pizzas}/>
        <Route exact path="/sides" component={Sides}/>
        <Route exact path="/shoppingcart" component={ShoppingCart}/>
        <Route exact path="/feedback" component={Feedback}/>
        <Route exact path="/feedbacksubmitted" component={Feedbacksubmitted}/>
        
        
    </Switch>
  
   

    </>
);
}

export default App;