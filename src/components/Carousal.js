import React from "react";
import '../styles/Home.css'
const Carousal = ({ Datas }) => {
  const RenderData = Datas.map((item) => {
   
    return (
      <div style={{margin:'10px',boxSizing:'borderBox',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div>
          {item.name}
        </div>
        <img src={item.img} alt={item.name} height='100' width='100' />
      </div>
    );
  });
  return (
    <div className='carousalHeader'>
      {RenderData}
    </div>
  );
};

export default Carousal;
