import React from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from "react-router-dom"; 
import './orderhistory.css';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import {useState,useEffect} from 'react';
import firebase from "firebase/app"
import 'firebase/firestore'
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from '@material-ui/core/Table';

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

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const useStylesTable = makeStyles({
  table: {
    height:50,
    minWidth: 700,
  },
});

function createRow(Order_id, Customer_id, [o_name,a,o_qty], customer_address) {
  let Order_details = [o_name,a,o_qty]
  return { Order_id, Customer_id, Order_details, customer_address };
}

const rows = [];



const Oh =() =>{ 
  const[posts,setposts] = useState([]);
  const classes = useStylesTable();

  useEffect(() => {
    db.collection("Order History").onSnapshot(snapshot => {setposts(snapshot.docs.map(doc=>doc.data()))
    })
  }, [])

  posts.forEach((element,index)=>{
     let orderid = element.OrderID
     let customerid = element.CustomerID
     let order_details = element.OrderDetails

     let p_id = order_details[0].id
     let o_name = order_details[0].name
     let o_price = order_details[0].price
     let o_qty = order_details[0].quantity
     let address = element.CustomerAddress

    rows.push(createRow(orderid,customerid,[o_name," ",o_qty],address))
  })

  return (
 
    <div>    
    <div className="top">
            <img src="images/logo.PNG" alt=""/>
    </div>
    <div className="black"> 
            <NavLink exact activeClassName="active_class" to="/orderhistory" >
            <button className="button active" variant="contained" >Order History</button>
            </NavLink>
            
            <NavLink  exact activeClassName="active_class" to="/orderqueue_Manager" >
            <button className="button oh " variant="contained" >Order Queue</button>              
            </NavLink> 
    </div>

        <NavLink exact activeClassName="active_class" to="/login" >
        <MuiThemeProvider theme={theme}>
          <Button  className = "button logout"
            variant = "contained" 
            color = "primary" 
            size="small" 
            >logout
          </Button>
        </MuiThemeProvider>
        </NavLink>
        
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>  
            <TableCell>Order ID</TableCell>
            <TableCell align="right">Customer ID</TableCell>
            <TableCell align="right">Order Details</TableCell>
            <TableCell align="right">Customer Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell>{row.Order_id}</TableCell>
              <TableCell align="right">{row.Customer_id}</TableCell>
              <TableCell align="right">{row.Order_details}</TableCell>
              <TableCell align="right">{row.customer_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    

  );
}
export default Oh;
