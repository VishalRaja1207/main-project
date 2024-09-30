import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path = "/"
          element = {
            <Login />
          }
        >
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
