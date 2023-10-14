import './App.css';
import Quotes from './components/quotes'
import Navbar from './components/navbar'
import WebBlocker from './components/WebBlocker';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";



function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Quotes/>
        <Routes>

        {/* <Route exact path="/" element={<Quotes/>} /> */}
        <Route exact path="/WebBlocker" element={<WebBlocker/>} />

        </Routes>
      </Router>
      

    </>
  );
}

export default App;
