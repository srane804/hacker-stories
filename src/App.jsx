import React, { useState } from 'react'
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
const searchTerm = '';

const App = () => {

  console.log('App renders');

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

  const greeting = {
    title: "Hello Saurabh",
    description: "This is a greeting for Saurabh"
  };

  const [count, setCount] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>My hacker stories</h1>
      <hr />
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <div>
        {/*reduce method */}
        <h1>{numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)}</h1>
      </div>

      <List list={searchedStories} />
      <Greeting detail={greeting}></Greeting>
      <Greeting detail={{ title: "Hi Saurabh, Welcome", description: "Saurabh's greeting" }}></Greeting>

      {/*Spread props*/}
      <Greeting2 {...greeting}></Greeting2>

      <Greeting3 title={greeting.title} description={greeting.description}></Greeting3>

      <button type='button' onClick={handleIncrease}>Increase count</button>
      <button type='button' onClick={handleDecrease}>Decrease count</button>
      Count : {count}
    </div>
  )
};

const List = ({list}) => {
  console.log('List renders');
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectId} item={item}></Item>
      ))}
    </ul>
  );
};

const Item = ({item}) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>,
    <span>{item.num_comments}</span>
  </li>
)

const Search = ({onSearch, searchTerm}) => {

  console.log('Search renders');

  const handleClick = (input) => {
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={onSearch} value={searchTerm} />
      <p>Searching for <strong> {searchTerm} </strong></p>
      <button id="button1" type="button" onClick={() => handleClick('test')}>Event handler</button>
    </div>
  )
};

const Greeting = ({detail}) => (
  <div>
    <h2>{detail.title}</h2>
    <h2>{detail.description}</h2>
  </div>
);

const Greeting2 = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <h2>{description}</h2>
  </div>
);

const Greeting3 = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <h2>{description}</h2>
  </div>
);

export default App
