import './App.css';
import { useState } from 'react';
import { useStore } from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';


const App = () => {

  const _store = useStore();
  const [_count, _setCount] = useState(_store.getState().posts.length);

  _store.subscribe(() => {

    _setCount(_store.getState().posts.length);

  });

  return (
    <>
      <h1 className="myName">
        {_store.getState().name} - {_count} post{_count !== 1 && "s"}
      </h1>
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
