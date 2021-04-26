import React from 'react'
import './OrderPlaced.css'
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
  

function OrderPlaced()
{
    return(
        <>
        <div className="top">
                <img src="images/logo.PNG" alt=""/>
        </div>
        <div className="backtomenu">

        <MuiThemeProvider theme={theme}>
                <NavLink exact activeClassName="active_class" to="/" >
                <Button  className="backtomenubutton" variant="contained" color="secondary" >BACK TO MENU</Button>
                </NavLink>
        </MuiThemeProvider>
        </div>

        <div >
            <img className="op" src="/images/orderPlaced1.PNG"></img>
        </div>
        </>
    );
}

export default OrderPlaced;