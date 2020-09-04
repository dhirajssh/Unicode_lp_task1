import React from 'react';

const Output = ({
  Message,
  Success
})=>{
  if(Success){
    return(
      <div className="text-center text-light bg-success mt-3 rounded p-1">
        {Message}
      </div>
    )
  }else{
    return(
      <div className="text-center text-light bg-danger rounded mt-3 p-1">
        {Message}
      </div>
    )
  }
}

export default Output;