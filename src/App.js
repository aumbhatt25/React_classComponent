import './App.css';
import { Component } from 'react';

class NewClass extends Component{
  constructor(props){
    super(props);
    this.state = {color: 'red'};
    this.state = {visible: true};
  }
  changeColor = () => {
    this.setState({color: 'blue'})
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({color: 'green'})
    }, 1000)
  }
  componentDidUpdate(){
    document.getElementById('mydiv').innerHTML='Color is updated';
  }

  delHeader = () => {
    this.setState({visible: false})
  }

  render(){
    let header;
    if(this.state.visible){
      header = <Unmount />
    }
    return(
      <div className='App'>
        <button onClick={this.changeColor}>Change Color</button>
        <h3>color is {this.state.color}</h3>
        <div id="mydiv"></div>
        {header}
        <button onClick={this.delHeader}>Delete Header</button>
        <h2>App is {this.props.name}</h2>
      </div>
    );
  }
}

class Unmount extends Component{
  componentWillUnmount(){
    alert('Header is going to be deleted');
  }
  render(){
    return(<h2>This is Header</h2>);
  }
}

export default NewClass;
