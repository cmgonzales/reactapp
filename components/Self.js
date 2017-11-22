import React from 'react';
import img from './one.jpg';
import Style from './style.css';

class Self extends React.Component {
  
  

    constructor(){
    super()
   this.state = {color_black: true
}
this.state={title: 'My React Page'};
   
  }

  changeColor(){
      this.setState({color_black: !this.state.color_black})
  }
 render() {
    
    let bgColor = this.state.color_black ? "black" : "white"
      return (
          
         <div>   
            <header><h1>{this.state.title}!</h1></header>  
            <main>     
            <img src={require('./one.jpg')} />
            <h3>What is a STATE?</h3>  <p> <br/> an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive</p>
            <h3>What is Props </h3> <p> <br/>Most components can be customized when they are created, with different parameters. These creation parameters are called props</p>        
            <h3>What is ReactDOM</h3><br/><p> serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.</p>
            <br/>
            <button style={{backgroundColor: bgColor}} onClick= {this.changeColor.bind(this)} className="button"  >click me</button>
            </main>
            <footer><a  href='https://cmgonzales.github.io/reactapp/'>GitHub Link</a></footer>
            </div>
            
            
      );
   }
}

export default Self;