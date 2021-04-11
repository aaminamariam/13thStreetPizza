import React from 'react';
import {NavLink} from "react-router-dom";
import "./Sides.css";
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
function Sides()
{
    const [cart, setcart] = React.useState([])
    function addtocart (){
        
        const e = document.getElementById("Size");
        const selectedoption=e.options[e.selectedIndex].value;
        // console.log(selectedoption)
        const x = selectedoption
        array.push([x])
       setcart([...cart,x]);
        console.log(array)
      }
    return(
        <>
    
    <div className="top">
            <img src="images/logo.PNG" alt=""/>
            </div>
            <div className="black">
                    <NavLink exact activeClassName="active_class" to="/deals" >
                    <button className="button deals" >Deals</button>
                    </NavLink>
                    
                    <NavLink  exact activeClassName="active_class" to="/pizzas" >
                    <button className="button menu">Pizzas</button>
            
                    </NavLink>
                    <NavLink exact activeClassName="active_class" to="/sides" >
                    <button className="button active">Sides</button>
                    
                    </NavLink>
            </div>
            <div className="cart">
            <NavLink exact activeClassName="active_class" to="/shoppingcart" >
            <button className="button shopping_cart" ><img src="/images/shoppingcart.png" alt="shoppingcart"  /></button>
            </NavLink>
            </div>
            <h4>
            <div className="square1">
                <figure>
                    <img src="/images/garlic bread.png" alt=""/>
                    <figcaption4>
                Garlic Bread
                    </figcaption4>
                    <p>
                <figcaption5>
                <form action="/action_page.php">
                <label for="Size">Select Size </label>
                <select name="Size" id="Size">
                <option value="">4 pieces Rs.250</option>
                <option value="">6 pieces Rs. 375</option>
                <option value="">8 pieces Rs.500</option>
                </select>
                </form>
                </figcaption5>
                </p>
                <figcaption6>
                <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
                </figcaption6>
                </figure>
            </div>
            <div className="square2">
                <figure>
                    <img src="/images/fried nuggets.png" alt=""/>
                    <figcaption4>
                    Potato wedges
                </figcaption4>
                    <p>
                <figcaption5>
                <form action="/action_page.php">
                <label for="Size">Select Size </label>
                <select name="Size" id="Size">
                <option value="">4 pieces Rs.250</option>
                <option value="">6 pieces Rs. 375</option>
                <option value="">8 pieces Rs.500</option>
                </select>
                </form>
                </figcaption5>
                </p>
                <figcaption6>
                <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
                </figcaption6>
                </figure>
            </div>
            <div className="square3">
                <figure>
                    <img src="/images/chicken wings.png" alt=""/>
                    <figcaption4>
                    Chicken Wings
                </figcaption4>
                    <p>
                <figcaption5>
                <form action="/action_page.php">
                <label for="Size">Select Size </label>
                <select name="Size" id="Size">
                <option value="">4 pieces Rs.250</option>
                <option value="">6 pieces Rs. 375</option>
                <option value="">8 pieces Rs.500</option>
                </select>
                </form>
                </figcaption5>
                </p>
                <figcaption6>
                <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
                </figcaption6>
                </figure>
            </div>
        
            </h4>
            {/* <div className="bottom">
            <button className="button chat" ><img src="/images/chaticon.png" alt="chat button"  />
            <div className="chat1">CHAT</div>
            </button>
    </div> */}
    
    <div>
    <MuiThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        className= "chatsides"
        
        startIcon={<ChatIcon />}>
        
        CHAT
      </Button></MuiThemeProvider>  
    </div>     
        
        </>
   );

}
export default Sides;