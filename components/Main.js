import React from 'react';

import Self from './Self.js';
import Nav from './nav.jsx';

class Main extends React.Component {

   render() {
      return (
        <div>
        <Nav/>
            <Self/>
       
         </div>
      );
   }
}

export default Main;
