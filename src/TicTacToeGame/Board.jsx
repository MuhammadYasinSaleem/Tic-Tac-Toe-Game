import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
const Reset=()=>{
setState(Array(9).fill(null))
}
  const checkWinner=()=>
  {
    const winnerlogic=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let logic of winnerlogic){
        const [a,b,c]=logic;
        if(state[a]!==null && state[a]===state[b] && state[a]===state[c])
        {
            return state[a];
        }
      }
      return false;
  }
const isWinner=checkWinner();
console.log(isWinner);
  const handleClick = (index) => {
    if(state[index]!=null)
    {
        return;
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "0";
    setState(copyState);
    setIsXturn(!isXturn);
  };

  return (
    <div className="board-container">
      <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"
      }}>Tic Tac Toe</h1>
        {isWinner ? (<><h1>{isWinner} won </h1><br></br><button className="btn" onClick={()=>Reset()}>Start Again</button></>):
        <>
        <h2>Player {isXturn?"X":"0"} Please Move</h2>
        <div className="board-row">
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(3)} value={state[3]} />
        <Square onClick={() => handleClick(4)} value={state[4]} />
        <Square onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(6)} value={state[6]} />
        <Square onClick={() => handleClick(7)} value={state[7]} />
        <Square onClick={() => handleClick(8)} value={state[8]} />
      </div>
      </>
      }
    </div>
  );
};

export default Board;
