import './App.css';
import Child from './utils/Child';
import Store from './utils/Store';
import { Provider } from 'react-redux';

function App() {
  return (
      <div className='App'>
        Hello
        <Child/>
      </div>
  );
}

export default App;
