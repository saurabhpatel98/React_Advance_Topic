    
import React, { Component } from "react";
import Shimmer from "react-shimmer-effect";
import injectSheet from "react-jss";
     
  const StyleSheet = {
    container: {
      border: "0px solid rgba(255, 255, 255, 1)",
      borderRadius: "4px",
      padding: "16px",
      width: "400px"
    },
    circle: {
      height: "100px",
      width: "100px",
      borderRadius: "50%"
    },
    line: {
      width: "200px",
      height: "30px",
      alignSelf: "center",
      marginTop:"10px",
      borderRadius: "8px",
      marginBottom:'19px'
    },
    lineHead:{
      width: "200px",
      height: "10px",
      marginTop:'10px',
      marginLeft:'25px',
      borderRadius: "8px"
    }
  };
  class Loader extends Component {
    render() {
      const { classes } = this.props;
        return (
            <>
          <div className={classes.container}>
            <Shimmer>
              <div className={classes.line} />
              <div className={classes.lineHead}/>
              <div className={classes.lineHead} />
              <div className={classes.lineHead} />
              
            </Shimmer>
            
          </div>
        </>);
    }
  }
     
export default injectSheet(StyleSheet)(Loader);