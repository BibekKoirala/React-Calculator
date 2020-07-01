import React, { Component } from 'react';
import { Jumbotron, Container, Button, Alert, Row } from 'reactstrap';

class Calculator extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             numbers: [9,8,7,6,5,4,3,2,1,0],
             operators: ['+','-','*',"/","="],
             result: 0,
             onDisplay : []
        }

        this.handleClick = this.handleClick.bind(this)
    }
    

    handleClick=(event)=>{

        const val=event.target.value

        if(!this.state.operators.includes(this.state.onDisplay[this.state.onDisplay.length-1]) || !this.state.operators.includes(val)){
        
            if(val !== "="){
            this.setState(prevState=>{
                return {
                    onDisplay : [...prevState.onDisplay , val]
                }
            })
        }
        else{
            let num1="";
            let num2="";
            let operator="";
            for(let item of this.state.onDisplay) {

                if(this.state.operators.includes(item)){
                    if(num2===""){
                        operator=item
                    }
                else{
                    let n1=parseInt(num1);
                    let n2=parseInt(num2);
                    if(operator==="+"){
                        n1=n1+n2;
                    }
                    else if(operator==="-"){
                        n1=n1-n2;
                    }
                    else if(operator==="*"){
                        n1=n1*n2;
                    }
                    else{
                        n1=n1/n2;
                    }
                    num1=n1.toString();
                    num2="";
                    operator=item;
                }
                }
            else{

                if(operator===""){
                    num1=num1+item.toString()
                }
                else{
                    num2=num2+item.toString()
                }
            }
        }

        let intn1=parseInt(num1);
        let intn2=parseInt(num2);
        let result=0

        if(operator==="+"){
            result=intn1+intn2
        }
        else if(operator==="-"){
            result=intn1-intn2
        }
        else if(operator==="*"){
            result=intn1*intn2
        }
        else if(operator==="/"){
            result=intn1/intn2;
        }
        this.setState({
            onDisplay: [],
            result:result
        })
    }
    }
    }

    OnDisplay =()=>{
        if(this.state.result!==0 || this.state.onDisplay.length===0){
            return <div style={{"float":"right"}}>{this.state.result}</div>
         }
         else{
             return  <div style={{"float":"right"}}>{this.state.onDisplay}</div>
         }
     }

     clearOnce=()=>{
        if(this.state.onDisplay.length !== 0){
            let list= this.state.onDisplay;
            list.pop();
            this.setState(prevstate=>{
                return {onDisplay:list,
                result:0}
            })
         }
         if(this.state.result!==0){
            this.setState({
                result:0
            })
         }
     }

     clearAll=()=>{
         this.setState({
             onDisplay:[],
             result:0
         })
     }

    render() {

        const Numbers=this.state.numbers.map(value=>{
            if(value%3===0){
                return <span key={value}><div className="col-lg-4" ></div><Button outline
                color="secondary" 
                size="lg" 
                onClick={(e)=>{this.handleClick(e)}} 
                value={value}>{value}</Button>{' '}</span>
            }
            else{
                return <span key={value}> <Button outline
                color="secondary" 
                className="forNumbers"
                size="lg" 
                onClick={(e)=>{this.handleClick(e)}} value={value}>{value}</Button></span>
            }
           
        })

        const Operators = this.state.operators.map((value,index)=>{
            if(value%3===0){
                return <span key={value} ><div className="col-lg-4" key={value}></div><Button outline
                color="secondary" 
                size="lg" 
                value={value}
                onClick={this.handleClick}>{value}</Button>{' '}</span>
            }
            else{
                return <span key={value} > <Button outline
                color="secondary" 
                className="forNumbers" 
                size="lg"
                value={value}
                onClick={this.handleClick}>{value}</Button></span>
            }
        })

        return (
            <div className="Calcmain">
            <Jumbotron  className="CalculatorBody" style={{"paddingTop": "20px"}}>
                <h3>Calculator</h3>
                <Container >
                <Alert color="warning" style={{"height":"50px"}}>
                
                 {
                     this.OnDisplay()
                 
                 }
                 </Alert>
                 <div className="Row">
                 <Button outline
                color="secondary" 
                size="lg" 
                onClick={this.clearOnce}>BackSpace</Button>
                {` `}
                <Button outline
                color="secondary" 
                size="lg" 
                onClick={this.clearAll}>Clear All</Button>
                <div className="col-lg-12 numbers">
                {Numbers}
                </div>
                <div className="col-lg-12"> 
                {Operators}
                </div>
                </div>
                </Container>
             </Jumbotron>
            </div>
        );
    }
}

export default Calculator;