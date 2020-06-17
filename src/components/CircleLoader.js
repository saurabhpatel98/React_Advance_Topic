    
import React, { Component } from "react";
import Shimmer from "react-shimmer-effect";
import injectSheet from "react-jss";
     
  const StyleSheet = {
    container: {
      border: "0px solid rgba(255, 255, 255, 1)",
      borderRadius: "4px",
      padding: "16px",
      width: "400px",
     
    },
    circle: {
      height: "150px",
      width: "150px",
      borderRadius: "50%",
      marginLeft:'10px',
      marginTop:'20px'

    },
  };
  class Loader extends Component {
    render() {
      const { classes } = this.props;
        return (
            <>
          <div className={classes.container}>
            <Shimmer>
                <div className={classes.circle}/><br/>
                <div className={classes.circle}/><br/>
                <div className={classes.circle}/>
            </Shimmer>
          </div>
        </>);
    }
  }
     
export default injectSheet(StyleSheet)(Loader);