import React from 'react'

function ListRendering() {
    const list = [
        "Thar Lay", "Than","Zaw","Htet"
    ];
  return (
    <div>
        {
            list.map((item,index) => (
                <h3 key={index}>{item}</h3>
            ) ) 
        }
    </div>
  )
}

export default ListRendering
