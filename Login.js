import React from "react";
import "./Feedback.css";
import {Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import firebase from "firebase/app"
import Oh from "./orderhistory";
import 'firebase/firestore'
import {NavLink} from "react-router-dom";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import "firebase/auth";
import { useHistory } from "react-router-dom"

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

  const useStylesName = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "72ch",
        }
    }}
    ));

    const useStyles = makeStyles((theme) => ({
        root: {
            "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "72ch",
            }
        }}));


function Login()
{
    const [value, setValue] = React.useState()
    // rating
    const handleChangevalue = (event) => {
        setValue(event.target.value);
    };

    
    const [email, setemail] = React.useState('')
    const handleChangeEmail = (event) => {
        setemail(event.target.value);
        
    };


    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      
      const history = useHistory();
      const authenticate =() =>
      {
        console.log(email, values.password)
        firebase.auth().signInWithEmailAndPassword(email, values.password)
        .then((userCredential) => {
          // Signed in
        if(email ==="staff@gmail.com")
        {
          history.push("/orderqueue_Staff")
        }
        else{
        history.push("/orderhistory")
        }
        })
        .catch((error) => {
          alert("wrong email/password please try again")
          setemail("")
          setValues(values.password ="")
        });
        
      }

    const classesName = useStylesName();

    // const [feedback, setfeedback] = React.useState()
    // const handleChangefeedback = (event) => {
    //     setfeedback(event.target.value);
    // };

    const classes = useStyles()

    return(
        
        <>
                <div className="page">

                <div className="head"></div>
                <div  className="feedbackbg">
                <div className = "abc"></div>
                </div>
                <div  className="feedbackbg2"></div>
                <span  className="feedbacktext">LOGIN</span>

                
                <form className={classesName.root} noValidate autoComplete="off">
                <div className="fbname">
                    <TextField 
                    label= "Uncontrolled"
                    className={classes.margin}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    id="standard-name"
                    label="Email"
                    
                    onChange={handleChangeEmail}
                    />
                </div>
                </form>
                
                <div className="fbdescription">
                
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password" size = "medium">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChangePassword('password')}
                        startAdornment = {
                        <InputAdornment position="start">
                            <VpnKeyOutlinedIcon/>  
                        </InputAdornment>
                        }
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    </FormControl>
                
                </div>
                

                <div className="logoarea"><div className="logorect"></div><div className="logo"></div></div>
                <div className="sf">
                    <MuiThemeProvider theme={theme}>
                    {/* <NavLink exact activeClassName="active_class" to = "/orderhistory" > */}                        <Button className="sf_button" variant="contained" color="primary" onClick ={authenticate}>Login</Button>

                    </MuiThemeProvider>
                </div>
                </div>

          </>
    );
}
export default Login;
