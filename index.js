import Hello from './Hello';
import './style.css';
import React, {Component} from 'react';
import {render} from 'react-dom';
function Myapp()
{
  return (
     <ul>
     <li>1</li>
     <li>2</li>
     <li>3</li>
     <li>4</li>
     </ul>
     );

}

//1.//render(<div><h1>hii i am love </h1><p1>this is my react</p1></div>, document.getElementById('root'));
//2.render(<ul><li>1</li><li>2</li><li>3</li><li>4</li></ul>,
//document.getElementById('root'));
render(<Myapp/>,document.getElementById('root'));

