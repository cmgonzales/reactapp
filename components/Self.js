import React from 'react';




class Self extends React.Component {


  constructor(props){
    super(props)


    this.state={title: 'My React Page'};
   

  }

   render() {
      return (
         <div>
            <h1 style={{textAlign: 'center'}}>{this.state.title}!</h1>
            <img src={('one.jpg')} />
            <p>What is a STATE? an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive</p>
            <p>Most components can be customized when they are created, with different parameters. These creation parameters are called props</p>        
            <p> serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.</p>
            </div>
         
      );
   }
}

export default Self;