import React,{Component} from "react";
import Card from "@material-ui/core/Card";
import "./Cards.css"
import CardContent from "@material-ui/core/CardContent";
import {Grid} from "@material-ui/core";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
    card:{
        // width: 200,
        // height:150,
        backgroundColor:'pink',
        align :'inherit',
        minWidth:300,
      
      
      
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
      },
    gridList: {
        flexWrap: 'nowrap'
      }

});

class Cards extends Component{
     
     constructor(props){
         super(props);
      
     }
    render()
    {
    const { classes }=this.props;
    return (
        <div className="row">
  <div className="row__posters">
      <div className="row__poster row__posterLarge">
  
  
           <Card className={classes.card}>
                <CardContent>
                <Typography>
                    <h2>
                    {this.props.Feedback.CustomerName}
                    </h2>
                    <p>
                    {this.props.Feedback.Description}
                    </p>
                    {/* <h4>
                    {this.props.Feedback.Rating}
                    </h4> */}
                </Typography>
                </CardContent> 
            </Card>
            
     
      </div>
      </div>
</div>

       
     
    );
}}
 
export default withStyles(styles)(Cards);
        {/* <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
            <Card className={classes.card}>
                <CardContent>
                    <h2>
                    {this.props.Feedback.CustomerName}
                    </h2>
                    <h3>
                    {this.props.Feedback.Description}
                    </h3>
                    <h4>
                    {this.props.Feedback.Rating}
                    </h4>
                </CardContent> 
            </Card>

        
      </GridList>
      </div>
    );
    }} */}
    

    /* <div className="root">
   
 
        <Grid item md={10}> 
        <GridList className={classes.gridList} cols={2.5}>
            <Card className={classes.card}>
                <CardContent>
                    <h2>
                    {this.props.Feedback.CustomerName}
                    </h2>
                    <h3>
                    {this.props.Feedback.Description}
                    </h3>
                    <h4>
                    {this.props.Feedback.Rating}
                    </h4>
                </CardContent> 
            </Card>
            </GridList>
        </Grid>
    </Grid> 
    </div> */
 
