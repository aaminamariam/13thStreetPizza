import React from 'react';
import  { useState } from 'react';
import {NavLink} from "react-router-dom";
import "./Sides.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import { useStateValue } from './StateProvider.js';
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

  const options = [  { value: 1, label: '4 pieces' },
  { value: 2, label: '8 pieces' },
  ]
  
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

function Sides()
{
    const [{ basket }, dispatch] = useStateValue();
    const [size, setsize] = useState(0)
    const [quantity, setquantity] = useState(1)

    const classes = useStyles();
    
    const handleChange = (event) => {
      setsize(event.value);
    };
  

  
  const add2basket = (e) => {


    const id = e
    let dict = {10:"Garlic Bread",11:"Potato Wedges",
                12:"Chicken Wings"}
     const name = dict[id]
     let price_dict = {}
     if (dict[id] == 12)
     {price_dict = {1:"300",2:"500"}}
     else 
     {price_dict = {1:"250",2:"400"}}
     
     const price = price_dict[size]
     setquantity(quantity + 1);
     console.log(price,"price")
     console.log(quantity,"qty")
    

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
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select options={options} onChange = {handleChange}/>
                </FormControl>
                </form>
                </figcaption5>
                </p>
                <figcaption6>
                <MuiThemeProvider theme={theme}> 
                <Button 
                onClick={() => add2basket(10)}
                size="medium"
                color ="primary"
                startIcon={<AddShoppingCartOutlinedIcon /> }
                variant="contained" color="primary" >ADD TO CART</Button>
                </MuiThemeProvider>
                </figcaption6>
                </figure>
            </div>
            <div className="square2">
                <figure>
                    <img src="/images/potatowedges.png" alt=""/>
                    <figcaption4>
                    Potato wedges
                </figcaption4>
                    <p>
                <figcaption5>
                <form action="/action_page.php">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select options={options} onChange = {handleChange}/>
                </FormControl>
                </form>
                </figcaption5>
                </p>
                <figcaption6>
                <MuiThemeProvider theme={theme}> 
                <Button 
                    size="medium"
                    color ="primary"
                    onClick={() => add2basket(11)}
                    startIcon={<AddShoppingCartOutlinedIcon /> }
                    variant="contained" color="primary" >ADD TO CART</Button>
                    </MuiThemeProvider>
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
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select options={options} onChange = {handleChange}/>
                </FormControl>
                </form>
                </figcaption5>
                </p>
                <figcaption6>
                <MuiThemeProvider theme={theme}> 
                <Button 
                    onClick={() => add2basket(12)}
                    size="medium"
                    color ="primary"
                    startIcon={<AddShoppingCartOutlinedIcon /> }
                    variant="contained" color="primary" >ADD TO CART</Button>
                </MuiThemeProvider>
                </figcaption6>
                </figure>
            </div>
        
            </h4>

        </>
   );

}
export default Sides;