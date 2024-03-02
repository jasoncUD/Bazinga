import './App.css';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Outlet />
      <h1>Bazinga</h1>
    </div>
  );
}

export default App;
