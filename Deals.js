import React from 'react';
import  { useEffect, useState, } from "react";
import { useStateValue } from "./StateProvider.js";
import {NavLink} from "react-router-dom";
import "./Deals.css";
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import KommunicateChat from "../chat.js"
import Product from './Product.js'
import ShowFeedback from './ShowFeedback.js';



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
  
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  let array =[]

function Deals(id,name,price)
{
    const [{ basket }, dispatch] = useStateValue();

    const add2basket = (e) => {
        let id = 0
        let price = 0
        let quantity = 1
        let name = ''

        if (e === 1){
            id = 1
            name = "DEAL 1" // 2 small pizzas with garlic bread
            price = 1200
        }
        else if(e===2){
            id = 2
            name = "DEAL 2" // 2 medium with 1 chicken wings
            price = 1500
        }
        else if(e===3){
            id = 3
            name = "DEAL 3" // 2 large 
            price = 2000
        }
        
        dispatch(
          {
            type: 'ADD_TO_BASKET',
            item: {
              id: id,
              name: name,
              price: price,
              quantity: quantity, 
            }
          }
        )
      }
    return(
    <>
           <div className="top">
            <img src="images/logo.PNG" alt=""/>
            </div>
            <div className="black">
                    <NavLink exact activeClassName="active_class" to="/" >
                    <button className="button active" variant="contained" >Deals</button>
                    </NavLink>
                    <NavLink  exact activeClassName="active_class" to="/pizzas" >
                    <button className="button menu"variant="contained" >Pizzas</button>            
                    </NavLink>
                    <NavLink exact activeClassName="active_class" to="/sides" >
                    <button className="button sides" variant="contained">Sides</button>
                    </NavLink>
            </div>
            <div className="cart">
            <NavLink exact activeClassName="active_class" to="/shoppingcart" >
            <button className="button shopping_cart" ><img src="/images/shoppingcart.png" alt="shoppingcart"  /></button>
            </NavLink>
            </div>
            
     <div className="grey">
            <img className="deal1" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80" alt=""/>
            <div className="text1">
                <p>
                    DEAL 1
                </p>
                <Button 
             onClick= {() => add2basket(1)}
             variant="contained" 
              size="large" 
             color="primary"
             startIcon={<AddShoppingCartOutlinedIcon />
            } >ADD TO CART</Button>
            </div>
            
            <img className="deal2" src="https://assets3.thrillist.com/v1/image/2826030/414x310/scale;jpeg_quality=65.jpg" alt=""/>
            <div className="text2">
                <p>
                    DEAL 2
                </p>
                <Button 
             onClick= {() => add2basket(2)}
             variant="contained" 
              size="large" 
             color="primary"
             startIcon={<AddShoppingCartOutlinedIcon />
            } >ADD TO CART</Button>
            </div>
           


            <img className="deal3" src="https://metro.co.uk/wp-content/uploads/2014/12/papa-johns-christmas-meal-deal-e1418380606403.jpg?quality=90&strip=all" alt="" />
            
            <div className="text3">
            <p>
                DEAL 3
            </p>
            <Button 
             onClick= {() => add2basket(3)} 
             variant="contained" 
              size="large" 
             color="primary"
             startIcon={<AddShoppingCartOutlinedIcon />
            } >ADD TO CART</Button>
            </div>
            
             
        </div>
        
        <div id ="feedback">
        <NavLink exact activeClassName="active_class" to="/feedback ">
            <MuiThemeProvider theme={theme}>
            <Button 
            className="button feedback" 
            variant = "contained" 
            color = "secondary" 
            >Feedback</Button>
            </MuiThemeProvider>
            </NavLink> 
        </div>
        <div className= "show">
            <ShowFeedback/>
        </div>

    <div>
       <KommunicateChat/>
    </div>

    </>
          );
        
}
export default Deals;