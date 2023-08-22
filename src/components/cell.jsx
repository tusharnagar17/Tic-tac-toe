import React from 'react';

const Cell = ({id, index, setCells, setGo, go, cells}) => {

    const handleClick = (e) => {
        // const taken = e.target.firstchild.classList.add("cicle") || 
        const event = e.target.firstChild.classList;
        const taken = event.contains("circle") || event.contains("cross")
        
        if(!taken){
           if(go === "circle"){
                event.add("circle")
                handleChange("circle")
                setGo("cross")
                
           }
           if(go === "cross"){
                event.add("cross")
                handleChange("cross")
                setGo("circle")
           }
        }
    }
    const handleChange = (className) => {
        const newCells = cells.map((cell, index) => {
            if(index === id) {
                return className
            }else {return cell}
        })
        setCells(newCells)
    } 


  return (
    <>
    <div className='square' id={id} index={index} onClick={handleClick}>
        <div className=""></div>
    </div>
    </>
  )
}

export default Cell