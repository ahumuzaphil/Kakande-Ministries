import Navbar from './Nav'
import './App.css';
import Home from './Home';
import Footer from './Footer'
import Prayer from './pages/prayer'
import Miracle from './pages/miracle'
import Prophecy from './pages/prophecy'
import Preaching from './pages/preaching'
import { Route,Routes } from 'react-router-dom'


function App() {
 // const donate = test.map((item)=>{
   // return<div>
       //<Home key={item.id} items={item}/>
//</div>
    
// })




  return (
    <div className="app">
    <Navbar />
    <Routes>
    <Route path='/' element={ <Home /> }/>
    <Route path='/prayer' element={<Prayer />}/>
    <Route path='/prophecy' element={<Prophecy />}/>
    <Route path='/miracle' element={<Miracle />}/>
    <Route path='/preaching' element={<Preaching />}/>
    
    </Routes>

    <Footer />
    </div>
  );
}

export default App;
