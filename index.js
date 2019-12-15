import Hello from './Hello';
import './style.css';
import React, {Component} from 'react';
import {render} from 'react-dom';
//3.//function Myapp(){return (<ul><li>1</li><li>2</li><li>3</li><li>4</li></ul>);}

//1.//render(<div><h1>hii i am love </h1><p1>this is my react</p1></div>, document.getElementById('root'));
//2.render(<ul><li>1</li><li>2</li><li>3</li><li>4</li></ul>,
//document.getElementById('root'));
function Myinfo()
{
  return (
    <div>
    <h1>Love Bhatia</h1>
    <p>I am software developer in Newgen Software</p>
    <ul>
      <li>India</li>
      <li>Switzerland</li>
      <li>Srilanka</li>
      </ul>
    </div>
  );
}
render(<Myinfo/>,document.getElementById('root'));

