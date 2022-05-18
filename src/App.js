import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Productentry from './components/Productentry';
import Searchproduct from './components/Searchproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewproduct from './components/Viewproduct';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<Productentry/>}/>
  <Route path="/search" exact element={<Searchproduct/>}/>
  <Route path="/view" exact element={<Viewproduct/>}/>
</Routes>


</BrowserRouter>


    </div>
  );
}

export default App;
