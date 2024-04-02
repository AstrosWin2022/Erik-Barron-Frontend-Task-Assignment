import './App.css';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <h1 className="myName">Erik Barron</h1>
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
