import React from "react";
import FuncComp from '../Components/Functional';
//class component

class ClassComponent extends React.Component{
    render(){
        return(
            <h6><FuncComp></FuncComp>TietoEvry India pvtlmtd <ClassComponent1></ClassComponent1></h6>
        )
    }
}

class ClassComponent1 extends React.Component{
    render(){
        return(
            <h6>Dlithe Technical Training <FunctionalComponent></FunctionalComponent></h6>
        )
    }
}

function FunctionalComponent()
{
 return(
    <h4>I AM A FUNCTIONAL COMPONENT</h4>
 )
}

export default ClassComponent;
