import './App.css';
import { useStore } from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useState } from 'react';

const App = () => {

  const store = useStore();

  const [_count, _setCount] = useState(store.getState().posts.length);

  store.subscribe(() => {

    _setCount(store.getState().posts.length);

  });

  return (
    <>
      <h1 className="myName">{store.getState().name} - {_count} post{_count !== 1 && "s"}</h1>
      <div className="root">
        <div className="gridContainer">
          <div className="gridPost">
            <Posts />
          </div>
          <div className="gridForm">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
