import React, { Component, useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useStateValue } from "./StateProvider.js";
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import './ShoppingCart.css'
import {NavLink} from "react-router-dom"
import Product, {removeFromBasket} from "./Product.js"
import DeleteIcon from '@material-ui/icons/Delete';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import firebase from "firebase/app"
import 'firebase/firestore'
import OrderPlaced from "./OrderPlaced";

// fix quantity
// remove chatbot 
// delete


if (!firebase.apps.length) {
  firebase.initializeApp ({
    apiKey: "AIzaSyD7fhRckLD2ITWJszeYZMQccH_WT90hCfw",
    authDomain: "thstreetpizza-c7f22.firebaseapp.com",
    projectId: "thstreetpizza-c7f22",
    storageBucket: "thstreetpizza-c7f22.appspot.com",
    messagingSenderId: "403131599419",
    appId: "1:403131599419:web:6b56a920489c241df0ea1e"
  })
}else {
  firebase.app(); // if already initialized, use that one
}
//  initizalize db
const db = firebase.firestore();

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


  class GroupedButtons extends React.Component {
    state = { counter: 1 };
  
    handleIncrement = () => {
      this.setState((state) => ({ counter: state.counter + 1 }));
    };
  
    handleDecrement = () => {
      this.setState((state) => ({ counter: state.counter - 1 }));
    };
    render() {
      const displayCounter = this.state.counter > 0;
  
      return (
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button onClick={this.handleIncrement}>+</Button>
          {displayCounter && <Button disabled>{this.state.counter}</Button>}
          {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
        </ButtonGroup>
      );
    }
  }

  const useStylesDelete = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  
const ShoppingCart = (id) =>{

    const [{ basket }, dispatch] = useStateValue();
    //console.log(basket,"basket")

    const useStyles = makeStyles({
      table: {
        minWidth: 700
      }
    });

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  
  function priceRow(qty, unit) {
    return qty * unit;
  }
  
  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }
  
  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  //console.log(basket.length, "length")

  let rows =[]
  const tabs = (bas) =>{
    //console.log(rows,"rows0")
    for (let i =0;i<bas.length;i++)
    {
      rows.push(createRow(bas[i].name,bas[i].quantity,bas[i].price))
    }
    //console.log(rows,"rows")
  }
 
  tabs(basket)
  const invoiceSubtotal = subtotal(rows);
  const invoiceTotal =invoiceSubtotal;


  const classes = useStyles();
  const classes_del = useStylesDelete();

  const [Fullname,setname] = React.useState("");
  const handleChangeName = (event) => {
    setname(event.target.value);
  };

  const[phone, setphone] = React.useState("");
  const handleChangephone = (event) => {
    setphone(event.target.value);
  };

  const[address, setaddress] = React.useState("");
  const handleChangeAddress = (event) => {
    setaddress(event.target.value);
  };

  function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
   return result.join('');
  }
  

  let cid = makeid(6) 
  let order_id = makeid(5)
  const history = useHistory();
  const submitCustomerDetails = ()  =>{

 console.log(basket)
 if(basket.length==0)
 {
   alert("basket empty")
 }
 else if(address ==="" || phone ==="" || Fullname ==="")
 {
   alert("text field missing")
 }
 else
 {
  
      const queue = db.collection("Order Queue").doc(cid).set({
      "OrderDetails": basket,
      "OrderID": order_id,
      "CustomerID": cid,
      "OrderStatus": false,
      });
     

    const userDetails = db.collection("Order History").doc(cid).set({
        "CustomerAddress":address,
        "PhoneNumber" : phone,
        "OrderDetails": basket,
        "OrderID": order_id,
        "CustomerID": cid,
        "OrderStatus": false,
        });
        history.push("/orderplaced")
 }
}
    
  
 return(
        <>
            <div className="top">
              <img src="images/logo.PNG" alt=""/>
              <NavLink exact activeClassName="active_class" to="/" >
                <MuiThemeProvider theme={theme}>
                <Button 
                 variant="contained" 
                 color="secondary" 
                  >BACK TO MENU</Button>
                </MuiThemeProvider>
                </NavLink>  
            </div>
            
            <div className="flexcont">
                <div className="shoppingcart">
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow key={row.desc}>
                        <TableCell>{row.desc}
                       </TableCell>
                        <TableCell align="right">
                        <GroupedButtons />
                        </TableCell>
                        <TableCell align="right">{row.unit}
                        </TableCell>
                        <TableCell align="right">{ccyFormat(row.price)}                        
                        </TableCell>
                    </TableRow>
                    ))}
        
                    <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                    </TableRow>
                    </TableBody>
                    </Table>
                    </TableContainer>
                </div>
               
               
               
                <div className="contactdetails">
                    
                    <h3> Contact Details</h3>
                    <form >
                        <div className="inputdetails">
                            <div className="details"><p>Full Name:</p></div>
                            <input type="text" placeholder="Enter your name" required onChange={handleChangeName}></input>
                        </div> 
                        <div className="inputdetails">
                            <div className="details"><p>Phone number:</p></div>
                            <input type="text" placeholder="Enter your phone number"   required onChange={handleChangephone}></input>
                        </div> 
                        <div className="inputdetails">
                            <div className="details"><p>Address:</p></div>
                            <input type="text" placeholder="Enter your address"   required onChange={handleChangeAddress}></input>
                        </div> 
                        
                        
                        <div class="placeorder">
                        <MuiThemeProvider theme={theme}>
                        <Button 
                        
                        variant="contained" 
                        color="secondary"
                        size ="large" 
                        onClick = {submitCustomerDetails}>Place Order </Button>
                        </MuiThemeProvider>
                        
                        </div>
                        
                        
                       

                    </form>
                </div>
            </div>
                
                
        </>
    );

}

export default ShoppingCart;