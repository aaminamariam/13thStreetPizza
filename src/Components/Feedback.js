import React from 'react';
import "./Feedback.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Rating from '@material-ui/lab/Rating';
import firebase from "firebase/app"
import 'firebase/firestore'
import {NavLink} from "react-router-dom";

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
  const theme2 = createMuiTheme({
    palette: {
            primary: {
                main:"#FFFFFF"
            }
        }
  });
  const StyledRating = withStyles({
    iconFilled: {
      color: "#B00020"
    },
    iconHover: {
      color: "#B00020"
    },
    iconEmpty: {
        color: "#000000"
      }
  })(Rating);
// for icons
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };

  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;}

    IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
      };

    const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "72ch",
        }
    }}));

    const useStylesName = makeStyles((theme) => ({
        root: {
          "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "72ch"
          }
        }
      }));



function Feedback()
{

    const classes = useStyles();
    const [value, setValue] = React.useState();
    // rating
    const handleChangevalue = (event) => {
        setValue(event.target.value);
    };

    const classesName = useStylesName();
    const [name, setName] = React.useState();
    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const [feedback, setfeedback] = React.useState();
    const handleChangefeedback = (event) => {
        setfeedback(event.target.value);
    };


    const submit_feedback = ()  =>{
        console.log(name)
        console.log(feedback)
        console.log(value)
        const userRef = db.collection("Feedback").doc(name).set({
            "Customer Name": name,
            "Description" : feedback,
            "Rating": value,
            });
        
     }


    return(
        <>
                <div className="page">
                <div className="backtomenu" >
                <MuiThemeProvider theme={theme}>
                <NavLink exact activeClassName="active_class" to="/deals" >
                <Button  className="backtomenubutton" variant="contained" color="secondary" >BACK TO MENU</Button>
                </NavLink>
                </MuiThemeProvider>
                </div>

                <div className="head"></div>
                <div  className="feedbackbg"></div>
                <div  className="feedbackbg2"></div>
                <span  className="feedbacktext">FEEDBACK</span>
            
                <form className={classesName.root} noValidate autoComplete="off">
                <div className="fbname">
                    <TextField
                    id="standard-name"
                    label="Name"
                    value={name}
                    onChange={handleChangeName}
                    />
                </div>
                </form>

                    <form className={classes.root} noValidate autoComplete="off">
                    <div className="fbdescription">
                    <TextField
                    id="outlined-multiline-static"
                    label="How was your Experience"
                    multiline
                    rows={10}
                    // defaultValue="dsfsd"
                    value={feedback}
                    onChange={handleChangefeedback}
                    variant="outlined"
                    />
                    </div>
                    </form>

                <div className="rating">
                <Box component="fieldset" mb={3} borderColor="transparent">
                <MuiThemeProvider theme={theme}>
                <Typography component="legend" color ="primary">RATING</Typography></MuiThemeProvider>
                    <StyledRating
                    name="customized-icons"
                    defaultValue={value}
                    getLabelText={(value) => customIcons[value].label}
                    onChange={handleChangevalue}
                    IconContainerComponent={IconContainer}
                    />

                </Box>
                </div>
                <div className="logoarea"><div className="logorect"></div><div className="logo"></div></div>
                <div className="sf">
                    <MuiThemeProvider theme={theme}>
                    <NavLink exact activeClassName="active_class" to="/feedbacksubmitted" >
                        <Button className="sf_button" variant="contained" color="primary" onClick={submit_feedback}>Submit Feedback</Button>
                    </NavLink>
                    </MuiThemeProvider>
                </div>
                </div>

          </>
    );
}
export default Feedback;
