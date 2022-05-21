import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Product from './components/product';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Hello</h1>
      <Product/>
      <Footer></Footer>
    </div>
  );
}

export default App;
