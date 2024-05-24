import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
    greeting:'Hey',
    title: 'React'
};

function getTitle()
{
  return welcome.title ;
}

const list = [
  {
    title:'Angular',
    url:'https://angular.js.org/',
    author:'Dan Abramov, Andrew Clark',
    num_comments:5,
    points:1,
    objectId:0
  },
  {
    title:'React',
    url:'https://reactjs.org/',
    author:'Jordan Walke',
    num_comments:3,
    points:4,
    objectId:1
  },
  {
    title:'Redux',
    url:'https://redux.js.org/',
    author:'Dan Abramov, Andrew Clark',
    num_comments:2,
    points:5,
    objectId:2
  }
]

const numbers = [0,1,2,3,4];
const initialValue = 0;

function App() {

  return (
    <div>
      <h1>My hacker stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text"/>
      <hr/>

      <ul>
        {list.map(function (item){
            return <li key={item.objectId}>
              <span>
              <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>,
              <span>{item.num_comments}</span>
              </li>
        })}
      </ul>

      <div>
        {/*reduce method */}
        <h1>{numbers.reduce((accumulator, currentValue)=>accumulator+currentValue, initialValue)}</h1>       
      </div>
    </div>
  )
}

export default App
