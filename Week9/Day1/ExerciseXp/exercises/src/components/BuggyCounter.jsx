import React,{Component} from "react";

class BuggyCounter extends React.Component{
        constructor(props){
                super(props);
                        this.state={counter:0}
                }
        

        handleClick=()=>{
                this.setState(prevState=>{
                        const newCounter = prevState.counter + 1
                        if(newCounter===5){
                                throw new Error("Falled")

                        }
                       return {counter: newCounter};
                })

        }

        render(){
                return(
                        <>
                        <h1>Counter:{this.state.counter}</h1>
                        <button onClick={this.handleClick}>Click</button>
                        </>
                )
        }
}
export default BuggyCounter;
