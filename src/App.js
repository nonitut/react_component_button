
import './App.css';
import React from 'react';
import Header from './Header'
import Buttonic from './Buttonic';
import Buttonwood from './Button_props';
import Buttoncomp from './Button_component';

function Button(){
  return <button> Добавить </button>
}

function App() {

  const clickPoKnopke = () => {
    alert("Hello!")
    // анонимная функция 
  }

  return (
    <div className="App">
        <Header/>
        <Buttonic text="test"/>
        <Button outline/>
        <Buttonwood> Второстепенная кнопка</Buttonwood>
        <Buttoncomp onClick={clickPoKnopke}> Component button </Buttoncomp>
        {/* так как компонент отдельно начинаем с большой буквы */}
        <button onClick={clickPoKnopke}> here </button>
        {/* а тут все написано на 1 странице - по этому по тегу  */}
    </div>
  );
}

export default App;
