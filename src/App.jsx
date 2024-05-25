import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
  greeting: 'Hey',
  title: 'React'
};

function getTitle() {
  return welcome.title;
}

const numbers = [0, 1, 2, 3, 4];
const initialValue = 0;

const App = () => {

  const greeting = {
    title: "Hello Saurabh",
    description: "This is a greeting for Saurabh"
  };

  const stories = [
    {
      title: 'Angular',
      url: 'https://angular.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 5,
      points: 1,
      objectId: 0
    },
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectId: 1
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectId: 2
    }
  ]

  return (
    <div>
      <h1>My hacker stories</h1>
      <hr />
      <Search />
      <div>
        {/*reduce method */}
        <h1>{numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)}</h1>
      </div>

      <List list={stories} />
      <Greeting detail={greeting}></Greeting>
      <Greeting detail={{title:"Hi Saurabh, Welcome", description:"Saurabh's greeting"}}></Greeting>
      
      {/*Spread props*/}
      <Greeting2 {...greeting}></Greeting2>

      <Greeting3 title={greeting.title} description={greeting.description}></Greeting3>
    </div>
  )
};

const Greeting = (props) => (
  <div>
    <h2>{props.detail.title}</h2>
    <h2>{props.detail.description}</h2>
  </div>
);

const Greeting2 = ({title, description}) => (
  <div>
    <h2>{title}</h2>
    <h2>{description}</h2>
  </div>
);

const Greeting3 = ({title, description}) => (
  <div>
    <h2>{title}</h2>
    <h2>{description}</h2>
  </div>
);

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectId} item={item}></Item>
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>,
    <span>{props.item.num_comments}</span>
  </li>
);

const Search = () => {

  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

  const handleBlur = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

  const handleClick = (input) => {
    console.log('Button click');
    console.log(input);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} onBlur={handleBlur} />
      <button id="button1" type="button" onClick={() => handleClick('test')}>Event handler</button>
    </div>
  )
};


export default App
