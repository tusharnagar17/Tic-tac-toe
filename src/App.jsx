import react, { useEffect, useState } from "react";
import Cell from "./components/cell";
import './index.css'

const App = () => {
  const [cells, setCells] = useState(['','','','','','','','','']);
  const [go, setGo] = useState('circle');
  const [winMessage, setwinMessage] = useState(null);


  const message = "It is " + go + "'s turn"
  
  const checkScore = () => {
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]
    winningCombos.forEach(array => {
      let circleWins = array.every(ptr => cells[ptr]=="circle")
      if(circleWins){
        setwinMessage("Circle Wins")
        return
      }
      let crossWins = array.every(ptr => cells[ptr]=="cross")
      if(crossWins){
        setwinMessage("Cross Wins")
        return
      }


      })
      
  }

  useEffect(()=>{
    checkScore();
  },[cells])
 
  function reset(){
    location.reload();
  }

  console.log(cells)

  return (
    <>
      <div className="app">
        <h1>Tic-tac-toe</h1>
        <div className="gameboard">
          { cells.map((cell, index) => 
            <Cell 
              key={index} 
              id={index} 
              cell={cell} 
              setCells={setCells}
              setGo={setGo}
              go={go}
              cells={cells}
              /> ) }
        </div>
        
        <h2>{winMessage || message}</h2>
        <button onClick={reset}>Reset Game</button>
      </div>
    </>
  );
};

export default App;
