import './App.css';
import Tree from './Tree';
import data from './DATA.json'

function App() {
  return (
    <div className="App">
      <h1>Tree view</h1>
     <Tree data={data}/>
     
    </div>
  );
}

export default App;
