import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creating components'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setDropdown] = useState(true);

  return (
    <div>
      {showAccordian()}
      {showList()}
      {showDrop()}
      {showTranslate()}
    </div>
  )
}

const showAccordian = () => {
  if(window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
}

const showList = () => {
  if(window.location.pathname === '/list') {
    return <Search />;
  }
}

const showDrop = () => {
  if(window.location.pathname === '/dropdown') {
    return <Dropdown />;
  }
}

const showTranslate= () => {
  if(window.location.pathname === '/translate') {
    return <Translate />;
  }
}


export default App;