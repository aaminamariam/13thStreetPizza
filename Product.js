import React, { useState, useEffect } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider.js";
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';


function Product({ id, name, price, size }) {
    const [{ basket }, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(1);
  
    const add2basket = () => {
      
      console.log(basket)
      setQuantity(quantity + 1);
  
      dispatch(
        {
          type: 'ADD_TO_BASKET',
          item: {
            id: id,
            name: name,
            price: price,
            quantity: quantity, 
            size: size
          }
        }
      )
    }

  //   const removeFromBasket = () => {
  //     dispatch(
  //         {
  //           type: 'REMOVE_FROM_BASKET',
  //           name: name,
  //         })
  // }
  
    return (
      <div className="product">
        <div className="product__info">
          <p className="product__title">{name}</p>
          {/* <p className="product__price">
            <small>Rs</small>
            <strong>{price}</strong>
         </p>  */}
  
        </div>
        
        <Button 
             onClick={add2basket} 
             variant="contained" 
              size="large" 
             color="primary"
             startIcon={<AddShoppingCartOutlinedIcon />
            } >ADD TO CART</Button>
            
      </div>
    );
  }
  
  export default Product;
  