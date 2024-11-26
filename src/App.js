//import logo from './logo.svg';
import './App.css';
import Comp1 from './component/Comp1/Comp1';
import Comp2 from './component/Comp2/Comp2';
import Comp3 from './component/Comp3/Comp3';
import Comp4 from './component/Comp4/Comp4';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
//import Main2 from './component/Main2/Main2';
import Mains from './component/Mains/Mains';
//import Section from './component/Section/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Mains />
      <Comp1/>
      <Comp2/>
      <Comp3/>
      <Comp4/>
      <Footer/>
    </div>
  );
}

export default App;
