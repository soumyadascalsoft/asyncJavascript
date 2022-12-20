import logo from './logo.svg';
import './App.css';
import Test1 from './components/Test1';
import { Parent } from './components/Parent';

function App() {
  return (
    <div className="App">
     <Test1 name = 'Hello'/>
     <Parent />
    </div>
  );
}

export default App;
