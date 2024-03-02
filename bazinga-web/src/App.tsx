import './App.css';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import AuthSwitchComponent from './components/AuthSwitchComponent';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Outlet />
    </div>
  );
}

export default App;
