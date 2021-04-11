import React from 'react';
import {NavLink} from "react-router-dom";
import "./Pizzas.css";
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import ChatIcon from '@material-ui/icons/Chat'
//const [state, setState] = React.useState([])

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
function Pizzas()
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
                    <button className="button active">Pizzas</button>
            
                    </NavLink>
                    <NavLink exact activeClassName="active_class" to="/sides" >
                    <button className="button sides">Sides</button>
                    
                    </NavLink>
            </div>
            <div className="cart">
            <NavLink exact activeClassName="active_class" to="/shoppingcart" >
            <button className="button shopping_cart" ><img src="/images/shoppingcart.png" alt="shoppingcart"  /></button>
            </NavLink>
            </div>
           
            <div className="squareone">
                <figure>
                <img src="/images/Pepperoni Pizza.JPG" alt="" />
                <figcaption1>
                Pepperoni Pizza.
                </figcaption1>
                 <figcaption2>
                <form action="/action_page.php">
                <label for="Size">Select Size  </label>
                <select id="Size">
                <option value={["pepporoni pizza",1, 350]}>Small Rs.350 </option>
                <option value={["pepporoni pizza",1, 650]}>Medium Rs. 650</option>
                <option value={["pepporoni pizza",1, 950]}>Large Rs.950</option>
                
                </select>
                </form>
                </figcaption2>
              <figcaption3> 
             <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
             </figcaption3> 
    
              </figure>
           </div>
           <div class="squaretwo">


            <figure>
                <img src="/images/Cheese Pizza.jpg" alt="" />
                <figcaption1>
                Cheese Pizza.
                </figcaption1>  
                <figcaption2> 
                <form action="/action_page.php">
                <label for="Size">Select Size </label>
                <select name="Size" id="Size">
                <option value="Small">Small Rs.350</option>
                <option value="Medium">Medium Rs. 650</option>
                <option value="Large">Large Rs.950</option>
                </select>
                </form>
               </figcaption2> 
                <figcaption3> 
                <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
                </figcaption3>
            </figure>
          </div>
         <div className="squarethree">


        <figure>
            <img src="/images/Buffalo Pizza.jpg" alt=""/>
            <figcaption1>
            Buffalo Pizza.
           </figcaption1>
        <figcaption2>
        <form action="/action_page.php">
        <label for="Size">Select Size </label>
        <select name="Size" id="Size">
        <option value="Small">Small Rs.350</option>
        <option value="Medium">Medium Rs. 650</option>
        <option value="Large">Large Rs.950</option>
        </select>
        </form>
        </figcaption2>
        <figcaption3>
        <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
        </figcaption3>
        </figure>
        </div>
        <div className="squarefour">


        <figure>
            <img src="/images/Meat Pizza.jpg" alt="" />
            <figcaption1>
            Meat Pizza.
            </figcaption1>
            
        <figcaption2>
        <form action="/action_page.php">
        <label for="Size">Select Size </label>
        <select name="Size" id="Size">
        <option value="Small">Small Rs.350</option>
        <option value="Medium">Medium Rs. 650</option>
        <option value="Large">Large Rs.950</option>
        </select>
        </form>
        </figcaption2>
       
        <figcaption3>
        <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
        </figcaption3>
        </figure>
        </div>
      <div className="squarefive">


        <figure>
            <img src="/images/Supreme Pizza.jpg" alt=""/> 
            <figcaption1>
            Supreme Pizza.
            </figcaption1>
           
        <figcaption2>
        <form action="/action_page.php">
        <label for="Size">Select Size </label>
        <select name="Size" id="Size">
        <option value="Small">Small Rs.350</option>
        <option value="Medium">Medium Rs. 650</option>
        <option value="Large">Large Rs.950</option>
        </select>
        </form>
        </figcaption2>
        <figcaption3>
        <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
        </figcaption3>
        </figure>
      </div>
      <div className="squaresix">


      <figure>
        <img src="/images/Hawaiian Pizza.jpg" alt="" />
        <figcaption1>Hawaiian Pizza.
        </figcaption1>
        <figcaption2>
      <form action="/action_page.php">
       <label for="Size">Select Size </label>
       <select name="Size" id="Size">
       <option value="Small">Small Rs.350</option>
       <option value="Medium">Medium Rs. 650</option>
       <option value="Large">Large Rs.950</option>
      </select>
      </form>
      </figcaption2>
         <figcaption3>
         <Button class="button add_to_cart" onClick={addtocart} variant="contained" color="primary" >ADD TO CART </Button>
      </figcaption3>
      </figure>
      </div>
    
    
    <div className="bottom"></div>
    <div>
    <MuiThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        className= "chat_btn"
        startIcon={<ChatIcon />}>
        CHAT
      </Button></MuiThemeProvider>  
    </div>
    
    
        
        </>
   );

}
export default Pizzas;
Pizzas.export=[array];
