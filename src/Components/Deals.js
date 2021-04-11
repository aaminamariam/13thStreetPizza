import React from 'react';
import {NavLink} from "react-router-dom";
import "./Deals.css";
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import ChatIcon from '@material-ui/icons/Chat';


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
function Deals()
{
    const [cart, setcart] = React.useState([])
    function addtocart (){
     
    //     const e = document.getElementById("Size");
    //     const selectedoption=e.options[e.selectedIndex].value;
    //     // console.log(selectedoption)
    //     const x = selectedoption
    //     array.push([x])
    //    setcart([...cart,x]);
    //     console.log(array)
      }
    return(
    <>
           <div className="top">
            <img src="images/logo.PNG" alt=""/>
            </div>
            <div className="black">
                    <NavLink exact activeClassName="active_class" to="/deals" >
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
            <img className="deal1" src="images/deal1.JPG" alt=""/>
            <div className="text1">
                <p>
                    DEAL 1
                </p>
                <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
            </div>
            
            <img className="deal2" src="images/deal5.JPG" alt=""/>
            <div className="text2">
                <p>
                    DEAL 2
                </p>
                <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
            </div>
           
             

            <img className="deal3" src="images/deal3.JPG" alt="" />
            
            <div className="text3">
            <p>
                DEAL 3
            </p>
            <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
            </div>
            
             
        </div>
        
        <div className="bottom">
        <a href="/feedback">
        <MuiThemeProvider theme={theme}>
        <Button className="button feedback" variant = "contained" colour = "secondary" >Feedback</Button></MuiThemeProvider>
        </a></div>
        {/* <button className="button chat" ><img src="/images/chaticon.png" alt="chat button" />
        <div className="chat1">CHAT</div>
        </button>
        </div>  */}
        
    <div>
    <MuiThemeProvider theme={theme}>
    <Button
        variant="contained"
        color="primary"
        className= "chatdeals"
        startIcon={<ChatIcon />}>
        CHAT
    </Button></MuiThemeProvider>  
    </div>
    
    </>
          );
        
}
export default Deals;