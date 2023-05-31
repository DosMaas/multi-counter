import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header';
import { Description } from './Components/description';
import { Counter } from './Components/Counter';

function App() {
  return (
    <>
   <Header/>
   <Description/>
   <Counter />
   <Counter />
   <Counter />
   </>
  );
}

export default App;
