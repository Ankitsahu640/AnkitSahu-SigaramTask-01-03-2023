import React, { useEffect, useState } from 'react'

function Matrix() {
    const [first,setFirst] = useState(-1);
    const [second,setSecond] = useState(-1);
    const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    const handleClick=(x)=>{
        setSecond(first);
        setFirst(x);
    }

    useEffect(()=>{
        for(let i=0;i<16;++i){
            const colColor = document.getElementById(`col${i}`);
            if(first===i || second===i){
                colColor.style.backgroundColor="red"
            }
            else{
                colColor.style.backgroundColor="blue";
            }
        }
    },[first,second])

  return (
    <div>
      <div className="matrixBox">
      {arr.map((i) =>
            <div className="matrixCol" key={i} value={i} id={`col${i}`} onClick={()=>{handleClick(i)}}> </div>
        )} 
      </div>
    </div>
  )
}

export default Matrix
