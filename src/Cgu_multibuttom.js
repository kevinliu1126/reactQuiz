import React from 'react';
import ReactDOM from 'react-dom';
const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText = event.target.innerText + "被點了"
}
const MultiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i) {
   output.push(<CounterButton variant="contained" color="primary"
   onClick={changeText}>第{i}個按鍵 </CounterButton>)
   }
    return output;
}
export default MultiButton;
class CounterButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(event){
        this.setState({counter:this.state.counter+1});
        console.log(this.state);
    }
    render(){
        var text=this.state.counter;
        return(
            <button onClick={this.handleClick}>
                你點了{text}次.
            </button>
        );
    }
}
ReactDOM.render(<CounterButton/>,document.getElementById('root'));