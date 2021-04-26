import React from 'react';
import "./Feedbacksubmitted.css";
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'firebase/firestore'
import {NavLink} from "react-router-dom";


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
  
function Feedbacksubmitted()
{
    return(
        <>
                <div className="page">
                <div className="backtomenu" >
                <MuiThemeProvider theme={theme}>
                <NavLink exact activeClassName="active_class" to="/" >
                <Button  className="backtomenubutton" variant="contained" color="secondary" >BACK TO MENU</Button>
                </NavLink>
                </MuiThemeProvider>
                </div>

                <div className="head"></div>
                <div  className="feedbackbg">
                <div className="sub_logo"></div></div>
                <div  className="feedbackbg2"> <img src = "/images/feedbacksubmitted.png" /></div>
                <span  className="feedbacktext">FEEDBACK</span>
               
                </div>
               
                <div className="logoarea"><div className="logorect"></div><div className="logo"></div></div>
               
                

          </>
    );
}
export default Feedbacksubmitted;
