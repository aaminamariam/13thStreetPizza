import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Cards from "./Cards.js";
import Carousel from "react-elastic-carousel";
import firebase from "firebase/app"
import 'firebase/firestore'


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
export const db = firebase.firestore();

const styles = theme => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),

      },
      display:'flex',
      justifyContent: 'space-between',
    },
    
  });



class ShowFeedback  extends Component{
    
    constructor(){
        super();
    this.state={Feedback:null}
}
   
    componentDidMount(){
        db.collection('Feedback')
          .get()
          .then(snapshot =>{
            const Feedback=[]
            snapshot.forEach(doc=>{
              const data=doc.data()
              Feedback.push(data) 
             
            })
            this.setState({Feedback:Feedback})
            console.log('feedback',Feedback)
           
        
          
          })
          .catch(error => console.log(error))
          
         
    }
    render(){
         let feedbackCards=this.state.Feedback && this.state.Feedback.map(Feedback=> {
             return(
                     <Cards Feedback={Feedback}/> 
             )
          
         })
        const { classes }=this.props;
      
        return( 
            <>
               
            
                    <div>
                         <div className = {classes.root}> 
                             <Carousel>
                                 {feedbackCards}
                             </Carousel>
                          </div>
                    </div>   
            
            </>
                  );
    }

}

export default withStyles(styles)(ShowFeedback);
