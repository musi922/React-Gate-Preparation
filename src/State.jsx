import React, { createContext, Fragment } from "react";
import PropTypes from "prop-types"

const colors={
    first:"blue",
    sec:"yellow"
}
const MoodContext = createContext(colors)
export default function State() {
  
  
    return (
        <MoodContext.Provider value={colors.first}>
        <h1 style={{color:colors.first}}>here is text</h1>
        </MoodContext.Provider>
    );

}

