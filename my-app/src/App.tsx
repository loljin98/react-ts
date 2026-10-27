import './App.css'
import Drink from './components/Drink';
import DrinkList from './components/DrinkList';
import Greet from './components/Greet'
import Greet2 from './components/Greet2'
import InputValue from './components/InputValue';


function App() {

  const doClick = () => {
    alert("안녕하세요");
  }

  return (
    <>
      <section className="app">
       {/* <InputValue /> */}
       <Drink />
       {/* <DrinkList /> */}
       {/* <Greet name="도경수" age="32" /> */}
       {/* <Greet2 name="도경수" 
               age="32" 
               doClick={doClick} /> */}
      </section>
    </>
  )
}

export default App
