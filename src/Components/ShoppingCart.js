import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import arraycart from './Pizzas.js';
import './ShoppingCart.css'
import {NavLink} from "react-router-dom"
const f1 = require("./Pizzas.js");

const theme = createMuiTheme({
    palette: {
            primary: {
                main:"#B00020"},
            secondary:{
                main: "#000000"},
            typography: {
            main: "#FFFFFF"
            }
        }
  });


// import {array} from "./Pizzas"

// import IconButton from '@material-ui/core/IconButton';
// import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';

// import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';


// console.log(array) 


 


class ShoppingCart extends Component
{

   render() { return(
        <>
            <div className="top">
                <img src="images/logo.PNG" alt=""/>
            </div>

            <NavLink exact activeClassName="active_class" to="/deals" >
            <div className="backtomenu" >
                <MuiThemeProvider theme={theme}>
                <NavLink exact activeClassName="active_class" to="/deals" >
                <Button  className="backtomenubutton" variant="contained" color="secondary" >BACK TO MENU</Button>
                </NavLink>
                </MuiThemeProvider>
                </div></NavLink>
            
            <div className="flexcont">
                <div className="shoppingcart">
                    
                    
                    <div className="cols">
                        <p className="items">Items</p>
                        <p className="quantity">Quantity</p>
                        <p className="price">Price</p>
                        <p className="total">Total</p>
                    </div>
                    <hr/>

                    <div className="rowsofitems">
                        <p className="items">Name and information of item</p>
                         <div className="quantitybtn">
                         {/* <input type="number" id = "quantity" ></input> */}
                        </div>
                            
                        <p className="price">Price</p>
                        <p className="total">Total</p>

                    </div>

                    <hr/>

                    <div className="subtotal">
                        <p className="subtotaltxt">Subtotal:</p>

                    </div>
                    
                    
                </div>
               
               
               
                <div className="contactdetails">
                    
                    <h3> Contact Details</h3>
                    <form >
                        <div className="inputdetails">
                            <div className="details"><p>Full Name:</p></div>
                            <input type="text" placeholder="Enter your name" required></input>
                        </div> 
                        <div className="inputdetails">
                            <div className="details"><p>Phone number:</p></div>
                            <input type="text" placeholder="Enter your phone number" required></input>
                        </div> 
                        <div className="inputdetails">
                            <div className="details"><p>Address:</p></div>
                            <input type="text" placeholder="Enter your address" required></input>
                        </div> 
                        {/* <div className="submitbtn">
                            <input type="submit" value="Place Order"></input>
                        </div> */}
                        <button className="placeorder">Place Order </button>

                    </form>
                </div>
            </div>
                
                
        </>
    );
}
}

export default ShoppingCart;