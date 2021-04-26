import {React} from 'react';
import  { useState } from 'react';
import {NavLink} from "react-router-dom";
import "./Pizzas.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ChatIcon from '@material-ui/icons/Chat'
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import { useStateValue } from './StateProvider.js';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import Product from './Product.js'
import Select from 'react-select'


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

const options = [  { value: 1, label: 'Small' },
{ value: 2, label: 'Medium' },
{ value: 3, label: 'Large' }]

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

let array =[];
function Pizzas()
{
  const [{ basket }, dispatch] = useStateValue();
  const [size, setsize] = useState(0)
  const [quantity, setquantity] = useState(1)
  
  const classes = useStyles();
  
  
  const handleChange = (event) => {
    setsize(event.value);
    console.log(event,"event")
  };
  
  const add2basket = (e) => {

    const id = e
    let dict = {5:"All Cheese Pizza",6:"Chicken Tikka Pizza",
                7:"Chicken BBQ Pizza",4:"Pepperoni Pizza",
                 8:"Hawaiian Beef Pizza",9:"Veg lover"}
     const name = dict[id]
     const price_dict = {1:"500",2:"700",3:"1000"}
     let price = price_dict[size]
     console.log(name,"name")
      console.log(price_dict[size], "dict")
      console.log(price, "price")

     //console.log(id,name,price,quantity)
     dispatch(
       {
         type: 'ADD_TO_BASKET',
         item: {
           id: id,
           name: name,
           price: price,
           quantity: quantity,
           size: size,
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
                PEPPERONI PIZZA
                </figcaption1>
                <figcaption2>
                <form action="/action_page.php">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select options={options} onChange = {handleChange}/>
                </FormControl>
                </form>
               </figcaption2>
             <figcaption3> 
             <MuiThemeProvider theme={theme}> 
             <Button 
                onClick={() => add2basket(4)}
                size="medium"
                color ="primary"
                startIcon={<AddShoppingCartOutlinedIcon /> }
                variant="contained" color="primary" >ADD TO CART</Button>
                </MuiThemeProvider>
              </figcaption3>
    
              </figure>
           </div>
           <div class="squaretwo">


            <figure>
                <img src="https://pbs.twimg.com/media/DuHDPCTW4AA_Ecw.jpg" alt="" />
                <figcaption1>
                ALL CHEESE PIZZA
                </figcaption1>  
                <figcaption2> 
                <form action="/action_page.php">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select options={options} onChange = {handleChange}/>
                </FormControl>
                </form>
               </figcaption2> 
                <figcaption3> 
                <MuiThemeProvider theme={theme}> 
             <Button 
                onClick={() => add2basket(5)}
                size="medium"
                color ="primary"
                startIcon={<AddShoppingCartOutlinedIcon /> }
                variant="contained" color="primary" >ADD TO CART</Button>
                </MuiThemeProvider>
                </figcaption3>
            </figure>
          </div>

         <div className="squarethree">


        <figure>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFtNdi4vdc5hJALl7TeTdimgH0ACknlrvXw&usqp=CAU" alt=""/>
            <figcaption1>
            CHICKEN TIKKA PIZZA
           </figcaption1>
        <figcaption2>
        <form action="/action_page.php">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select options={options} onChange = {handleChange}/>
                </FormControl>
                </form>
        </figcaption2>
        <figcaption3>
        <MuiThemeProvider theme={theme}> 
             <Button 
                onClick={() => add2basket(6)}
                size="medium"
                color ="primary"
                startIcon={<AddShoppingCartOutlinedIcon /> }
                variant="contained" color="primary" >ADD TO CART</Button>
                </MuiThemeProvider>
        </figcaption3>
        </figure>
        </div>
        <div className="squarefour">


        <figure>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYj8HL9gLwZXecnWjtIlW2SETYHANOc1UYw&usqp=CAU" alt="" />
            <figcaption1>
            CHICKEN BBQ PIZZA
            </figcaption1>
            
        <figcaption2>
        <form action="/action_page.php">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select options={options} onChange = {handleChange}/>
                </FormControl>
                </form>
        </figcaption2>
       
        <figcaption3>
        <MuiThemeProvider theme={theme}> 
             <Button 
                onClick={() => add2basket(7)}
                size="medium"
                color ="primary"
                startIcon={<AddShoppingCartOutlinedIcon /> }
                variant="contained" color="primary" >ADD TO CART</Button>
                </MuiThemeProvider>
        </figcaption3>
        </figure>
        </div>
      <div className="squarefive">


        <figure>
            <img src="https://media.istockphoto.com/photos/southwestern-steak-pizza-picture-id641298020?k=6&m=641298020&s=612x612&w=0&h=UQWNiTWX3n8b1gGR1PUzNtyc3RB7jV7H62uOsk6lZ1o=" alt=""/> 
            <figcaption1>
            HAWAIIAN BEEF PIZZA
            </figcaption1>
           
        <figcaption2>
        <form action="/action_page.php">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select options={options} onChange = {handleChange}/>
                </FormControl>
                </form>
        </figcaption2>
        <figcaption3>
        <MuiThemeProvider theme={theme}> 
             <Button 
                onClick={() => add2basket(8)}
                size="medium"
                color ="primary"
                startIcon={<AddShoppingCartOutlinedIcon /> }
                variant="contained" color="primary" >ADD TO CART</Button>
                </MuiThemeProvider>
        </figcaption3>
        </figure>
      </div>
      <div className="squaresix">


      <figure>
        <img src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="" />
        <figcaption1>VEG LOVER
        </figcaption1>
        <figcaption2>
        <form action="/action_page.php">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select options={options} onChange = {handleChange}/>
                </FormControl>
                </form>
      </figcaption2>
         <figcaption3>
         <MuiThemeProvider theme={theme}> 
             <Button 
                onClick={() => add2basket(9)}
                size="medium"
                color ="primary"
                startIcon={<AddShoppingCartOutlinedIcon /> }
                variant="contained" color="primary" >ADD TO CART</Button>
                </MuiThemeProvider>
      </figcaption3>
      </figure>
      </div>
    
    
    <div className="bottom"></div>
    <div>

    </div>
    
    
        
        </>
   );

}
export default Pizzas;
// Pizzas.export=[array];
