import React from 'react';
import ReactDOM from 'react-dom';
import './titlestyle.scss';


function App() {
  return (
    <div>
      <h1 className="fontcolor">Hello React!</h1>
    </div>
  );
}
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);

export default App;